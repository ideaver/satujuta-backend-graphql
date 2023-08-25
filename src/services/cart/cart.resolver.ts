import { Resolver, Query, Mutation, Args, Info, Int } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import { Cart } from 'src/@generated';
import { CartCreateArgs } from './dto/cart-create-one.args';
import { CartFindManyArgs } from './dto/cart-find-many.args';
import { CartFindUniqueArgs } from './dto/cart-find-one.args';
import { CartUpdateOneArgs } from './dto/cart-update-one.args';
import { CartController } from './cart.controller';
import { Logger } from '@nestjs/common';

interface CartSelect {
  select: Prisma.CartSelect;
}

@Resolver(() => Cart)
export class CartResolver {
  constructor(private readonly cartController: CartController) {}
  private readonly logger = new Logger(CartResolver.name);
  // @Mutation(() => Cart, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async cartCreateOne(
  //   @Args('cartCreateArgs') cartCreateArgs: CartCreateArgs,
  //   @Relations() relations: CartSelect,
  // ): Promise<Cart | void> {
  //   cartCreateArgs.select = relations.select;
  //   return await this.cartController.createOne(cartCreateArgs);
  // }

  @Query(() => [Cart], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  cartFindMany(
    @Args('cartFindManyArgs', { nullable: true })
    cartFindManyArgs: CartFindManyArgs,
    @Relations() relations: CartSelect,
  ) {
    //Auto implement prisma select from graphql query info
    if (cartFindManyArgs) {
      cartFindManyArgs.select = relations.select;
    }

    return this.cartController.findMany(cartFindManyArgs);
  }

  @Query(() => Cart, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  cartFindOne(
    @Args('cartFindUniqueArgs')
    cartFindUniqueArgs: CartFindUniqueArgs,
    @Relations() relations: CartSelect,
  ): Promise<Cart | void> {
    //Auto implement prisma select from graphql query info
    cartFindUniqueArgs.select = relations.select;
    return this.cartController.findOne(cartFindUniqueArgs);
  }

  // @Mutation(() => Cart, {
  //   description:
  //     'Deskripsinya ada disini loh, Jika tentang mutasi klaim cart, backend akan cek apakah saldo point cart cukup untuk claim',
  // })
  // async cartUpdateOne(
  //   @Args('cartUpdateOneArgs') cartUpdateOneArgs: CartUpdateOneArgs,
  //   @Relations() relations: CartSelect,
  // ) {
  //   //Auto implement prisma select from graphql query info
  //   cartUpdateOneArgs.select = relations.select;

  //   return this.cartController.updateOne(cartUpdateOneArgs);
  // }

  // @Mutation(() => Boolean, {
  //   nullable: true,
  //   description: 'Datanya benar2 terhapus dari db',
  // })
  // cartRemove(@Args('cartId') cartId: number) {
  //   return this.cartController.remove(cartId);
  // }

  @Query(() => Int, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  cartCount(
    @Args('cartFindManyArgs', { nullable: true })
    cartFindManyArgs: CartFindManyArgs,
  ) {
    return this.cartController.count(cartFindManyArgs);
  }
}
