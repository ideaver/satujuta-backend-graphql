import { Injectable } from '@nestjs/common';
import { OrderCreateArgs } from './dto/order-create-one.args';
import { PrismaService } from 'prisma/prisma.service';
import { OrderFindManyArgs as OrderFindManyArgs } from './dto/order-find-many.args';
import { OrderFindUniqueArgs } from './dto/order-find-one.args';
import { OrderUpdateOneArgs } from './dto/order-update-one.args';
import { throwPrismaError } from 'src/utils/throw-prisma-error.function';
import { FindManyOrderArgs, Order } from 'src/@generated';
import { Prisma } from '@prisma/client';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  async createOne(
    orderCreateArgs: Prisma.OrderCreateArgs,
  ): Promise<Order | void> {
    return await this.prisma.order
      .create(orderCreateArgs)
      .then((order) => {
        return order;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  async findMany(orderFindManyArgs: OrderFindManyArgs) {
    return this.prisma.order
      .findMany(orderFindManyArgs)
      .then((orders) => {
        return orders;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  async findOne(
    orderFindUniqueArgs: OrderFindUniqueArgs,
  ): Promise<Order | void> {
    return await this.prisma.order
      .findUnique(orderFindUniqueArgs)
      .then((order) => {
        return order;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  async update(orderUpdateOneArgs: OrderUpdateOneArgs): Promise<Order | void> {
    return this.prisma.order
      .update(orderUpdateOneArgs)
      .then((order) => {
        return order;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  async remove(orderId: number) {
    return await this.prisma.order
      .delete({
        where: { id: orderId },
      })
      .then((order) => {
        return order;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  async count(findManyOrderArgs: FindManyOrderArgs) {
    return await this.prisma.order
      .count(findManyOrderArgs)
      .then((order) => {
        return order;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }
}
