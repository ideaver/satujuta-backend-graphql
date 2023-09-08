import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class FileService {
  constructor(private prisma: PrismaService) {}

  async createOne(fileCreateArgs: Prisma.FileCreateArgs) {
    try {
      return await this.prisma.file.create(fileCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(fileCreateManyArgs: Prisma.FileCreateManyArgs) {
    try {
      return await this.prisma.file.createMany(fileCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(fileFindUniqueArgs: Prisma.FileFindUniqueArgs) {
    try {
      return await this.prisma.file.findUnique(fileFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(fileFindManyArgs: Prisma.FileFindManyArgs) {
    try {
      return await this.prisma.file.findMany(fileFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(fileFindFirstArgs: Prisma.FileFindFirstArgs) {
    try {
      return await this.prisma.file.findFirst(fileFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(fileUpdateOneArgs: Prisma.FileUpdateArgs) {
    try {
      return await this.prisma.file.update(fileUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(fileUpdateManyArgs: Prisma.FileUpdateManyArgs) {
    try {
      return await this.prisma.file.updateMany(fileUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(fileDeleteArgs: Prisma.FileDeleteArgs) {
    try {
      await this.prisma.file.delete(fileDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(fileDeleteManyArgs: Prisma.FileDeleteManyArgs) {
    try {
      await this.prisma.file.deleteMany(fileDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(fileAggregateArgs: Prisma.FileAggregateArgs) {
    try {
      return await this.prisma.file.aggregate(fileAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(fileCountArgs: Prisma.FileCountArgs) {
    try {
      return await this.prisma.file.count(fileCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
