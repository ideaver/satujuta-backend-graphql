// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateRewardClaim,
  CreateManyRewardClaimArgs,
  CreateOneRewardClaimArgs,
  DeleteManyRewardClaimArgs,
  DeleteOneRewardClaimArgs,
  FindFirstRewardClaimArgs,
  FindManyRewardClaimArgs,
  FindUniqueRewardClaimArgs,
  RewardClaim,
  RewardClaimAggregateArgs,
  UpdateManyRewardClaimArgs,
  UpdateOneRewardClaimArgs,
} from 'src/@generated';
import { RewardClaimController } from './reward-claim.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface RewardClaimSelect {
  select: Prisma.RewardClaimSelect;
}

@Resolver(() => RewardClaim)
export class RewardClaimResolver {
  constructor(private readonly rewardClaimController: RewardClaimController) {}

  @Mutation(() => RewardClaim, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async rewardClaimCreateOne(
    @Args()
    rewardClaimCreateArgs: CreateOneRewardClaimArgs,
    @Relations() relations: RewardClaimSelect,
  ): Promise<RewardClaim | void> {
    return await this.rewardClaimController.createOne({
      ...rewardClaimCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async rewardClaimCreateMany(
    @Args()
    createManyRewardClaimArgs: CreateManyRewardClaimArgs,
  ) {
    return await this.rewardClaimController.createMany(
      createManyRewardClaimArgs,
    );
  }

  @Query(() => RewardClaim, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  rewardClaimFindOne(
    @Args()
    rewardClaimFindUniqueArgs: FindUniqueRewardClaimArgs,
    @Relations() relations: RewardClaimSelect,
  ): Promise<RewardClaim | void> {
    return this.rewardClaimController.findOne({
      ...rewardClaimFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [RewardClaim], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  rewardClaimFindMany(
    @Args() rewardClaimFindManyArgs: FindManyRewardClaimArgs,
    @Relations() relations: RewardClaimSelect,
  ) {
    return this.rewardClaimController.findMany({
      ...rewardClaimFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => RewardClaim, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  rewardClaimFindFirst(
    @Args()
    findFirstRewardClaimArgs: FindFirstRewardClaimArgs,
    @Relations() relations: RewardClaimSelect,
  ): Promise<RewardClaim | void> {
    return this.rewardClaimController.findFirst({
      ...findFirstRewardClaimArgs,
      select: relations.select,
    });
  }

  @Mutation(() => RewardClaim, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async rewardClaimUpdateOne(
    @Args() rewardClaimUpdateOneArgs: UpdateOneRewardClaimArgs,
    @Relations() relations: RewardClaimSelect,
  ) {
    return this.rewardClaimController.updateOne({
      ...replaceNullWithUndefined(rewardClaimUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => RewardClaim, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async rewardClaimUpdateMany(
    @Args() updateManyRewardClaimArgs: UpdateManyRewardClaimArgs,
  ) {
    return this.rewardClaimController.updateMany(updateManyRewardClaimArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async rewardClaimDelete(
    @Args() deleteOneRewardClaimArgs: DeleteOneRewardClaimArgs,
    @Relations() relations: RewardClaimSelect,
  ) {
    return this.rewardClaimController.delete({
      ...deleteOneRewardClaimArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async rewardClaimDeleteMany(
    @Args() deleteManyRewardClaimArgs: DeleteManyRewardClaimArgs,
  ) {
    return this.rewardClaimController.deleteMany(deleteManyRewardClaimArgs);
  }

  @Query(() => AggregateRewardClaim, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  rewardClaimAggregate(
    @Args() rewardClaimAggregateArgs: RewardClaimAggregateArgs,
  ) {
    return this.rewardClaimController.aggregate(rewardClaimAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  rewardClaimCount(
    @Args() rewardClaimCountAggregateInput: FindManyRewardClaimArgs,
  ) {
    return this.rewardClaimController.count(rewardClaimCountAggregateInput);
  }
}
