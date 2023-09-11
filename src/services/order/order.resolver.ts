// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateOrder,
  CreateManyOrderArgs,
  CreateOneOrderArgs,
  DeleteManyOrderArgs,
  DeleteOneOrderArgs,
  FindFirstOrderArgs,
  FindManyOrderArgs,
  FindUniqueOrderArgs,
  Order,
  OrderAggregateArgs,
  UpdateManyOrderArgs,
  UpdateOneOrderArgs,
} from 'src/@generated';
import { OrderController } from './order.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface OrderSelect {
  select: Prisma.OrderSelect;
}

@Resolver(() => Order)
export class OrderResolver {
  constructor(private readonly orderController: OrderController) {}

  @Mutation(() => Order, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async orderCreateOne(
    @Args()
    orderCreateArgs: CreateOneOrderArgs,
    @Relations() relations: OrderSelect,
  ): Promise<Order | void> {
    return await this.orderController.createOne({
      ...orderCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async orderCreateMany(
    @Args()
    createManyOrderArgs: CreateManyOrderArgs,
  ) {
    return await this.orderController.createMany(createManyOrderArgs);
  }

  @Query(() => Order, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  orderFindOne(
    @Args()
    orderFindUniqueArgs: FindUniqueOrderArgs,
    @Relations() relations: OrderSelect,
  ): Promise<Order | void> {
    return this.orderController.findOne({
      ...orderFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [Order], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  orderFindMany(
    @Args() orderFindManyArgs: FindManyOrderArgs,
    @Relations() relations: OrderSelect,
  ) {
    return this.orderController.findMany({
      ...orderFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => Order, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  orderFindFirst(
    @Args()
    findFirstOrderArgs: FindFirstOrderArgs,
    @Relations() relations: OrderSelect,
  ): Promise<Order | void> {
    return this.orderController.findFirst({
      ...findFirstOrderArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Order, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async orderUpdateOne(
    @Args() orderUpdateOneArgs: UpdateOneOrderArgs,
    @Relations() relations: OrderSelect,
  ) {
    return this.orderController.updateOne({
      ...replaceNullWithUndefined(orderUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => Order, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async orderUpdateMany(@Args() updateManyOrderArgs: UpdateManyOrderArgs) {
    return this.orderController.updateMany(updateManyOrderArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async orderDelete(
    @Args() deleteOneOrderArgs: DeleteOneOrderArgs,
    @Relations() relations: OrderSelect,
  ) {
    return this.orderController.delete({
      ...deleteOneOrderArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async orderDeleteMany(@Args() deleteManyOrderArgs: DeleteManyOrderArgs) {
    return this.orderController.deleteMany(deleteManyOrderArgs);
  }

  @Query(() => AggregateOrder, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  orderAggregate(@Args() orderAggregateArgs: OrderAggregateArgs) {
    return this.orderController.aggregate(orderAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  orderCount(@Args() orderCountAggregateInput: FindManyOrderArgs) {
    return this.orderController.count(orderCountAggregateInput);
  }
}
