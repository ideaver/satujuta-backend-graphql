// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateReward,
  CreateManyRewardArgs,
  CreateOneRewardArgs,
  DeleteManyRewardArgs,
  DeleteOneRewardArgs,
  FindFirstRewardArgs,
  FindManyRewardArgs,
  FindUniqueRewardArgs,
  Reward,
  RewardAggregateArgs,
  UpdateManyRewardArgs,
  UpdateOneRewardArgs,
} from 'src/@generated';
import { RewardController } from './reward.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface RewardSelect {
  select: Prisma.RewardSelect;
}

@Resolver(() => Reward)
export class RewardResolver {
  constructor(private readonly rewardController: RewardController) {}

  @Mutation(() => Reward, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async rewardCreateOne(
    @Args()
    rewardCreateArgs: CreateOneRewardArgs,
    @Relations() relations: RewardSelect,
  ): Promise<Reward | void> {
    return await this.rewardController.createOne({
      ...rewardCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async rewardCreateMany(
    @Args()
    createManyRewardArgs: CreateManyRewardArgs,
  ) {
    return await this.rewardController.createMany(createManyRewardArgs);
  }

  @Query(() => Reward, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  rewardFindOne(
    @Args()
    rewardFindUniqueArgs: FindUniqueRewardArgs,
    @Relations() relations: RewardSelect,
  ): Promise<Reward | void> {
    return this.rewardController.findOne({
      ...rewardFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [Reward], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  rewardFindMany(
    @Args() rewardFindManyArgs: FindManyRewardArgs,
    @Relations() relations: RewardSelect,
  ) {
    return this.rewardController.findMany({
      ...rewardFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => Reward, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  rewardFindFirst(
    @Args()
    findFirstRewardArgs: FindFirstRewardArgs,
    @Relations() relations: RewardSelect,
  ): Promise<Reward | void> {
    return this.rewardController.findFirst({
      ...findFirstRewardArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Reward, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async rewardUpdateOne(
    @Args() rewardUpdateOneArgs: UpdateOneRewardArgs,
    @Relations() relations: RewardSelect,
  ) {
    return this.rewardController.updateOne({
      ...replaceNullWithUndefined(rewardUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => Reward, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async rewardUpdateMany(@Args() updateManyRewardArgs: UpdateManyRewardArgs) {
    return this.rewardController.updateMany(updateManyRewardArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async rewardDelete(
    @Args() deleteOneRewardArgs: DeleteOneRewardArgs,
    @Relations() relations: RewardSelect,
  ) {
    return this.rewardController.delete({
      ...deleteOneRewardArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async rewardDeleteMany(@Args() deleteManyRewardArgs: DeleteManyRewardArgs) {
    return this.rewardController.deleteMany(deleteManyRewardArgs);
  }

  @Query(() => AggregateReward, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  rewardAggregate(@Args() rewardAggregateArgs: RewardAggregateArgs) {
    return this.rewardController.aggregate(rewardAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  rewardCount(@Args() rewardCountAggregateInput: FindManyRewardArgs) {
    return this.rewardController.count(rewardCountAggregateInput);
  }
}
