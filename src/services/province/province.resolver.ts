// @ts-nocheck
import { Resolver, Query, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateProvince,
  FindFirstProvinceArgs,
  FindManyProvinceArgs,
  FindUniqueProvinceArgs,
  Province,
  ProvinceAggregateArgs,
} from 'src/@generated';
import { ProvinceController } from './province.controller';

interface ProvinceSelect {
  select: Prisma.ProvinceSelect;
}

@Resolver(() => Province)
export class ProvinceResolver {
  constructor(private readonly provinceController: ProvinceController) {}

  @Query(() => Province, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  provinceFindOne(
    @Args()
    provinceFindUniqueArgs: FindUniqueProvinceArgs,
    @Relations() relations: ProvinceSelect,
  ): Promise<Province | void> {
    return this.provinceController.findOne({
      ...provinceFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [Province], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  provinceFindMany(
    @Args() provinceFindManyArgs: FindManyProvinceArgs,
    @Relations() relations: ProvinceSelect,
  ) {
    return this.provinceController.findMany({
      ...provinceFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => Province, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  provinceFindFirst(
    @Args()
    findFirstProvinceArgs: FindFirstProvinceArgs,
    @Relations() relations: ProvinceSelect,
  ): Promise<Province | void> {
    return this.provinceController.findFirst({
      ...findFirstProvinceArgs,
      select: relations.select,
    });
  }

  @Query(() => AggregateProvince, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  provinceAggregate(@Args() provinceAggregateArgs: ProvinceAggregateArgs) {
    return this.provinceController.aggregate(provinceAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  provinceCount(@Args() provinceCountAggregateInput: FindManyProvinceArgs) {
    return this.provinceController.count(provinceCountAggregateInput);
  }
}
