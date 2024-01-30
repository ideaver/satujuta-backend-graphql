import { Injectable } from '@nestjs/common';
import { Prisma, ShippingStatus } from '@prisma/client';
import { OrderService } from './order.service';
import { Order, User } from 'src/@generated';
import { UserController } from '../user/user.controller';

@Injectable()
export class OrderController {
  constructor(
    private readonly orderService: OrderService,
    private readonly userController: UserController,
  ) {}

  async createOne(orderCreateArgs: Prisma.OrderCreateArgs) {
    //TODO: Autocreate Invoice
    return await this.orderService.createOne(orderCreateArgs);
  }

  async createMany(orderCreateManyArgs: Prisma.OrderCreateManyArgs) {
    return await this.orderService.createMany(orderCreateManyArgs);
  }

  async findOne(orderFindUniqueArgs: Prisma.OrderFindUniqueArgs) {
    return await this.orderService.findOne(orderFindUniqueArgs);
  }

  async findMany(orderFindManyArgs: Prisma.OrderFindManyArgs) {
    return await this.orderService.findMany(orderFindManyArgs);
  }

  async findFirst(orderFindFirstArgs: Prisma.OrderFindFirstArgs) {
    return await this.orderService.findFirst(orderFindFirstArgs);
  }

  async updateOne(orderUpdateOneArgs: Prisma.OrderUpdateArgs) {
    //Set Shipping Status to DELIVERING
    orderUpdateOneArgs.data.shipping.create.shippingStatus =
      ShippingStatus.PROCESSING;

    let getUserId: string;

    //Set Shipping Address to User's Address
    if (orderUpdateOneArgs.where.orderById) {
      getUserId = orderUpdateOneArgs.where.orderById;
    } else {
      //Get User AddressId from orderId
      const getOrderById: void | Order = await this.orderService.findOne({
        where: {
          id: orderUpdateOneArgs.where.id,
        },
        select: { orderById: true },
      });

      //Get User AddressId from orderId
      if (getOrderById) {
        getUserId = getOrderById.orderById;
      }
    }

    //Get User AddressId from userId
    const getUserById: User = await this.userController.findOne({
      where: { id: getUserId },
      select: { addressId: true },
    });

    //Set Shipping Address to User's Address
    orderUpdateOneArgs.data.shipping.create.address = {
      connect: {
        id: getUserById ? getUserById.addressId : undefined,
      },
    };

    //Update Order
    return await this.orderService.updateOne(orderUpdateOneArgs);
  }

  async updateMany(orderUpdateManyArgs: Prisma.OrderUpdateManyArgs) {
    return await this.orderService.updateMany(orderUpdateManyArgs);
  }

  async delete(orderDeleteArgs: Prisma.OrderDeleteArgs) {
    return await this.orderService.delete(orderDeleteArgs);
  }

  async deleteMany(orderDeleteManyArgs: Prisma.OrderDeleteManyArgs) {
    return await this.orderService.deleteMany(orderDeleteManyArgs);
  }

  async aggregate(orderAggregateArgs: Prisma.OrderAggregateArgs) {
    return await this.orderService.aggregate(orderAggregateArgs);
  }

  async count(orderCountArgs: Prisma.OrderCountArgs) {
    return await this.orderService.count(orderCountArgs);
  }
}
