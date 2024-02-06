// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateHotel,
  CreateManyHotelArgs,
  CreateOneHotelArgs,
  DeleteManyHotelArgs,
  DeleteOneHotelArgs,
  FindFirstHotelArgs,
  FindManyHotelArgs,
  FindUniqueHotelArgs,
  Hotel,
  HotelAggregateArgs,
  UpdateManyHotelArgs,
  UpdateOneHotelArgs,
} from 'src/@generated';
import { HotelController } from './hotel.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface HotelSelect {
  select: Prisma.HotelSelect;
}

@Resolver(() => Hotel)
export class HotelResolver {
  constructor(private readonly hotelController: HotelController) {}

  @Mutation(() => Hotel, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async hotelCreateOne(
    @Args()
    hotelCreateArgs: CreateOneHotelArgs,
    @Relations() relations: HotelSelect,
  ): Promise<Hotel | void> {
    return await this.hotelController.createOne({
      ...hotelCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async hotelCreateMany(
    @Args()
    createManyHotelArgs: CreateManyHotelArgs,
  ) {
    return await this.hotelController.createMany(createManyHotelArgs);
  }

  @Query(() => Hotel, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  hotelFindOne(
    @Args()
    hotelFindUniqueArgs: FindUniqueHotelArgs,
    @Relations() relations: HotelSelect,
  ): Promise<Hotel | void> {
    return this.hotelController.findOne({
      ...hotelFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [Hotel], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  hotelFindMany(
    @Args() hotelFindManyArgs: FindManyHotelArgs,
    @Relations() relations: HotelSelect,
  ) {
    return this.hotelController.findMany({
      ...hotelFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => Hotel, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  hotelFindFirst(
    @Args()
    findFirstHotelArgs: FindFirstHotelArgs,
    @Relations() relations: HotelSelect,
  ): Promise<Hotel | void> {
    return this.hotelController.findFirst({
      ...findFirstHotelArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Hotel, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async hotelUpdateOne(
    @Args() hotelUpdateOneArgs: UpdateOneHotelArgs,
    @Relations() relations: HotelSelect,
  ) {
    return this.hotelController.updateOne({
      ...hotelUpdateOneArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Hotel, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async hotelUpdateMany(@Args() updateManyHotelArgs: UpdateManyHotelArgs) {
    return this.hotelController.updateMany(updateManyHotelArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async hotelDelete(
    @Args() deleteOneHotelArgs: DeleteOneHotelArgs,
    @Relations() relations: HotelSelect,
  ) {
    return this.hotelController.delete({
      ...deleteOneHotelArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async hotelDeleteMany(@Args() deleteManyHotelArgs: DeleteManyHotelArgs) {
    return this.hotelController.deleteMany(deleteManyHotelArgs);
  }

  @Query(() => AggregateHotel, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  hotelAggregate(@Args() hotelAggregateArgs: HotelAggregateArgs) {
    return this.hotelController.aggregate(hotelAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  hotelCount(@Args() hotelCountAggregateInput: FindManyHotelArgs) {
    return this.hotelController.count(hotelCountAggregateInput);
  }
}
