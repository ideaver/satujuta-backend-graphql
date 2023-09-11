import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ShippingService } from './shipping.service';

@Injectable()
export class ShippingController {
  constructor(private readonly shippingService: ShippingService) {}

  async createOne(shippingCreateArgs: Prisma.ShippingCreateArgs) {
    return await this.shippingService.createOne(shippingCreateArgs);
  }

  async createMany(shippingCreateManyArgs: Prisma.ShippingCreateManyArgs) {
    return await this.shippingService.createMany(shippingCreateManyArgs);
  }

  async findOne(shippingFindUniqueArgs: Prisma.ShippingFindUniqueArgs) {
    return await this.shippingService.findOne(shippingFindUniqueArgs);
  }

  async findMany(shippingFindManyArgs: Prisma.ShippingFindManyArgs) {
    return await this.shippingService.findMany(shippingFindManyArgs);
  }

  async findFirst(shippingFindFirstArgs: Prisma.ShippingFindFirstArgs) {
    return await this.shippingService.findFirst(shippingFindFirstArgs);
  }

  async updateOne(shippingUpdateOneArgs: Prisma.ShippingUpdateArgs) {
    return await this.shippingService.updateOne(shippingUpdateOneArgs);
  }

  async updateMany(shippingUpdateManyArgs: Prisma.ShippingUpdateManyArgs) {
    return await this.shippingService.updateMany(shippingUpdateManyArgs);
  }

  async delete(shippingDeleteArgs: Prisma.ShippingDeleteArgs) {
    return await this.shippingService.delete(shippingDeleteArgs);
  }

  async deleteMany(shippingDeleteManyArgs: Prisma.ShippingDeleteManyArgs) {
    return await this.shippingService.deleteMany(shippingDeleteManyArgs);
  }

  async aggregate(shippingAggregateArgs: Prisma.ShippingAggregateArgs) {
    return await this.shippingService.aggregate(shippingAggregateArgs);
  }

  async count(shippingCountArgs: Prisma.ShippingCountArgs) {
    return await this.shippingService.count(shippingCountArgs);
  }
}
