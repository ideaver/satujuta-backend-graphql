import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { CreateOneFileArgs, File } from 'src/@generated';
import { FileFindManyArgs } from './dto/file-find-many.args';
import { FileFindUniqueArgs } from './dto/file-find-one.args';
import { FileUpdateOneArgs } from './dto/file-update-one.args';

@Injectable()
export class FileService {
  constructor(private prisma: PrismaService) {}

  async createOne(fileCreateArgs: CreateOneFileArgs): Promise<File | void> {
    return await this.prisma.file
      .create(fileCreateArgs)
      .then((file) => {
        return file;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async findMany(fileFindManyArgs: FileFindManyArgs) {
    return this.prisma.file
      .findMany(fileFindManyArgs)
      .then((files) => {
        return files;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async findOne(fileFindUniqueArgs: FileFindUniqueArgs): Promise<File | void> {
    return await this.prisma.file
      .findUnique(fileFindUniqueArgs)
      .then((file) => {
        return file;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async update(fileUpdateOneArgs: FileUpdateOneArgs): Promise<File | void> {
    return this.prisma.file
      .update(fileUpdateOneArgs)
      .then((file) => {
        return file;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async remove(fileId: number): Promise<boolean | void> {
    return await this.prisma.file
      .delete({
        where: { id: fileId },
      })
      .then(() => {
        return true;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }
}
