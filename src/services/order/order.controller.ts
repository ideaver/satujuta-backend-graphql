import { OrderService } from './order.service';
import { OrderCreateArgs } from './dto/order-create-one.args';
import { OrderFindManyArgs } from './dto/order-find-many.args';
import { OrderFindUniqueArgs } from './dto/order-find-one.args';
import { OrderUpdateOneArgs } from './dto/order-update-one.args';
import { Prisma, ShippingStatus, User } from '@prisma/client';
import { Injectable, Logger } from '@nestjs/common';
import { Order } from 'src/@generated';
import { UserService } from '../user/user.service';

@Injectable()
export class OrderController {
  constructor(
    private readonly orderService: OrderService,
    private readonly userService: UserService,
  ) {}
  private readonly logger = new Logger(OrderController.name);

  async createOne(orderCreateArgs: OrderCreateArgs): Promise<Order | void> {
    return await this.orderService.createOne(orderCreateArgs);
  }

  findMany(orderFindManyArgs: OrderFindManyArgs) {
    return this.orderService.findMany(orderFindManyArgs);
  }

  findOne(orderFindUniqueArgs: OrderFindUniqueArgs) {
    return this.orderService.findOne(orderFindUniqueArgs);
  }

  async updateOne(orderUpdateOneArgs: OrderUpdateOneArgs) {
    let orderUpdateArgsPrisma: Prisma.OrderUpdateArgs = {
      ...orderUpdateOneArgs,
    };

    //Set Shipping Status to DELIVERING
    orderUpdateArgsPrisma.data.shipping.create.shippingStatus =
      ShippingStatus.DELIVERING;

    let getUserId: string;

    //Set Shipping Address to User's Address
    if (orderUpdateArgsPrisma.where.orderById) {
      getUserId = orderUpdateArgsPrisma.where.orderById;
    } else {
      //Get User AddressId from orderId
      const getOrderById: void | Order = await this.orderService.findOne({
        where: {
          id: orderUpdateArgsPrisma.where.id,
        },
        select: { orderById: true },
      });

      //Get User AddressId from orderId
      if (getOrderById) {
        getUserId = getOrderById.orderById;
      }
    }

    //Get User AddressId from userId
    const getUserById: void | User = await this.userService.findOne({
      where: { id: getUserId },
      select: { addressId: true },
    });

    //Set Shipping Address to User's Address
    orderUpdateArgsPrisma.data.shipping.create.address = {
      connect: {
        id: getUserById ? getUserById.addressId : undefined,
      },
    };

    this.logger.log(orderUpdateArgsPrisma);
    return this.orderService.update(orderUpdateArgsPrisma);
  }

  remove(orderId: number) {
    return this.orderService.remove(orderId);
  }

  count(orderFindManyArgs: OrderFindManyArgs) {
    return this.orderService.count(orderFindManyArgs);
  }
}
