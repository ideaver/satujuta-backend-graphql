import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Bank } from 'src/@generated';
import { BankService } from './bank.service';

@Resolver(() => Bank)
export class BankResolver {
  constructor(private readonly bankService: BankService) {}

  // @Mutation(() => [City])
  // cityCreateMany(@Args('createCityInput') createCityInput: CreateCityInput) {
  //   return this.cityService.create(createCityInput);
  // }

  @Query(() => [Bank])
  bankFindMany() {
    return this.bankService.findMany();
  }
}
