import {
  DeleteObjectCommand,
  HeadObjectCommand,
  HeadObjectOutput,
  PutObjectCommand,
  S3Client,
} from '@aws-sdk/client-s3';
import { Injectable, Logger, LoggerService } from '@nestjs/common';
import sharp from 'sharp';
import { Readable } from 'stream';
import { v4 as uuidV4 } from 'uuid';
import {
  IMAGE_SIZE,
  MAX_WIDTH,
  QUALITY_ARRAY,
} from './constants/uploader.constant';
import { FileUploadDto } from './dtos/file-upload.dto';
import { RatioEnum } from './enums/ratio.enum';
import { IBucketData } from './interfaces/bucket-data.interface';
import { ConfigService } from '@nestjs/config';
import { detectMimeTypeFromFilename } from 'src/utils/mime-types.function';
import { S3Config } from 'src/config/s3config.model';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { FileType } from '@prisma/client';

@Injectable()
export class UploaderService {
  private readonly client: S3Client;
  private readonly bucketData: IBucketData;
  private readonly loggerService: LoggerService;

  constructor(private readonly configService: ConfigService) {
    const s3Config = this.configService.get<S3Config>('S3');

    this.client = new S3Client(s3Config.clientConfig);
    this.bucketData = s3Config.bucketData;
    this.loggerService = new Logger(UploaderService.name);
  }

  public async getFileMetadata(
    url: string,
  ): Promise<{ size: number; mimeType: string }> {
    // Split the URL by '.com/' to get the parts
    const urlParts = url.split('.com/');

    if (urlParts.length !== 2) {
      this.loggerService.error('Invalid URL format for getting file metadata');
      throw new Error('Invalid URL format');
    }

    // Extract the key (object path)
    const key = urlParts[1];

    // Construct the bucket name from the first part of the URL
    const bucketName = urlParts[0].replace('https://', '').split('.s3.')[0];

    // Check if the bucket name matches your expected bucket
    if (bucketName !== this.bucketData.name) {
      this.loggerService.error('Invalid bucket name in URL');
      throw new Error('Invalid bucket name');
    }

    try {
      const response: HeadObjectOutput = await this.client.send(
        new HeadObjectCommand({
          Bucket: this.bucketData.name,
          Key: key,
        }),
      );

      const metadata = {
        size: response.ContentLength || 0,
        mimeType: response.ContentType || '',
        // Add any other desired metadata fields here
      };

      return metadata;
    } catch (error) {
      this.loggerService.error(error);
      throw error;
    }
  }

  private static validateImage(mimetype: string): string | false {
    const val = mimetype.split('/');
    if (val[0] !== 'image') return false;

    return val[1] ?? false;
  }

  private static async streamToBuffer(stream: Readable): Promise<Buffer> {
    const buffer: Uint8Array[] = [];

    return new Promise((resolve, reject) =>
      stream
        .on('error', (error) => reject(error))
        .on('data', (data) => buffer.push(data))
        .on('end', () => resolve(Buffer.concat(buffer))),
    );
  }

  private static async compressImage(
    buffer: Buffer,
    ratio?: number,
  ): Promise<Buffer> {
    let compressBuffer: sharp.Sharp = sharp(buffer).jpeg({
      mozjpeg: true,
      chromaSubsampling: '4:4:4',
    });

    if (ratio) {
      compressBuffer = compressBuffer.resize({
        width: MAX_WIDTH,
        height: Math.round(MAX_WIDTH * ratio),
        fit: 'cover',
      });
    }

    let quality = 30;
    let smallerBuffer: Buffer;

    do {
      smallerBuffer = await compressBuffer
        .jpeg({
          quality,
          chromaSubsampling: '4:4:4',
        })
        .toBuffer();

      if (smallerBuffer.length > IMAGE_SIZE) {
        quality -= 25; // Reduce quality if the image is still too large
      }
    } while (smallerBuffer.length > IMAGE_SIZE && quality >= 10);

    return smallerBuffer;
  }

  /**
   * Upload Image
   *
   * Converts an image to jpeg and uploads it to the bucket
   */
  public async uploadImage({
    userId,
    ratio,
    file,
  }: {
    userId: string;
    file: Promise<FileUploadDto>;
    ratio?: RatioEnum;
  }): Promise<string> {
    const { filename, createReadStream } = await file;

    const imageType = UploaderService.validateImage(
      detectMimeTypeFromFilename(filename),
    );

    if (!imageType) {
      throw new IGraphQLError({ code: 160002 });
    }

    try {
      return await this.uploadFile({
        userId: userId,
        filename: filename,
        fileBuffer: await UploaderService.compressImage(
          await UploaderService.streamToBuffer(createReadStream()),
          ratio,
        ),
        fileExt: '.' + FileType.JPG.toLocaleLowerCase(),
      });
    } catch (error) {
      this.loggerService.error(error);
      throw new IGraphQLError({ code: 160001, err: error });
    }
  }

  /**
   * Delete File
   *
   * Takes a file url and deletes the file from the bucket
   */
  public deleteFile(url: string): void {
    // Split the URL by '.com/' to get the parts
    const urlParts = url.split('.com/');

    if (urlParts.length !== 2) {
      this.loggerService.error('Invalid URL format for deleting file');
      return;
    }

    // Extract the key (object path)
    const key = urlParts[1];

    // Construct the bucket name from the first part of the URL
    const bucketName = urlParts[0].replace('https://', '').split('.s3.')[0];

    // Check if the bucket name matches your expected bucket
    if (bucketName !== this.bucketData.name) {
      this.loggerService.error('Invalid bucket name in URL');
      return;
    }

    // Delete the object using the extracted key and bucket name
    this.client
      .send(
        new DeleteObjectCommand({
          Bucket: this.bucketData.name,
          Key: key,
        }),
      )
      .then(() => {
        this.loggerService.log('File deleted successfully');
      })
      .catch((error) => {
        this.loggerService.error(error);
      });
  }

  private async uploadFile({
    userId,
    fileBuffer,
    fileExt,
    filename,
  }: {
    userId: string;
    fileBuffer: Buffer;
    fileExt: string;
    filename: string;
  }): Promise<string> {
    // const key =
    //   this.bucketData.folder +
    //   '/' +
    //   uuidV5(userId.toString(), this.bucketData.appUuid) +
    //   '/' +
    //   uuidV4() +
    //   fileExt;

    //TODO: Implement maxfilesize for each enum file type

    const key =
      this.bucketData.folder +
      '/' +
      fileExt +
      '/' +
      userId.toString() +
      '/' +
      uuidV4() +
      fileExt;

    try {
      await this.client.send(
        new PutObjectCommand({
          Bucket: this.bucketData.name,
          Body: fileBuffer,
          Key: key,
          ACL: 'public-read',
          ContentType: detectMimeTypeFromFilename(filename),
        }),
      );
    } catch (error) {
      this.loggerService.error(error);
      throw new IGraphQLError({ code: 160001, err: error });
    }

    return this.bucketData.url + key;
  }
}
