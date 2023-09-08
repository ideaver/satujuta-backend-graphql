import { Resolver, Query, Mutation, Args, Info, Int } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import { RewardClaim } from 'src/@generated';
import { RewardClaimCreateArgs } from './dto/reward-claim-create-one.args';
import { RewardClaimFindManyArgs } from './dto/reward-claim-find-many.args';
import { RewardClaimFindUniqueArgs } from './dto/reward-claim-find-one.args';
import { RewardClaimUpdateOneArgs } from './dto/reward-claim-update-one.args';
import { RewardClaimController } from './reward-claim.controller';
import { Logger } from '@nestjs/common';

interface RewardClaimSelect {
  select: Prisma.RewardClaimSelect;
}

@Resolver(() => RewardClaim)
export class RewardClaimResolver {
  constructor(private readonly rewardClaimController: RewardClaimController) {}
  private readonly logger = new Logger(RewardClaimResolver.name);
  @Mutation(() => RewardClaim, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async rewardClaimCreateOne(
    @Args('rewardClaimCreateArgs') rewardClaimCreateArgs: RewardClaimCreateArgs,
    @Relations() relations: RewardClaimSelect,
  ): Promise<RewardClaim | void> {
    rewardClaimCreateArgs.select = relations.select;
    return await this.rewardClaimController.createOne(rewardClaimCreateArgs);
  }

  @Query(() => [RewardClaim], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  rewardClaimFindMany(
    @Args('rewardClaimFindManyArgs', { nullable: true })
    rewardClaimFindManyArgs: RewardClaimFindManyArgs,
    @Relations() relations: RewardClaimSelect,
  ) {
    //Auto implement prisma select from graphql query info
    if (rewardClaimFindManyArgs) {
      rewardClaimFindManyArgs.select = relations.select;
    }

    return this.rewardClaimController.findMany(rewardClaimFindManyArgs);
  }

  @Query(() => RewardClaim, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  rewardClaimFindOne(
    @Args('rewardClaimFindUniqueArgs')
    rewardClaimFindUniqueArgs: RewardClaimFindUniqueArgs,
    @Relations() relations: RewardClaimSelect,
  ): Promise<RewardClaim | void> {
    //Auto implement prisma select from graphql query info
    rewardClaimFindUniqueArgs.select = relations.select;
    return this.rewardClaimController.findOne(rewardClaimFindUniqueArgs);
  }

  @Mutation(() => RewardClaim, {
    description:
      'Deskripsinya ada disini loh, Jika tentang mutasi klaim rewardClaim, backend akan cek apakah saldo point user cukup untuk claim',
  })
  async rewardClaimUpdateOne(
    @Args('rewardClaimUpdateOneArgs')
    rewardClaimUpdateOneArgs: RewardClaimUpdateOneArgs,
    @Relations() relations: RewardClaimSelect,
  ) {
    //Auto implement prisma select from graphql query info
    rewardClaimUpdateOneArgs.select = relations.select;

    return this.rewardClaimController.updateOne(rewardClaimUpdateOneArgs);
  }

  @Mutation(() => Boolean, {
    nullable: true,
    description: 'Datanya benar2 terhapus dari db',
  })
  rewardClaimRemove(@Args('rewardClaimId') rewardClaimId: number) {
    return this.rewardClaimController.remove(rewardClaimId);
  }

  @Query(() => Int, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  rewardClaimCount(
    @Args('rewardClaimFindManyArgs', { nullable: true })
    rewardClaimFindManyArgs: RewardClaimFindManyArgs,
  ) {
    return this.rewardClaimController.count(rewardClaimFindManyArgs);
  }
}
