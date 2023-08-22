import { Resolver, Query, Mutation, Args, Info } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import { City } from 'src/@generated';
import { CityCreateArgs } from './dto/city-create-one.args';
import { CityFindManyArgs } from './dto/city-find-many.args';
import { CityFindUniqueArgs } from './dto/city-find-one.args';
import { CityUpdateOneArgs } from './dto/city-update-one.args';
import { CityController } from './city.controller';
import { Logger } from '@nestjs/common';

interface CitySelect {
  select: Prisma.CitySelect;
}

@Resolver(() => City)
export class CityResolver {
  constructor(private readonly cityController: CityController) {}
  private readonly logger = new Logger(CityResolver.name);
  // @Mutation(() => City, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async cityCreateOne(
  //   @Args('cityCreateArgs') cityCreateArgs: CityCreateArgs,
  //   @Relations() relations: CitySelect,
  // ): Promise<City | void> {
  //   cityCreateArgs.select = relations.select;
  //   return await this.cityController.createOne(cityCreateArgs);
  // }

  @Query(() => [City], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  cityFindMany(
    @Args('cityFindManyArgs') cityFindManyArgs: CityFindManyArgs,
    @Relations() relations: CitySelect,
  ) {
    //Auto implement prisma select from graphql query info
    cityFindManyArgs.select = relations.select;
    return this.cityController.findMany(cityFindManyArgs);
  }

  @Query(() => City, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  cityFindOne(
    @Args('cityFindUniqueArgs')
    cityFindUniqueArgs: CityFindUniqueArgs,
    @Relations() relations: CitySelect,
  ): Promise<City | void> {
    //Auto implement prisma select from graphql query info
    cityFindUniqueArgs.select = relations.select;
    return this.cityController.findOne(cityFindUniqueArgs);
  }

  // @Mutation(() => City, {
  //   description:
  //     'Deskripsinya ada disini loh, Jika tentang mutasi klaim city, backend akan cek apakah saldo point user cukup untuk claim',
  // })
  // async cityUpdateOne(
  //   @Args('cityUpdateOneArgs') cityUpdateOneArgs: CityUpdateOneArgs,
  //   @Relations() relations: CitySelect,
  // ) {
  //   //Auto implement prisma select from graphql query info
  //   cityUpdateOneArgs.select = relations.select;

  //   return this.cityController.updateOne(cityUpdateOneArgs);
  // }

  // @Mutation(() => Boolean, {
  //   nullable: true,
  //   description: 'Datanya benar2 terhapus dari db',
  // })
  // cityRemove(@Args('cityId') cityId: number) {
  //   return this.cityController.remove(cityId);
  // }
}
