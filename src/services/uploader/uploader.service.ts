import {
  DeleteObjectCommand,
  HeadObjectCommand,
  HeadObjectOutput,
  PutObjectCommand,
  S3Client,
  ListObjectsV2Command,
  ListObjectsV2CommandInput,
  ListObjectsV2CommandOutput,
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
import { MAX_FILE_SIZES } from './constants';
import { UserController } from '../user/user.controller';
import { TransactionController } from '../transaction/transaction.controller';
import { WithdrawalRequestController } from '../withdrawal-request/withdrawal-request.controller';
import { BankController } from '../bank/bank.controller';

@Injectable()
export class UploaderService {
  private readonly client: S3Client;
  private readonly bucketData: IBucketData;
  private readonly loggerService: LoggerService;

  constructor(
    private readonly configService: ConfigService,
    private readonly userController: UserController,
    private readonly transactionController: TransactionController,
    private readonly withdrawalRequestController: WithdrawalRequestController,
    private readonly bankController: BankController,
    private readonly fileController: FileController,
    private readonly imagesController: ImagesController,
  ) {
    const s3Config = this.configService.get<S3Config>('S3');

    this.client = new S3Client(s3Config.clientConfig);
    this.bucketData = s3Config.bucketData;
    this.loggerService = new Logger(UploaderService.name);
  }

  public async getFileMetadataFromS3(
    url: string,
  ): Promise<{ size: number; mimeType: string }> {
    // Split the URL by '.com/' to get the parts
    const urlParts = url.split('.com/');

    if (urlParts.length !== 2) {
      throw new IGraphQLError({ code: 170002 });
    }

    // Extract the key (object path)
    const key = urlParts[1];

    // Construct the bucket name from the first part of the URL
    const bucketName = urlParts[0].replace('https://', '').split('.s3.')[0];

    // Check if the bucket name matches your expected bucket
    if (bucketName !== this.bucketData.name) {
      throw new IGraphQLError({ code: 170001 });
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
      };

      return metadata;
    } catch (error) {
      this.loggerService.error(error);
      throw error;
    }
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
   * Delete File
   *
   * Takes a file url and deletes the file from the bucket
   */
  public async deleteOneFile(url: string): Promise<void> {
    // Split the URL by '.com/' to get the parts
    const urlParts = url.split('.com/');

    if (urlParts.length !== 2) {
      throw new IGraphQLError({ code: 170002 });
    }

    // Extract the key (object path)
    const key = urlParts[1];

    // Construct the bucket name from the first part of the URL
    const bucketName = urlParts[0].replace('https://', '').split('.s3.')[0];

    // Check if the bucket name matches your expected bucket
    if (bucketName !== this.bucketData.name) {
      throw new IGraphQLError({ code: 170001 });
    }

    // Delete the object using the extracted key and bucket name
    await this.client
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
        throw new IGraphQLError({ code: 170003 });
      });
  }

  public async deleteManyFile(urls: string[]): Promise<void> {
    const deletePromises = [];

    for (const url of urls) {
      // Use async/await to call deleteFile asynchronously
      deletePromises.push(this.deleteOneFile(url));
    }

    try {
      // Wait for all delete operations to complete in parallel
      await Promise.all(deletePromises);
    } catch (error) {
      throw new IGraphQLError({ code: 170003 });
    }
  }

  public async uploadSingleFile({
    userId,
    file,
    ratioForImage: ratio,
  }: {
    userId: string;
    file: Promise<FileUploadDto>;
    ratioForImage?: RatioEnum;
  }): Promise<string> {
    try {
      const { filename, createReadStream } = await file;

      // Identify the file type based on the file's extension or MIME type
      let fileExt = detectMimeTypeFromFilename(filename);
      let fileType: FileType;

      // If the file has an extension, get the file type from the extension
      if (fileExt) {
        fileExt = `.${fileExt.toLowerCase()}`;
        fileType = FileType[fileExt.toLowerCase() as keyof typeof FileType];
      } else {
        // If the file doesn't have an extension, get the file type from the MIME type
        fileType =
          FileType[
            filename.split('/')[1].toUpperCase() as keyof typeof FileType
          ];
      }

      // If the file type is not supported, throw an error
      if (!fileType) {
        throw new IGraphQLError({ code: 170005 });
      }

      // Convert the file stream to a buffer
      let fileBuffer = await UploaderService.streamToBuffer(createReadStream());

      // Get the file size
      const fileSize = fileBuffer.length;

      // Check if the file size exceeds the maximum allowed size for the detected file type
      if (fileSize > MAX_FILE_SIZES[fileType]) {
        throw new IGraphQLError({ code: 170004 }); // You can define a custom error code for this case
      }

      // If it's an image, compress and convert it to JPEG
      if (fileType === FileType.JPG || fileType === FileType.PNG) {
        fileBuffer = await UploaderService.compressImage(fileBuffer, ratio);
        fileExt = `.${FileType.JPG.toLowerCase()}`;
      }

      // Generate a unique key for the file
      const key = `${
        this.bucketData.folder
      }/${fileExt}/${userId}/${uuidV4()}${fileExt}`;

      // Upload the file to the bucket
      await this.client.send(
        new PutObjectCommand({
          Bucket: this.bucketData.name,
          Body: fileBuffer,
          Key: key,
          ACL: 'public-read',
          ContentType: detectMimeTypeFromFilename(filename),
        }),
      );

      return `${this.bucketData.url}${key}`;
    } catch (error) {
      throw new IGraphQLError({ code: 160001, err: error });
    }
  }

  public async uploadMultipleFiles({
    userId,
    files,
    ratioForImage,
  }: {
    userId: string;
    files: Promise<FileUploadDto>[];
    ratioForImage?: RatioEnum;
  }): Promise<string[]> {
    try {
      const uploadPromises = files.map(async (file) => {
        return await this.uploadSingleFile({ userId, file, ratioForImage });
      });

      return await Promise.all(uploadPromises);
    } catch (error) {
      // Handle errors as needed
      throw new IGraphQLError({ code: 160001, err: error });
    }
  }

  public async listAllS3Objects(prefix: string = ''): Promise<string[]> {
    const objectKeys: string[] = [];
    const params: ListObjectsV2CommandInput = {
      Bucket: this.bucketData.name,
      Prefix: prefix,
    };

    try {
      const data: ListObjectsV2CommandOutput = await this.client.send(
        new ListObjectsV2Command(params),
      );

      if (data.Contents) {
        for (const object of data.Contents) {
          if (object.Key) {
            objectKeys.push(object.Key);
          }
        }
      }

      if (data.CommonPrefixes) {
        for (const commonPrefix of data.CommonPrefixes) {
          // Recursively list objects in the subfolder
          const subfolderObjects = await this.listAllS3Objects(
            commonPrefix.Prefix,
          );
          objectKeys.push(...subfolderObjects);
        }
      }
    } catch (error) {
      this.loggerService.error(error);
      throw error;
    }

    return objectKeys;
  }

  public async deleteOrphanedS3Objects(): Promise<void> {
    const s3ObjectKeys = await this.listAllS3Objects();

    try {
      // Fetch URLs from the database for each model
      const userAvatarUrls = await this.userController.findMany({
        select: {
          avatarUrl: true,
        },
      });

      const transactionProofUrls = await this.transactionController.findMany({
        select: {
          proofUrl: true,
        },
      });

      const withdrawalRequestProofUrls =
        await this.withdrawalRequestController.findMany({
          select: {
            proofUrl: true,
          },
        });

      const bankLogoUrls = await this.bankController.findMany({
        select: {
          logoUrl: true,
        },
      });

      const fileUrls = await this.fileController.findMany({
        select: {
          url: true,
        },
      });

      const imagesUrls = await this.imagesController.findMany({
        select: {
          url: true,
        },
      });

      // Combine all fetched URLs into a single array
      const urlsInDatabase = [
        ...userAvatarUrls.map((user) => user.avatarUrl).filter(Boolean),
        ...transactionProofUrls
          .map((transaction) => transaction.proofUrl)
          .filter(Boolean),
        ...withdrawalRequestProofUrls
          .map((request) => request.proofUrl)
          .filter(Boolean),
        ...bankLogoUrls.map((bank) => bank.logoUrl),
        ...fileUrls.map((file) => file.url),
        ...imagesUrls.map((image) => image.url),
      ];

      // Identify orphaned S3 objects (not in the database)
      const orphanedObjectKeys = s3ObjectKeys.filter(
        (s3ObjectKey) =>
          !urlsInDatabase.includes(`${this.bucketData.url}${s3ObjectKey}`),
      );

      // Delete orphaned S3 objects
      await this.deleteManyFile(orphanedObjectKeys);
    } catch (error) {
      this.loggerService.error(error);
      throw error;
    }
  }
}
