import { OrderService } from './order.service';
import { OrderCreateArgs } from './dto/order-create-one.args';
import { OrderFindManyArgs } from './dto/order-find-many.args';
import { OrderFindUniqueArgs } from './dto/order-find-one.args';
import { OrderUpdateOneArgs } from './dto/order-update-one.args';
import { Prisma } from '@prisma/client';
import { Injectable, Logger } from '@nestjs/common';
import { Order } from 'src/@generated';

@Injectable()
export class OrderController {
  constructor(private readonly orderService: OrderService) {}
  private readonly logger = new Logger(OrderController.name);

  async createOne(orderCreateArgs: OrderCreateArgs): Promise<Order | void> {
    let orderCreateArgsPrisma: Prisma.OrderCreateArgs = { ...orderCreateArgs };

    return await this.orderService.createOne(orderCreateArgsPrisma);
  }

  findMany(orderFindManyArgs: OrderFindManyArgs) {
    return this.orderService.findMany(orderFindManyArgs);
  }

  findOne(orderFindUniqueArgs: OrderFindUniqueArgs) {
    return this.orderService.findOne(orderFindUniqueArgs);
  }

  updateOne(orderUpdateOneArgs: OrderUpdateOneArgs) {
    //TODO: Implement whatsapp verification
    return this.orderService.update(orderUpdateOneArgs);
  }

  remove(orderId: number) {
    return this.orderService.remove(orderId);
  }

  count(orderFindManyArgs: OrderFindManyArgs) {
    return this.orderService.count(orderFindManyArgs);
  }
}
