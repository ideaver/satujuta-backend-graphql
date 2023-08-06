import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PostalCode } from 'src/@generated';
import { PostalCodeService } from './postal-code.service';

@Resolver(() => PostalCode)
export class PostalCodeResolver {
  constructor(private readonly PostalCodeService: PostalCodeService) {}

  // @Mutation(() => [City])
  // cityCreateMany(@Args('createCityInput') createCityInput: CreateCityInput) {
  //   return this.cityService.create(createCityInput);
  // }

  @Query(() => [PostalCode])
  postalCodeFindMany() {
    return this.PostalCodeService.findMany();
  }
}
