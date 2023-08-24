import { Resolver, Query, Mutation, Args, Info } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import { Address } from 'src/@generated';
import { AddressCreateArgs } from './dto/address-create-one.args';
import { AddressFindManyArgs } from './dto/address-find-many.args';
import { AddressFindUniqueArgs } from './dto/address-find-one.args';
import { AddressUpdateOneArgs } from './dto/address-update-one.args';
import { AddressController } from './address.controller';
import { Logger } from '@nestjs/common';

interface AddressSelect {
  select: Prisma.AddressSelect;
}

@Resolver(() => Address)
export class AddressResolver {
  constructor(private readonly addressController: AddressController) {}
  private readonly logger = new Logger(AddressResolver.name);
  @Mutation(() => Address, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async addressCreateOne(
    @Args('addressCreateArgs') addressCreateArgs: AddressCreateArgs,
    @Relations() relations: AddressSelect,
  ): Promise<Address | void> {
    addressCreateArgs.select = relations.select;
    return await this.addressController.createOne(addressCreateArgs);
  }

  @Query(() => [Address], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  addressFindMany(
    @Args('addressFindManyArgs', { nullable: true })
    addressFindManyArgs: AddressFindManyArgs,
    @Relations() relations: AddressSelect,
  ) {
    //Auto implement prisma select from graphql query info
    if (addressFindManyArgs) {
      addressFindManyArgs.select = relations.select;
    }

    return this.addressController.findMany(addressFindManyArgs);
  }

  @Query(() => Address, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  addressFindOne(
    @Args('addressFindUniqueArgs')
    addressFindUniqueArgs: AddressFindUniqueArgs,
    @Relations() relations: AddressSelect,
  ): Promise<Address | void> {
    //Auto implement prisma select from graphql query info
    addressFindUniqueArgs.select = relations.select;
    return this.addressController.findOne(addressFindUniqueArgs);
  }

  @Mutation(() => Address, {
    description:
      'Deskripsinya ada disini loh, Jika tentang mutasi klaim address, backend akan cek apakah saldo point user cukup untuk claim',
  })
  async addressUpdateOne(
    @Args('addressUpdateOneArgs') addressUpdateOneArgs: AddressUpdateOneArgs,
    @Relations() relations: AddressSelect,
  ) {
    //Auto implement prisma select from graphql query info
    addressUpdateOneArgs.select = relations.select;

    return this.addressController.updateOne(addressUpdateOneArgs);
  }

  @Mutation(() => Boolean, {
    nullable: true,
    description: 'Datanya benar2 terhapus dari db',
  })
  addressRemove(@Args('addressId') addressId: number) {
    return this.addressController.remove(addressId);
  }
}
