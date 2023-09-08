import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class CartService {
  constructor(private prisma: PrismaService) {}

  async createOne(cartCreateArgs: Prisma.CartCreateArgs) {
    try {
      return await this.prisma.cart.create(cartCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(cartCreateManyArgs: Prisma.CartCreateManyArgs) {
    try {
      return await this.prisma.cart.createMany(cartCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(cartFindUniqueArgs: Prisma.CartFindUniqueArgs) {
    try {
      return await this.prisma.cart.findUnique(cartFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(cartFindManyArgs: Prisma.CartFindManyArgs) {
    try {
      return await this.prisma.cart.findMany(cartFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(cartFindFirstArgs: Prisma.CartFindFirstArgs) {
    try {
      return await this.prisma.cart.findFirst(cartFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(cartUpdateOneArgs: Prisma.CartUpdateArgs) {
    try {
      return await this.prisma.cart.update(cartUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(cartUpdateManyArgs: Prisma.CartUpdateManyArgs) {
    try {
      return await this.prisma.cart.updateMany(cartUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(cartDeleteArgs: Prisma.CartDeleteArgs) {
    try {
      await this.prisma.cart.delete(cartDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(cartDeleteManyArgs: Prisma.CartDeleteManyArgs) {
    try {
      await this.prisma.cart.deleteMany(cartDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(cartAggregateArgs: Prisma.CartAggregateArgs) {
    try {
      return await this.prisma.cart.aggregate(cartAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(cartCountArgs: Prisma.CartCountArgs) {
    try {
      return await this.prisma.cart.count(cartCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
