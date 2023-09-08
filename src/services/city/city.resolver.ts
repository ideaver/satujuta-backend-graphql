// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateCity,
  CreateManyCityArgs,
  CreateOneCityArgs,
  DeleteManyCityArgs,
  DeleteOneCityArgs,
  FindFirstCityArgs,
  FindManyCityArgs,
  FindUniqueCityArgs,
  City,
  CityAggregateArgs,
  UpdateManyCityArgs,
  UpdateOneCityArgs,
} from 'src/@generated';
import { CityController } from './city.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';
import {
  CityFindManyUser,
  CityFindManyUserArgs,
} from './dto/city-find-many-user.args';

interface CitySelect {
  select: Prisma.CitySelect;
}

@Resolver(() => City)
export class CityResolver {
  constructor(private readonly cityController: CityController) {}

  @Mutation(() => City, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async cityCreateOne(
    @Args()
    cityCreateArgs: CreateOneCityArgs,
    @Relations() relations: CitySelect,
  ): Promise<City | void> {
    return await this.cityController.createOne({
      ...cityCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async cityCreateMany(
    @Args()
    createManyCityArgs: CreateManyCityArgs,
  ) {
    return await this.cityController.createMany(createManyCityArgs);
  }

  @Query(() => City, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  cityFindOne(
    @Args()
    cityFindUniqueArgs: FindUniqueCityArgs,
    @Relations() relations: CitySelect,
  ): Promise<City | void> {
    return this.cityController.findOne({
      ...cityFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [City], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  cityFindMany(
    @Args() cityFindManyArgs: FindManyCityArgs,
    @Relations() relations: CitySelect,
  ) {
    return this.cityController.findMany({
      ...cityFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => City, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  cityFindFirst(
    @Args()
    findFirstCityArgs: FindFirstCityArgs,
    @Relations() relations: CitySelect,
  ): Promise<City | void> {
    return this.cityController.findFirst({
      ...findFirstCityArgs,
      select: relations.select,
    });
  }

  @Mutation(() => City, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async cityUpdateOne(
    @Args() cityUpdateOneArgs: UpdateOneCityArgs,
    @Relations() relations: CitySelect,
  ) {
    return this.cityController.updateOne({
      ...replaceNullWithUndefined(cityUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => City, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async cityUpdateMany(@Args() updateManyCityArgs: UpdateManyCityArgs) {
    return this.cityController.updateMany(updateManyCityArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async cityDelete(
    @Args() deleteOneCityArgs: DeleteOneCityArgs,
    @Relations() relations: CitySelect,
  ) {
    return this.cityController.delete({
      ...deleteOneCityArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async cityDeleteMany(@Args() deleteManyCityArgs: DeleteManyCityArgs) {
    return this.cityController.deleteMany(deleteManyCityArgs);
  }

  @Query(() => AggregateCity, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  cityAggregate(@Args() cityAggregateArgs: CityAggregateArgs) {
    return this.cityController.aggregate(cityAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  cityCount(@Args() cityCountAggregateInput: FindManyCityArgs) {
    return this.cityController.count(cityCountAggregateInput);
  }

  @Query(() => [CityFindManyUser], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  getTopCitiesWithMostUsers(
    @Args('cityFindManyUserArgs')
    cityFindManyUserArgs: CityFindManyUserArgs,
  ) {
    return this.cityController.getTopCitiesWithMostUsers(cityFindManyUserArgs);
  }
}
