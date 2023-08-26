import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { CreateOneShippingArgs, Shipping } from 'src/@generated';
import { ShippingFindManyArgs } from './dto/shipping-find-many.args';
import { ShippingFindUniqueArgs } from './dto/shipping-find-one.args';
import { ShippingUpdateOneArgs } from './dto/shipping-update-one.args';

@Injectable()
export class ShippingService {
  constructor(private prisma: PrismaService) {}

  async createOne(
    shippingCreateArgs: CreateOneShippingArgs,
  ): Promise<Shipping | void> {
    return await this.prisma.shipping
      .create(shippingCreateArgs)
      .then((shipping) => {
        return shipping;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async findMany(shippingFindManyArgs: ShippingFindManyArgs) {
    return this.prisma.shipping
      .findMany(shippingFindManyArgs)
      .then((shippings) => {
        return shippings;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async findOne(
    shippingFindUniqueArgs: ShippingFindUniqueArgs,
  ): Promise<Shipping | void> {
    return await this.prisma.shipping
      .findUnique(shippingFindUniqueArgs)
      .then((shipping) => {
        return shipping;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async update(
    shippingUpdateOneArgs: ShippingUpdateOneArgs,
  ): Promise<Shipping | void> {
    return this.prisma.shipping
      .update(shippingUpdateOneArgs)
      .then((shipping) => {
        return shipping;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async remove(shippingId: number): Promise<boolean | void> {
    return await this.prisma.shipping
      .delete({
        where: { id: shippingId },
      })
      .then(() => {
        return true;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }
}
