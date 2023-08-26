import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { CreateOneAddressArgs, Address } from 'src/@generated';
import { AddressFindManyArgs } from './dto/address-find-many.args';
import { AddressFindUniqueArgs } from './dto/address-find-one.args';
import { AddressUpdateOneArgs } from './dto/address-update-one.args';

@Injectable()
export class AddressService {
  constructor(private prisma: PrismaService) {}

  async createOne(
    addressCreateArgs: CreateOneAddressArgs,
  ): Promise<Address | void> {
    return await this.prisma.address
      .create(addressCreateArgs)
      .then((address) => {
        return address;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async findMany(addressFindManyArgs: AddressFindManyArgs) {
    return this.prisma.address
      .findMany(addressFindManyArgs)
      .then((addresss) => {
        return addresss;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async findOne(
    addressFindUniqueArgs: AddressFindUniqueArgs,
  ): Promise<Address | void> {
    return await this.prisma.address
      .findUnique(addressFindUniqueArgs)
      .then((address) => {
        return address;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async update(
    addressUpdateOneArgs: AddressUpdateOneArgs,
  ): Promise<Address | void> {
    return this.prisma.address
      .update(addressUpdateOneArgs)
      .then((address) => {
        return address;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async remove(addressId: number): Promise<boolean | void> {
    return await this.prisma.address
      .delete({
        where: { id: addressId },
      })
      .then(() => {
        return true;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }
}
