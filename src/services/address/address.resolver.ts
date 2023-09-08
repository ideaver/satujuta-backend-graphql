// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateAddress,
  CreateManyAddressArgs,
  CreateOneAddressArgs,
  DeleteManyAddressArgs,
  DeleteOneAddressArgs,
  FindFirstAddressArgs,
  FindManyAddressArgs,
  FindUniqueAddressArgs,
  Address,
  AddressAggregateArgs,
  UpdateManyAddressArgs,
  UpdateOneAddressArgs,
} from 'src/@generated';
import { AddressController } from './address.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface AddressSelect {
  select: Prisma.AddressSelect;
}

@Resolver(() => Address)
export class AddressResolver {
  constructor(private readonly addressController: AddressController) {}

  @Mutation(() => Address, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async addressCreateOne(
    @Args()
    addressCreateArgs: CreateOneAddressArgs,
    @Relations() relations: AddressSelect,
  ): Promise<Address | void> {
    return await this.addressController.createOne({
      ...addressCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async addressCreateMany(
    @Args()
    createManyAddressArgs: CreateManyAddressArgs,
  ) {
    return await this.addressController.createMany(createManyAddressArgs);
  }

  @Query(() => Address, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  addressFindOne(
    @Args()
    addressFindUniqueArgs: FindUniqueAddressArgs,
    @Relations() relations: AddressSelect,
  ): Promise<Address | void> {
    return this.addressController.findOne({
      ...addressFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [Address], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  addressFindMany(
    @Args() addressFindManyArgs: FindManyAddressArgs,
    @Relations() relations: AddressSelect,
  ) {
    return this.addressController.findMany({
      ...addressFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => Address, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  addressFindFirst(
    @Args()
    findFirstAddressArgs: FindFirstAddressArgs,
    @Relations() relations: AddressSelect,
  ): Promise<Address | void> {
    return this.addressController.findFirst({
      ...findFirstAddressArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Address, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async addressUpdateOne(
    @Args() addressUpdateOneArgs: UpdateOneAddressArgs,
    @Relations() relations: AddressSelect,
  ) {
    return this.addressController.updateOne({
      ...replaceNullWithUndefined(addressUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => Address, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async addressUpdateMany(
    @Args() updateManyAddressArgs: UpdateManyAddressArgs,
  ) {
    return this.addressController.updateMany(updateManyAddressArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async addressDelete(
    @Args() deleteOneAddressArgs: DeleteOneAddressArgs,
    @Relations() relations: AddressSelect,
  ) {
    return this.addressController.delete({
      ...deleteOneAddressArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async addressDeleteMany(
    @Args() deleteManyAddressArgs: DeleteManyAddressArgs,
  ) {
    return this.addressController.deleteMany(deleteManyAddressArgs);
  }

  @Query(() => AggregateAddress, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  addressAggregate(@Args() addressAggregateArgs: AddressAggregateArgs) {
    return this.addressController.aggregate(addressAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  addressCount(@Args() addressCountAggregateInput: FindManyAddressArgs) {
    return this.addressController.count(addressCountAggregateInput);
  }
}
