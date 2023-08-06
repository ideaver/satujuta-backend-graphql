import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CityService } from './city.service';
import { City } from 'src/@generated';

@Resolver(() => City)
export class CityResolver {
  constructor(private readonly cityService: CityService) {}

  // @Mutation(() => [City])
  // cityCreateMany(@Args('createCityInput') createCityInput: CreateCityInput) {
  //   return this.cityService.create(createCityInput);
  // }

  @Query(() => [City])
  cityFindMany(@Args('cityNameSearch') cityNameSearch: string) {
    return this.cityService.findMany(cityNameSearch);
  }
}
