// @ats-nocheck
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
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
  HotelCount,
  HotelCountAggregate,
  HotelCountAggregateInput,
  UpdateManyHotelArgs,
  UpdateOneHotelArgs,
} from 'src/@generated';
import { HotelController } from './hotel.controller';
// Ignore the import errors
// @ts-ignore
import { FileUpload, GraphQLUpload } from 'graphql-upload';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';

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
    @Args({ name: 'files', type: () => [GraphQLUpload] }) files: FileUpload[],
    @Args()
    hotelCreateArgs: CreateOneHotelArgs,
    @Relations() relations: HotelSelect,
  ): Promise<Hotel | void> {
    const uploadedFiles = await Promise.all(files);
    const { data } = hotelCreateArgs;
    return await this.hotelController.createOne(uploadedFiles, {
      data: data,
      select: relations.select,
    });
  }

  // @Mutation(() => Hotel, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async hotelCreateMany(
  //   @Args()
  //   createManyHotelArgs: CreateManyHotelArgs,
  //   @Relations() relations: HotelSelect,
  // ): Promise<Hotel | void> {
  //   return await this.hotelController.createMany({
  //     ...createManyHotelArgs,
  //     select: relations.select,
  //   });
  // }

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

  // @Query(() => Hotel, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // hotelFindFirst(
  //   @Args()
  //   findFirstHotelArgs: FindFirstHotelArgs,
  //   @Relations() relations: HotelSelect,
  // ): Promise<Hotel | void> {
  //   return this.hotelController.findFirst({
  //     ...findFirstHotelArgs,
  //     select: relations.select,
  //   });
  // }

  @Mutation(() => Hotel, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async hotelUpdateOne(
    @Args({ name: 'files', type: () => [GraphQLUpload] }) files: FileUpload[],
    @Args() hotelUpdateOneArgs: UpdateOneHotelArgs,
    @Relations() relations: HotelSelect,
  ) {
    const { data, where } = hotelUpdateOneArgs;
    return this.hotelController.updateOne({
      data: replaceNullWithUndefined(data),
      where: replaceNullWithUndefined(where),
      select: relations.select,
    });
  }

  // @Mutation(() => Hotel, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async hotelUpdateMany(
  //   @Args() updateManyHotelArgs: UpdateManyHotelArgs,
  //   @Relations() relations: HotelSelect,
  // ) {
  //   return this.hotelController.updateMany({
  //     ...updateManyHotelArgs,
  //     select: relations.select,
  //   });
  // }

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
  async hotelDeleteMany(
    @Args() deleteManyHotelArgs: DeleteManyHotelArgs,
    @Relations() relations: HotelSelect,
  ) {
    return this.hotelController.deleteMany({
      ...deleteManyHotelArgs,
      select: relations.select,
    });
  }

  // @Query(() => AggregateHotel, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // hotelAggregate(
  //   @Args() hotelAggregateArgs: HotelAggregateArgs,
  //   @Relations() relations: HotelSelect,
  // ) {
  //   return this.hotelController.aggregate({
  //     ...hotelAggregateArgs,
  //     select: relations.select,
  //   });
  // }

  @Query(() => HotelCountAggregate, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  hotelAggregate(
    @Args() hotelCountAggregateInput: HotelCountAggregateInput,
    @Relations() relations: HotelSelect,
  ) {
    return this.hotelController.count({
      ...hotelCountAggregateInput,
      select: relations.select,
    });
  }
}
