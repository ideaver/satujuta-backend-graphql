// @ats-nocheck
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  CreateOneHotelArgs,
  FindManyHotelArgs,
  FindUniqueHotelArgs,
  Hotel,
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
    @Args()
    hotelCreateArgs: CreateOneHotelArgs,
    @Args({ name: 'files', type: () => [GraphQLUpload] }) files: FileUpload[],
    @Relations() relations: HotelSelect,
  ): Promise<Hotel | void> {
    const uploadedFiles = await Promise.all(files);
    const { data } = hotelCreateArgs;
    return await this.hotelController.createOne(uploadedFiles, {
      data: data,
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

  @Mutation(() => Hotel, {
    description:
      'Deskripsinya ada disini loh, Jika tentang mutasi klaim hotel, backend akan cek apakah saldo point user cukup untuk claim',
  })
  async hotelUpdateOne(
    @Args() hotelUpdateOneArgs: UpdateOneHotelArgs,
    @Relations() relations: HotelSelect,
  ) {
    return this.hotelController.updateOne({
      ...replaceNullWithUndefined(hotelUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: true,
    description: 'Datanya benar2 terhapus dari db',
  })
  hotelRemove(@Args('hotelId') hotelId: number) {
    return this.hotelController.remove(hotelId);
  }
}
