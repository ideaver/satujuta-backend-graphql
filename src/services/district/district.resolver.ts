import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { District } from 'src/@generated';
import { DistrictService } from './district.service';

@Resolver(() => District)
export class DistrictResolver {
  constructor(private readonly districtService: DistrictService) {}

  // @Mutation(() => [City])
  // cityCreateMany(@Args('createCityInput') createCityInput: CreateCityInput) {
  //   return this.cityService.create(createCityInput);
  // }

  @Query(() => [District])
  districtFindMany(@Args('districtNameSearch') districtNameSearch: string) {
    return this.districtService.findMany(districtNameSearch);
  }
}
