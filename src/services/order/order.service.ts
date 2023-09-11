import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  async createOne(orderCreateArgs: Prisma.OrderCreateArgs) {
    try {
      return await this.prisma.order.create(orderCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(orderCreateManyArgs: Prisma.OrderCreateManyArgs) {
    try {
      return await this.prisma.order.createMany(orderCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(orderFindUniqueArgs: Prisma.OrderFindUniqueArgs) {
    try {
      return await this.prisma.order.findUnique(orderFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(orderFindManyArgs: Prisma.OrderFindManyArgs) {
    try {
      return await this.prisma.order.findMany(orderFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(orderFindFirstArgs: Prisma.OrderFindFirstArgs) {
    try {
      return await this.prisma.order.findFirst(orderFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(orderUpdateOneArgs: Prisma.OrderUpdateArgs) {
    try {
      return await this.prisma.order.update(orderUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(orderUpdateManyArgs: Prisma.OrderUpdateManyArgs) {
    try {
      return await this.prisma.order.updateMany(orderUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(orderDeleteArgs: Prisma.OrderDeleteArgs) {
    try {
      await this.prisma.order.delete(orderDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(orderDeleteManyArgs: Prisma.OrderDeleteManyArgs) {
    try {
      await this.prisma.order.deleteMany(orderDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(orderAggregateArgs: Prisma.OrderAggregateArgs) {
    try {
      return await this.prisma.order.aggregate(orderAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(orderCountArgs: Prisma.OrderCountArgs) {
    try {
      return await this.prisma.order.count(orderCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
