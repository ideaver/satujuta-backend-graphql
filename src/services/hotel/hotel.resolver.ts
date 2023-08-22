import { Resolver, Query, Mutation, Args, Info } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import { Hotel } from 'src/@generated';
import { HotelCreateArgs } from './dto/hotel-create-one.args';
import { HotelFindManyArgs } from './dto/hotel-find-many.args';
import { HotelFindUniqueArgs } from './dto/hotel-find-one.args';
import { HotelUpdateOneArgs } from './dto/hotel-update-one.args';
import { HotelController } from './hotel.controller';
import { Logger } from '@nestjs/common';

interface HotelSelect {
  select: Prisma.HotelSelect;
}

@Resolver(() => Hotel)
export class HotelResolver {
  constructor(private readonly hotelController: HotelController) {}
  private readonly logger = new Logger(HotelResolver.name);
  @Mutation(() => Hotel, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async hotelCreateOne(
    @Args('hotelCreateArgs') hotelCreateArgs: HotelCreateArgs,
    @Relations() relations: HotelSelect,
  ): Promise<Hotel | void> {
    hotelCreateArgs.select = relations.select;
    return await this.hotelController.createOne(hotelCreateArgs);
  }

  @Query(() => [Hotel], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  hotelFindMany(
    @Args('hotelFindManyArgs') hotelFindManyArgs: HotelFindManyArgs,
    @Relations() relations: HotelSelect,
  ) {
    //Auto implement prisma select from graphql query info
    hotelFindManyArgs.select = relations.select;
    return this.hotelController.findMany(hotelFindManyArgs);
  }

  @Query(() => Hotel, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  hotelFindOne(
    @Args('hotelFindUniqueArgs')
    hotelFindUniqueArgs: HotelFindUniqueArgs,
    @Relations() relations: HotelSelect,
  ): Promise<Hotel | void> {
    //Auto implement prisma select from graphql query info
    hotelFindUniqueArgs.select = relations.select;
    return this.hotelController.findOne(hotelFindUniqueArgs);
  }

  @Mutation(() => Hotel, {
    description:
      'Deskripsinya ada disini loh, Jika tentang mutasi klaim hotel, backend akan cek apakah saldo point user cukup untuk claim',
  })
  async hotelUpdateOne(
    @Args('hotelUpdateOneArgs') hotelUpdateOneArgs: HotelUpdateOneArgs,
    @Relations() relations: HotelSelect,
  ) {
    //Auto implement prisma select from graphql query info
    hotelUpdateOneArgs.select = relations.select;

    return this.hotelController.updateOne(hotelUpdateOneArgs);
  }

  @Mutation(() => Boolean, {
    nullable: true,
    description: 'Datanya benar2 terhapus dari db',
  })
  hotelRemove(@Args('hotelId') hotelId: number) {
    return this.hotelController.remove(hotelId);
  }
}
