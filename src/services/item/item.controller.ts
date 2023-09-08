import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ItemService } from './item.service';

@Injectable()
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  async createOne(itemCreateArgs: Prisma.ItemCreateArgs) {
    return await this.itemService.createOne(itemCreateArgs);
  }

  async createMany(itemCreateManyArgs: Prisma.ItemCreateManyArgs) {
    return await this.itemService.createMany(itemCreateManyArgs);
  }

  async findOne(itemFindUniqueArgs: Prisma.ItemFindUniqueArgs) {
    return await this.itemService.findOne(itemFindUniqueArgs);
  }

  async findMany(itemFindManyArgs: Prisma.ItemFindManyArgs) {
    return await this.itemService.findMany(itemFindManyArgs);
  }

  async findFirst(itemFindFirstArgs: Prisma.ItemFindFirstArgs) {
    return await this.itemService.findFirst(itemFindFirstArgs);
  }

  async updateOne(itemUpdateOneArgs: Prisma.ItemUpdateArgs) {
    return await this.itemService.updateOne(itemUpdateOneArgs);
  }

  async updateMany(itemUpdateManyArgs: Prisma.ItemUpdateManyArgs) {
    return await this.itemService.updateMany(itemUpdateManyArgs);
  }

  async delete(itemDeleteArgs: Prisma.ItemDeleteArgs) {
    return await this.itemService.delete(itemDeleteArgs);
  }

  async deleteMany(itemDeleteManyArgs: Prisma.ItemDeleteManyArgs) {
    return await this.itemService.deleteMany(itemDeleteManyArgs);
  }

  async aggregate(itemAggregateArgs: Prisma.ItemAggregateArgs) {
    return await this.itemService.aggregate(itemAggregateArgs);
  }

  async count(itemCountArgs: Prisma.ItemCountArgs) {
    return await this.itemService.count(itemCountArgs);
  }
}
