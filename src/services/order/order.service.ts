import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { throwPrismaError } from 'src/utils/throw-prisma-error.function';
import { CreateOneOrderArgs, Order } from 'src/@generated';
import { OrderFindManyArgs } from './dto/order-find-many.args';
import { OrderFindUniqueArgs } from './dto/order-find-one.args';
import { OrderUpdateOneArgs } from './dto/order-update-one.args';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  async createOne(orderCreateArgs: CreateOneOrderArgs): Promise<Order | void> {

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

  async findOne(orderFindUniqueArgs: OrderFindUniqueArgs): Promise<Order | void> {
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

  async remove(orderId: number): Promise<boolean | void>{
    return await this.prisma.order
      .delete({
        where: { id: orderId },
      })
      .then(() => {
        return true;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }
}
