import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { AddressService } from './address.service';

@Injectable()
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  async createOne(addressCreateArgs: Prisma.AddressCreateArgs) {
    return await this.addressService.createOne(addressCreateArgs);
  }

  async createMany(addressCreateManyArgs: Prisma.AddressCreateManyArgs) {
    return await this.addressService.createMany(addressCreateManyArgs);
  }

  async findOne(addressFindUniqueArgs: Prisma.AddressFindUniqueArgs) {
    return await this.addressService.findOne(addressFindUniqueArgs);
  }

  async findMany(addressFindManyArgs: Prisma.AddressFindManyArgs) {
    return await this.addressService.findMany(addressFindManyArgs);
  }

  async findFirst(addressFindFirstArgs: Prisma.AddressFindFirstArgs) {
    return await this.addressService.findFirst(addressFindFirstArgs);
  }

  async updateOne(addressUpdateOneArgs: Prisma.AddressUpdateArgs) {
    return await this.addressService.updateOne(addressUpdateOneArgs);
  }

  async updateMany(addressUpdateManyArgs: Prisma.AddressUpdateManyArgs) {
    return await this.addressService.updateMany(addressUpdateManyArgs);
  }

  async delete(addressDeleteArgs: Prisma.AddressDeleteArgs) {
    return await this.addressService.delete(addressDeleteArgs);
  }

  async deleteMany(addressDeleteManyArgs: Prisma.AddressDeleteManyArgs) {
    return await this.addressService.deleteMany(addressDeleteManyArgs);
  }

  async aggregate(addressAggregateArgs: Prisma.AddressAggregateArgs) {
    return await this.addressService.aggregate(addressAggregateArgs);
  }

  async count(addressCountArgs: Prisma.AddressCountArgs) {
    return await this.addressService.count(addressCountArgs);
  }
}
