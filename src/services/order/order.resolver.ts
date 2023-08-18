import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OrderCreateArgs } from './dto/order-create-one.args';
import { OrderFindManyArgs } from './dto/order-find-many.args';
import { OrderFindUniqueArgs } from './dto/order-find-one.args';
import { OrderUpdateOneArgs } from './dto/order-update-one.args';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import { generateRandomReferralCode } from 'src/utils/generate-random-referral-code.function';
import { OrderController } from './order.controller';
import { Order } from 'src/@generated';

interface OrderSelect {
  select: Prisma.OrderSelect;
}

@Resolver(() => Order)
export class OrderResolver {
  constructor(private readonly orderController: OrderController) {}

  // @Mutation(() => Order, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async orderCreateOne(
  //   @Args('orderCreateArgs') orderCreateArgs: OrderCreateArgs,
  //   @Relations() relations: OrderSelect,
  // ): Promise<Order | void> {
  //   //Auto implement prisma select from graphql query info
  //   orderCreateArgs.select = relations.select;

  //   return await this.orderController.createOne(orderCreateArgs);
  // }

  @Query(() => [Order], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  orderFindMany(
    @Args('orderFindManyArgs') orderFindManyArgs: OrderFindManyArgs,
    @Relations() relations: OrderSelect,
  ) {
    //Auto implement prisma select from graphql query info
    orderFindManyArgs.select = relations.select;
    return this.orderController.findMany(orderFindManyArgs);
  }

  @Query(() => Order, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  orderFindOne(
    @Args('orderFindUniqueArgs')
    orderFindUniqueArgs: OrderFindUniqueArgs,
    @Relations() relations: OrderSelect,
  ) {
    //Auto implement prisma select from graphql query info
    orderFindUniqueArgs.select = relations.select;
    return this.orderController.findOne(orderFindUniqueArgs);
  }

  @Mutation(() => Order, { description: 'Deskripsinya ada disini loh' })
  orderUpdateOne(
    @Args('orderUpdateOneArgs') orderUpdateOneArgs: OrderUpdateOneArgs,
    @Relations() relations: OrderSelect,
  ) {
    orderUpdateOneArgs.select = relations.select;
    return this.orderController.updateOne(orderUpdateOneArgs);
  }

  // @Mutation(() => Order, {
  //   nullable: true,
  //   description:
  //     'Hanya berupa softdelete, artinya semua data tetap ada di database. field deleteAt pada entitas order akan terisi. select: { id: true, firstName: true, deletedAt: true }',
  // })
  // orderRemove(@Args('orderId') orderId: string) {
  //   return this.orderController.remove(orderId);
  // }

  @Query(() => Int, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  orderCount(
    @Args('orderFindManyArgs', { nullable: true })
    orderFindManyArgs: OrderFindManyArgs,
  ) {
    return this.orderController.count(orderFindManyArgs);
  }
}
