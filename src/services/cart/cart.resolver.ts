// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateCart,
  CreateManyCartArgs,
  CreateOneCartArgs,
  DeleteManyCartArgs,
  DeleteOneCartArgs,
  FindFirstCartArgs,
  FindManyCartArgs,
  FindUniqueCartArgs,
  Cart,
  CartAggregateArgs,
  UpdateManyCartArgs,
  UpdateOneCartArgs,
} from 'src/@generated';
import { CartController } from './cart.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface CartSelect {
  select: Prisma.CartSelect;
}

@Resolver(() => Cart)
export class CartResolver {
  constructor(private readonly cartController: CartController) {}

  @Mutation(() => Cart, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async cartCreateOne(
    @Args()
    cartCreateArgs: CreateOneCartArgs,
    @Relations() relations: CartSelect,
  ): Promise<Cart | void> {
    return await this.cartController.createOne({
      ...cartCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async cartCreateMany(
    @Args()
    createManyCartArgs: CreateManyCartArgs,
  ) {
    return await this.cartController.createMany(createManyCartArgs);
  }

  @Query(() => Cart, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  cartFindOne(
    @Args()
    cartFindUniqueArgs: FindUniqueCartArgs,
    @Relations() relations: CartSelect,
  ): Promise<Cart | void> {
    return this.cartController.findOne({
      ...cartFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [Cart], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  cartFindMany(
    @Args() cartFindManyArgs: FindManyCartArgs,
    @Relations() relations: CartSelect,
  ) {
    return this.cartController.findMany({
      ...cartFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => Cart, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  cartFindFirst(
    @Args()
    findFirstCartArgs: FindFirstCartArgs,
    @Relations() relations: CartSelect,
  ): Promise<Cart | void> {
    return this.cartController.findFirst({
      ...findFirstCartArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Cart, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async cartUpdateOne(
    @Args() cartUpdateOneArgs: UpdateOneCartArgs,
    @Relations() relations: CartSelect,
  ) {
    return this.cartController.updateOne({
      ...replaceNullWithUndefined(cartUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => Cart, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async cartUpdateMany(@Args() updateManyCartArgs: UpdateManyCartArgs) {
    return this.cartController.updateMany(updateManyCartArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async cartDelete(
    @Args() deleteOneCartArgs: DeleteOneCartArgs,
    @Relations() relations: CartSelect,
  ) {
    return this.cartController.delete({
      ...deleteOneCartArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async cartDeleteMany(@Args() deleteManyCartArgs: DeleteManyCartArgs) {
    return this.cartController.deleteMany(deleteManyCartArgs);
  }

  @Query(() => AggregateCart, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  cartAggregate(@Args() cartAggregateArgs: CartAggregateArgs) {
    return this.cartController.aggregate(cartAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  cartCount(@Args() cartCountAggregateInput: FindManyCartArgs) {
    return this.cartController.count(cartCountAggregateInput);
  }
}
