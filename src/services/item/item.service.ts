import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class ItemService {
  constructor(private prisma: PrismaService) {}

  async createOne(itemCreateArgs: Prisma.ItemCreateArgs) {
    try {
      return await this.prisma.item.create(itemCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(itemCreateManyArgs: Prisma.ItemCreateManyArgs) {
    try {
      return await this.prisma.item.createMany(itemCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(itemFindUniqueArgs: Prisma.ItemFindUniqueArgs) {
    try {
      return await this.prisma.item.findUnique(itemFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(itemFindManyArgs: Prisma.ItemFindManyArgs) {
    try {
      return await this.prisma.item.findMany(itemFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(itemFindFirstArgs: Prisma.ItemFindFirstArgs) {
    try {
      return await this.prisma.item.findFirst(itemFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(itemUpdateOneArgs: Prisma.ItemUpdateArgs) {
    try {
      return await this.prisma.item.update(itemUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(itemUpdateManyArgs: Prisma.ItemUpdateManyArgs) {
    try {
      return await this.prisma.item.updateMany(itemUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(itemDeleteArgs: Prisma.ItemDeleteArgs) {
    try {
      await this.prisma.item.delete(itemDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(itemDeleteManyArgs: Prisma.ItemDeleteManyArgs) {
    try {
      await this.prisma.item.deleteMany(itemDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(itemAggregateArgs: Prisma.ItemAggregateArgs) {
    try {
      return await this.prisma.item.aggregate(itemAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(itemCountArgs: Prisma.ItemCountArgs) {
    try {
      return await this.prisma.item.count(itemCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
