import { AddressService } from './address.service';
import { Address } from 'src/@generated';
import { AddressCreateArgs } from './dto/address-create-one.args';
import { AddressFindManyArgs } from './dto/address-find-many.args';
import { AddressFindUniqueArgs } from './dto/address-find-one.args';
import { AddressUpdateOneArgs } from './dto/address-update-one.args';

import { Injectable } from '@nestjs/common';
import { AccountCategory, Prisma, UserRole } from '@prisma/client';
import { UserService } from '../user/user.service';

@Injectable()
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  async createOne(
    addressCreateArgs: AddressCreateArgs,
  ): Promise<Address | void> {
    return await this.addressService.createOne(addressCreateArgs);
  }

  findMany(addressFindManyArgs: AddressFindManyArgs) {
    return this.addressService.findMany(addressFindManyArgs);
  }

  findOne(
    addressFindUniqueArgs: AddressFindUniqueArgs,
  ): Promise<Address | void> {
    return this.addressService.findOne(addressFindUniqueArgs);
  }

  async updateOne(addressUpdateOneArgs: AddressUpdateOneArgs) {
    const { name, province, city, district, subdistrict } =
      addressUpdateOneArgs.data;

    if (name?.set === null) {
      addressUpdateOneArgs.data.name = undefined;
    }

    if (province?.connect?.id === null) {
      addressUpdateOneArgs.data.province = undefined;
    }

    if (city?.connect?.id === null) {
      addressUpdateOneArgs.data.city = undefined;
    }

    if (district?.connect?.id === null) {
      addressUpdateOneArgs.data.district = undefined;
    }

    if (subdistrict?.connect?.id === null) {
      addressUpdateOneArgs.data.subdistrict = undefined;
    }

    return this.addressService.update(addressUpdateOneArgs);
  }

  remove(addressId: number) {
    return this.addressService.remove(addressId);
  }
}
