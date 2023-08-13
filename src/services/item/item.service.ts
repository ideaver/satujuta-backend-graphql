import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { throwPrismaError } from 'src/utils/throw-prisma-error.function';
import { CreateOneItemArgs, Item } from 'src/@generated';
import { ItemFindManyArgs } from './dto/item-find-many.args';
import { ItemFindUniqueArgs } from './dto/item-find-one.args';
import { ItemUpdateOneArgs } from './dto/item-update-one.args';

@Injectable()
export class ItemService {
  constructor(private prisma: PrismaService) {}

  async createOne(itemCreateArgs: CreateOneItemArgs): Promise<Item | void> {

    return await this.prisma.item
      .create(itemCreateArgs)
      .then((item) => {
        return item;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  async findMany(itemFindManyArgs: ItemFindManyArgs) {
    return this.prisma.item
      .findMany(itemFindManyArgs)
      .then((items) => {
        return items;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  async findOne(itemFindUniqueArgs: ItemFindUniqueArgs): Promise<Item | void> {
    return await this.prisma.item
      .findUnique(itemFindUniqueArgs)
      .then((item) => {
        return item;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  async update(itemUpdateOneArgs: ItemUpdateOneArgs): Promise<Item | void> {
    return this.prisma.item
      .update(itemUpdateOneArgs)
      .then((item) => {
        return item;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  async remove(itemId: number): Promise<boolean | void>{
    return await this.prisma.item
      .delete({
        where: { id: itemId },
      })
      .then(() => {
        return true;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }
}
