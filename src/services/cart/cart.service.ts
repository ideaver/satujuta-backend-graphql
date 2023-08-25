import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { throwPrismaError } from 'src/utils/throw-prisma-error.function';
import { CreateOneCartArgs, Cart, FindManyCartArgs } from 'src/@generated';
import { CartFindManyArgs } from './dto/cart-find-many.args';
import { CartFindUniqueArgs } from './dto/cart-find-one.args';
import { CartUpdateOneArgs } from './dto/cart-update-one.args';

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
        throwPrismaError(err);
      });
  }

  async findMany(cartFindManyArgs: CartFindManyArgs) {
    return this.prisma.cart
      .findMany(cartFindManyArgs)
      .then((carts) => {
        return carts;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  async findOne(cartFindUniqueArgs: CartFindUniqueArgs): Promise<Cart | void> {
    return await this.prisma.cart
      .findUnique(cartFindUniqueArgs)
      .then((cart) => {
        return cart;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  async update(cartUpdateOneArgs: CartUpdateOneArgs): Promise<Cart | void> {
    return this.prisma.cart
      .update(cartUpdateOneArgs)
      .then((cart) => {
        return cart;
      })
      .catch((err) => {
        throwPrismaError(err);
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
        throwPrismaError(err);
      });
  }

  async count(findManyCartArgs: FindManyCartArgs): Promise<number | void> {
    return await this.prisma.cart
      .count()
      .then((count) => {
        return count;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }
}
