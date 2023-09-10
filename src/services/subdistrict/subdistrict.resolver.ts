// @ts-nocheck
import { Resolver, Query, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateSubdistrict,
  FindFirstSubdistrictArgs,
  FindManySubdistrictArgs,
  FindUniqueSubdistrictArgs,
  Subdistrict,
  SubdistrictAggregateArgs,
} from 'src/@generated';
import { SubdistrictController } from './subdistrict.controller';

interface SubdistrictSelect {
  select: Prisma.SubdistrictSelect;
}

@Resolver(() => Subdistrict)
export class SubdistrictResolver {
  constructor(private readonly subdistrictController: SubdistrictController) {}

  @Query(() => Subdistrict, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  subdistrictFindOne(
    @Args()
    subdistrictFindUniqueArgs: FindUniqueSubdistrictArgs,
    @Relations() relations: SubdistrictSelect,
  ): Promise<Subdistrict | void> {
    return this.subdistrictController.findOne({
      ...subdistrictFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [Subdistrict], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  subdistrictFindMany(
    @Args() subdistrictFindManyArgs: FindManySubdistrictArgs,
    @Relations() relations: SubdistrictSelect,
  ) {
    return this.subdistrictController.findMany({
      ...subdistrictFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => Subdistrict, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  subdistrictFindFirst(
    @Args()
    findFirstSubdistrictArgs: FindFirstSubdistrictArgs,
    @Relations() relations: SubdistrictSelect,
  ): Promise<Subdistrict | void> {
    return this.subdistrictController.findFirst({
      ...findFirstSubdistrictArgs,
      select: relations.select,
    });
  }

  @Query(() => AggregateSubdistrict, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  subdistrictAggregate(
    @Args() subdistrictAggregateArgs: SubdistrictAggregateArgs,
  ) {
    return this.subdistrictController.aggregate(subdistrictAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  subdistrictCount(
    @Args() subdistrictCountAggregateInput: FindManySubdistrictArgs,
  ) {
    return this.subdistrictController.count(subdistrictCountAggregateInput);
  }
}
