import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { CreateOneCartArgs, Cart, FindManyCartArgs } from 'src/@generated';
import { CartFindManyArgs } from './dto/cart-find-many.args';
import { CartFindUniqueArgs } from './dto/cart-find-one.args';
import { CartUpdateOneArgs } from './dto/cart-update-one.args';
import { Prisma } from '@prisma/client';

@Injectable()
export class CartService {
  constructor(private prisma: PrismaService) {}

  async createOne(cartCreateArgs: CreateOneCartArgs): Promise<Cart | void> {
    return await this.prisma.cart
      .create(cartCreateArgs)
      .then((cart) => {
        return cart;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async findMany(cartFindManyArgs: CartFindManyArgs) {
    return this.prisma.cart
      .findMany(cartFindManyArgs)
      .then((carts) => {
        return carts;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async findOne(cartFindUniqueArgs: CartFindUniqueArgs): Promise<Cart | void> {
    return await this.prisma.cart
      .findUnique(cartFindUniqueArgs)
      .then((cart) => {
        return cart;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async update(cartUpdateOneArgs: CartUpdateOneArgs): Promise<Cart | void> {
    return this.prisma.cart
      .update(cartUpdateOneArgs)
      .then((cart) => {
        return cart;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async remove(cartId: number): Promise<boolean | void> {
    return await this.prisma.cart
      .delete({
        where: { id: cartId },
      })
      .then(() => {
        return true;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async count(findManyCartArgs: FindManyCartArgs): Promise<number | void> {
    return await this.prisma.cart
      .count()
      .then((count) => {
        return count;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async aggregate(cartAggregateArgs: Prisma.CartAggregateArgs) {
    return await this.prisma.cart
      .aggregate(cartAggregateArgs)
      .then((order) => {
        return order;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }
}
