import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ImagesService } from './images.service';

@Injectable()
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  async createOne(imagesCreateArgs: Prisma.ImagesCreateArgs) {
    return await this.imagesService.createOne(imagesCreateArgs);
  }

  async createMany(imagesCreateManyArgs: Prisma.ImagesCreateManyArgs) {
    return await this.imagesService.createMany(imagesCreateManyArgs);
  }

  async findOne(imagesFindUniqueArgs: Prisma.ImagesFindUniqueArgs) {
    return await this.imagesService.findOne(imagesFindUniqueArgs);
  }

  async findMany(imagesFindManyArgs: Prisma.ImagesFindManyArgs) {
    return await this.imagesService.findMany(imagesFindManyArgs);
  }

  async findFirst(imagesFindFirstArgs: Prisma.ImagesFindFirstArgs) {
    return await this.imagesService.findFirst(imagesFindFirstArgs);
  }

  async updateOne(imagesUpdateOneArgs: Prisma.ImagesUpdateArgs) {
    return await this.imagesService.updateOne(imagesUpdateOneArgs);
  }

  async updateMany(imagesUpdateManyArgs: Prisma.ImagesUpdateManyArgs) {
    return await this.imagesService.updateMany(imagesUpdateManyArgs);
  }

  async delete(imagesDeleteArgs: Prisma.ImagesDeleteArgs) {
    return await this.imagesService.delete(imagesDeleteArgs);
  }

  async deleteMany(imagesDeleteManyArgs: Prisma.ImagesDeleteManyArgs) {
    return await this.imagesService.deleteMany(imagesDeleteManyArgs);
  }

  async aggregate(imagesAggregateArgs: Prisma.ImagesAggregateArgs) {
    return await this.imagesService.aggregate(imagesAggregateArgs);
  }

  async count(imagesCountArgs: Prisma.ImagesCountArgs) {
    return await this.imagesService.count(imagesCountArgs);
  }
}
