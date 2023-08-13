import { Resolver, Query, Mutation, Args, Info } from '@nestjs/graphql';
import { OrderService } from './order.service';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import { Order } from 'src/@generated';
import { OrderCreateArgs } from './dto/order-create-one.args';
import { OrderFindManyArgs } from './dto/order-find-many.args';
import { OrderFindUniqueArgs } from './dto/order-find-one.args';
import { OrderUpdateOneArgs } from './dto/order-update-one.args';

interface OrderSelect {
  select: Prisma.OrderSelect;
}

@Resolver(() => Order)
export class OrderResolver {
  constructor(private readonly orderService: OrderService) {}

  @Mutation(() => Order, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async orderCreateOne(
    @Args('orderCreateArgs') orderCreateArgs: OrderCreateArgs,
    @Relations() relations: OrderSelect
  ): Promise<Order | void> {
    orderCreateArgs.select = relations.select;
    return await this.orderService.createOne(orderCreateArgs);
  }

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
    return this.orderService.findMany(orderFindManyArgs);
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
    return this.orderService.findOne(orderFindUniqueArgs);
  }

  @Mutation(() => Order, { description: 'Deskripsinya ada disini loh' })
  orderUpdateOne(
    @Args('orderUpdateOneArgs') orderUpdateOneArgs: OrderUpdateOneArgs,
    @Relations() relations: OrderSelect,
  ) {
    orderUpdateOneArgs.select = relations.select;
    return this.orderService.update(orderUpdateOneArgs);
  }

  @Mutation(() => Boolean, {
    nullable: true,
    description:
      'Datanya benar2 terhapus dari db',
  })
  orderRemove(@Args('orderId') orderId: number) {
    return this.orderService.remove(orderId);
  }
}
