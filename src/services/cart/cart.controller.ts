import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CartService } from './cart.service';

@Injectable()
export class CartController {
  constructor(private readonly cartService: CartService) {}

  async createOne(cartCreateArgs: Prisma.CartCreateArgs) {
    return await this.cartService.createOne(cartCreateArgs);
  }

  async createMany(cartCreateManyArgs: Prisma.CartCreateManyArgs) {
    return await this.cartService.createMany(cartCreateManyArgs);
  }

  async findOne(cartFindUniqueArgs: Prisma.CartFindUniqueArgs) {
    return await this.cartService.findOne(cartFindUniqueArgs);
  }

  async findMany(cartFindManyArgs: Prisma.CartFindManyArgs) {
    return await this.cartService.findMany(cartFindManyArgs);
  }

  async findFirst(cartFindFirstArgs: Prisma.CartFindFirstArgs) {
    return await this.cartService.findFirst(cartFindFirstArgs);
  }

  async updateOne(cartUpdateOneArgs: Prisma.CartUpdateArgs) {
    return await this.cartService.updateOne(cartUpdateOneArgs);
  }

  async updateMany(cartUpdateManyArgs: Prisma.CartUpdateManyArgs) {
    return await this.cartService.updateMany(cartUpdateManyArgs);
  }

  async delete(cartDeleteArgs: Prisma.CartDeleteArgs) {
    return await this.cartService.delete(cartDeleteArgs);
  }

  async deleteMany(cartDeleteManyArgs: Prisma.CartDeleteManyArgs) {
    return await this.cartService.deleteMany(cartDeleteManyArgs);
  }

  async aggregate(cartAggregateArgs: Prisma.CartAggregateArgs) {
    return await this.cartService.aggregate(cartAggregateArgs);
  }

  async count(cartCountArgs: Prisma.CartCountArgs) {
    return await this.cartService.count(cartCountArgs);
  }
}
