// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateShipping,
  CreateManyShippingArgs,
  CreateOneShippingArgs,
  DeleteManyShippingArgs,
  DeleteOneShippingArgs,
  FindFirstShippingArgs,
  FindManyShippingArgs,
  FindUniqueShippingArgs,
  Shipping,
  ShippingAggregateArgs,
  UpdateManyShippingArgs,
  UpdateOneShippingArgs,
} from 'src/@generated';
import { ShippingController } from './shipping.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface ShippingSelect {
  select: Prisma.ShippingSelect;
}

@Resolver(() => Shipping)
export class ShippingResolver {
  constructor(private readonly shippingController: ShippingController) {}

  @Mutation(() => Shipping, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async shippingCreateOne(
    @Args()
    shippingCreateArgs: CreateOneShippingArgs,
    @Relations() relations: ShippingSelect,
  ): Promise<Shipping | void> {
    return await this.shippingController.createOne({
      ...shippingCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async shippingCreateMany(
    @Args()
    createManyShippingArgs: CreateManyShippingArgs,
  ) {
    return await this.shippingController.createMany(createManyShippingArgs);
  }

  @Query(() => Shipping, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  shippingFindOne(
    @Args()
    shippingFindUniqueArgs: FindUniqueShippingArgs,
    @Relations() relations: ShippingSelect,
  ): Promise<Shipping | void> {
    return this.shippingController.findOne({
      ...shippingFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [Shipping], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  shippingFindMany(
    @Args() shippingFindManyArgs: FindManyShippingArgs,
    @Relations() relations: ShippingSelect,
  ) {
    return this.shippingController.findMany({
      ...shippingFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => Shipping, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  shippingFindFirst(
    @Args()
    findFirstShippingArgs: FindFirstShippingArgs,
    @Relations() relations: ShippingSelect,
  ): Promise<Shipping | void> {
    return this.shippingController.findFirst({
      ...findFirstShippingArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Shipping, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async shippingUpdateOne(
    @Args() shippingUpdateOneArgs: UpdateOneShippingArgs,
    @Relations() relations: ShippingSelect,
  ) {
    return this.shippingController.updateOne({
      ...replaceNullWithUndefined(shippingUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => Shipping, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async shippingUpdateMany(
    @Args() updateManyShippingArgs: UpdateManyShippingArgs,
  ) {
    return this.shippingController.updateMany(updateManyShippingArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async shippingDelete(
    @Args() deleteOneShippingArgs: DeleteOneShippingArgs,
    @Relations() relations: ShippingSelect,
  ) {
    return this.shippingController.delete({
      ...deleteOneShippingArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async shippingDeleteMany(
    @Args() deleteManyShippingArgs: DeleteManyShippingArgs,
  ) {
    return this.shippingController.deleteMany(deleteManyShippingArgs);
  }

  @Query(() => AggregateShipping, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  shippingAggregate(@Args() shippingAggregateArgs: ShippingAggregateArgs) {
    return this.shippingController.aggregate(shippingAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  shippingCount(@Args() shippingCountAggregateInput: FindManyShippingArgs) {
    return this.shippingController.count(shippingCountAggregateInput);
  }
}
