import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class ShippingService {
  constructor(private prisma: PrismaService) {}

  async createOne(shippingCreateArgs: Prisma.ShippingCreateArgs) {
    try {
      return await this.prisma.shipping.create(shippingCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(shippingCreateManyArgs: Prisma.ShippingCreateManyArgs) {
    try {
      return await this.prisma.shipping.createMany(shippingCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(shippingFindUniqueArgs: Prisma.ShippingFindUniqueArgs) {
    try {
      return await this.prisma.shipping.findUnique(shippingFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(shippingFindManyArgs: Prisma.ShippingFindManyArgs) {
    try {
      return await this.prisma.shipping.findMany(shippingFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(shippingFindFirstArgs: Prisma.ShippingFindFirstArgs) {
    try {
      return await this.prisma.shipping.findFirst(shippingFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(shippingUpdateOneArgs: Prisma.ShippingUpdateArgs) {
    try {
      return await this.prisma.shipping.update(shippingUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(shippingUpdateManyArgs: Prisma.ShippingUpdateManyArgs) {
    try {
      return await this.prisma.shipping.updateMany(shippingUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(shippingDeleteArgs: Prisma.ShippingDeleteArgs) {
    try {
      await this.prisma.shipping.delete(shippingDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(shippingDeleteManyArgs: Prisma.ShippingDeleteManyArgs) {
    try {
      await this.prisma.shipping.deleteMany(shippingDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(shippingAggregateArgs: Prisma.ShippingAggregateArgs) {
    try {
      return await this.prisma.shipping.aggregate(shippingAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(shippingCountArgs: Prisma.ShippingCountArgs) {
    try {
      return await this.prisma.shipping.count(shippingCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
