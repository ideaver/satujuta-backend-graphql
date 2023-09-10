// @ts-nocheck
import { Resolver, Query, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateDistrict,
  FindFirstDistrictArgs,
  FindManyDistrictArgs,
  FindUniqueDistrictArgs,
  District,
  DistrictAggregateArgs,
} from 'src/@generated';
import { DistrictController } from './district.controller';

interface DistrictSelect {
  select: Prisma.DistrictSelect;
}

@Resolver(() => District)
export class DistrictResolver {
  constructor(private readonly districtController: DistrictController) {}

  @Query(() => District, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  districtFindOne(
    @Args()
    districtFindUniqueArgs: FindUniqueDistrictArgs,
    @Relations() relations: DistrictSelect,
  ): Promise<District | void> {
    return this.districtController.findOne({
      ...districtFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [District], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  districtFindMany(
    @Args() districtFindManyArgs: FindManyDistrictArgs,
    @Relations() relations: DistrictSelect,
  ) {
    return this.districtController.findMany({
      ...districtFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => District, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  districtFindFirst(
    @Args()
    findFirstDistrictArgs: FindFirstDistrictArgs,
    @Relations() relations: DistrictSelect,
  ): Promise<District | void> {
    return this.districtController.findFirst({
      ...findFirstDistrictArgs,
      select: relations.select,
    });
  }

  @Query(() => AggregateDistrict, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  districtAggregate(@Args() districtAggregateArgs: DistrictAggregateArgs) {
    return this.districtController.aggregate(districtAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  districtCount(@Args() districtCountAggregateInput: FindManyDistrictArgs) {
    return this.districtController.count(districtCountAggregateInput);
  }
}
