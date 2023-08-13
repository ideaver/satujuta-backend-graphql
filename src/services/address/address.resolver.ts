import { Resolver, Query, Mutation, Args, Info } from '@nestjs/graphql';
import { AddressService } from './address.service';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import { Address } from 'src/@generated';
import { AddressCreateArgs } from './dto/address-create-one.args';
import { AddressFindManyArgs } from './dto/address-find-many.args';
import { AddressFindUniqueArgs } from './dto/address-find-one.args';
import { AddressUpdateOneArgs } from './dto/address-update-one.args';

interface AddressSelect {
  select: Prisma.AddressSelect;
}

@Resolver(() => Address)
export class AddressResolver {
  constructor(private readonly addressService: AddressService) {}

  @Mutation(() => Address, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async addressCreateOne(
    @Args('addressCreateArgs') addressCreateArgs: AddressCreateArgs,
    @Relations() relations: AddressSelect
  ): Promise<Address | void> {
    addressCreateArgs.select = relations.select;
    return await this.addressService.createOne(addressCreateArgs);
  }

  @Query(() => [Address], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  addressFindMany(
    @Args('addressFindManyArgs') addressFindManyArgs: AddressFindManyArgs,
    @Relations() relations: AddressSelect,
  ) {
    //Auto implement prisma select from graphql query info
    addressFindManyArgs.select = relations.select;
    return this.addressService.findMany(addressFindManyArgs);
  }

  @Query(() => Address, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  addressFindOne(
    @Args('addressFindUniqueArgs')
    addressFindUniqueArgs: AddressFindUniqueArgs,
    @Relations() relations: AddressSelect,
  ) {
    //Auto implement prisma select from graphql query info
    addressFindUniqueArgs.select = relations.select;
    return this.addressService.findOne(addressFindUniqueArgs);
  }

  @Mutation(() => Address, { description: 'Deskripsinya ada disini loh' })
  addressUpdateOne(
    @Args('addressUpdateOneArgs') addressUpdateOneArgs: AddressUpdateOneArgs,
    @Relations() relations: AddressSelect,
  ) {
    addressUpdateOneArgs.select = relations.select;
    return this.addressService.update(addressUpdateOneArgs);
  }

  @Mutation(() => Boolean, {
    nullable: true,
    description:
      'Datanya benar2 terhapus dari db',
  })
  addressRemove(@Args('addressId') addressId: number) {
    return this.addressService.remove(addressId);
  }
}
