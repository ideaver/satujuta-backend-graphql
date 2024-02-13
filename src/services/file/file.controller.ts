import { Injectable } from '@nestjs/common';
import { FileType, Prisma } from '@prisma/client';
import { FileService } from './file.service';
import {
  detectMimeTypeFromFilenameOrUrl,
  mapFileTypeEnumFromMIME,
} from 'src/utils/mime-types.function';
import axios from 'axios';
import mime from 'mime';

@Injectable()
export class FileController {
  constructor(private readonly fileService: FileService) {}

  async createOne(fileCreateArgs: Prisma.FileCreateArgs) {
    try {
      const response = await axios.head(fileCreateArgs.data.url, {
        responseType: 'stream',
      });
      const mimeType =
        response.headers['content-type'] || 'application/octet-stream';

      fileCreateArgs.data.fileType = mapFileTypeEnumFromMIME(mimeType);
      fileCreateArgs.data.filesize =
        parseInt(response.headers['content-length'], 10) || 0;
    } catch (error) {
      console.error('Error fetching file metadata:', error);
      throw error;
    }

    return await this.fileService.createOne(fileCreateArgs);
  }

  async createMany(fileCreateManyArgs: Prisma.FileCreateManyArgs) {
    return await this.fileService.createMany(fileCreateManyArgs);
  }

  async findOne(fileFindUniqueArgs: Prisma.FileFindUniqueArgs) {
    return await this.fileService.findOne(fileFindUniqueArgs);
  }

  async findMany(fileFindManyArgs: Prisma.FileFindManyArgs) {
    return await this.fileService.findMany(fileFindManyArgs);
  }

  async findFirst(fileFindFirstArgs: Prisma.FileFindFirstArgs) {
    return await this.fileService.findFirst(fileFindFirstArgs);
  }

  async updateOne(fileUpdateOneArgs: Prisma.FileUpdateArgs) {
    return await this.fileService.updateOne(fileUpdateOneArgs);
  }

  async updateMany(fileUpdateManyArgs: Prisma.FileUpdateManyArgs) {
    return await this.fileService.updateMany(fileUpdateManyArgs);
  }

  async delete(fileDeleteArgs: Prisma.FileDeleteArgs) {
    return await this.fileService.delete(fileDeleteArgs);
  }

  async deleteMany(fileDeleteManyArgs: Prisma.FileDeleteManyArgs) {
    return await this.fileService.deleteMany(fileDeleteManyArgs);
  }

  async aggregate(fileAggregateArgs: Prisma.FileAggregateArgs) {
    return await this.fileService.aggregate(fileAggregateArgs);
  }

  async count(fileCountArgs: Prisma.FileCountArgs) {
    return await this.fileService.count(fileCountArgs);
  }
}
