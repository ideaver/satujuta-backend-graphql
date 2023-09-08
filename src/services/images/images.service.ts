import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class ImagesService {
  constructor(private prisma: PrismaService) {}

  async createOne(imagesCreateArgs: Prisma.ImagesCreateArgs) {
    try {
      return await this.prisma.images.create(imagesCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(imagesCreateManyArgs: Prisma.ImagesCreateManyArgs) {
    try {
      return await this.prisma.images.createMany(imagesCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(imagesFindUniqueArgs: Prisma.ImagesFindUniqueArgs) {
    try {
      return await this.prisma.images.findUnique(imagesFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(imagesFindManyArgs: Prisma.ImagesFindManyArgs) {
    try {
      return await this.prisma.images.findMany(imagesFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(imagesFindFirstArgs: Prisma.ImagesFindFirstArgs) {
    try {
      return await this.prisma.images.findFirst(imagesFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(imagesUpdateOneArgs: Prisma.ImagesUpdateArgs) {
    try {
      return await this.prisma.images.update(imagesUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(imagesUpdateManyArgs: Prisma.ImagesUpdateManyArgs) {
    try {
      return await this.prisma.images.updateMany(imagesUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(imagesDeleteArgs: Prisma.ImagesDeleteArgs) {
    try {
      await this.prisma.images.delete(imagesDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(imagesDeleteManyArgs: Prisma.ImagesDeleteManyArgs) {
    try {
      await this.prisma.images.deleteMany(imagesDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(imagesAggregateArgs: Prisma.ImagesAggregateArgs) {
    try {
      return await this.prisma.images.aggregate(imagesAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(imagesCountArgs: Prisma.ImagesCountArgs) {
    try {
      return await this.prisma.images.count(imagesCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
