import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { throwPrismaError } from 'src/utils/throw-prisma-error.function';
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
        throwPrismaError(err);
      });
  }

  async findMany(fileFindManyArgs: FileFindManyArgs) {
    return this.prisma.file
      .findMany(fileFindManyArgs)
      .then((files) => {
        return files;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  async findOne(fileFindUniqueArgs: FileFindUniqueArgs): Promise<File | void> {
    return await this.prisma.file
      .findUnique(fileFindUniqueArgs)
      .then((file) => {
        return file;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  async update(fileUpdateOneArgs: FileUpdateOneArgs): Promise<File | void> {
    return this.prisma.file
      .update(fileUpdateOneArgs)
      .then((file) => {
        return file;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  async remove(fileId: number): Promise<boolean | void>{
    return await this.prisma.file
      .delete({
        where: { id: fileId },
      })
      .then(() => {
        return true;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }
}
