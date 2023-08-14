import { Resolver, Query, Mutation, Args, Info } from '@nestjs/graphql';
import { RewardService } from './reward.service';
import { PointTransaction, Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import { Reward } from 'src/@generated';
import { RewardCreateArgs } from './dto/reward-create-one.args';
import { RewardFindManyArgs } from './dto/reward-find-many.args';
import { RewardFindUniqueArgs } from './dto/reward-find-one.args';
import { RewardUpdateOneArgs } from './dto/reward-update-one.args';
import { PointTransactionResolver } from '../point-transaction/point-transaction.resolver';
import { GraphQLError } from 'graphql';

interface RewardSelect {
  select: Prisma.RewardSelect;
}

@Resolver(() => Reward)
export class RewardResolver {
  constructor(
    private readonly rewardService: RewardService,
    private readonly pointTransactionResolver: PointTransactionResolver,
  ) {}

  @Mutation(() => Reward, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async rewardCreateOne(
    @Args('rewardCreateArgs') rewardCreateArgs: RewardCreateArgs,
    @Relations() relations: RewardSelect,
  ): Promise<Reward | void> {
    rewardCreateArgs.select = relations.select;
    return await this.rewardService.createOne(rewardCreateArgs);
  }

  @Query(() => [Reward], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  rewardFindMany(
    @Args('rewardFindManyArgs') rewardFindManyArgs: RewardFindManyArgs,
    @Relations() relations: RewardSelect,
  ) {
    //Auto implement prisma select from graphql query info
    rewardFindManyArgs.select = relations.select;
    return this.rewardService.findMany(rewardFindManyArgs);
  }

  @Query(() => Reward, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  rewardFindOne(
    @Args('rewardFindUniqueArgs')
    rewardFindUniqueArgs: RewardFindUniqueArgs,
    @Relations() relations: RewardSelect,
  ): Promise<Reward | void> {
    //Auto implement prisma select from graphql query info
    rewardFindUniqueArgs.select = relations.select;
    return this.rewardService.findOne(rewardFindUniqueArgs);
  }

  @Mutation(() => Reward, {
    description:
      'Deskripsinya ada disini loh, Jika tentang mutasi klaim reward, backend akan cek apakah saldo point user cukup untuk claim',
  })
  async rewardUpdateOne(
    @Args('rewardUpdateOneArgs') rewardUpdateOneArgs: RewardUpdateOneArgs,
    @Relations() relations: RewardSelect,
  ) {
    rewardUpdateOneArgs.select = relations.select;

    //check for new claim and check if user has enough point
    await this.isNewRewardClaimEventAndIsUserPointEnough(rewardUpdateOneArgs);

    return this.rewardService.update(rewardUpdateOneArgs);
  }

  @Mutation(() => Boolean, {
    nullable: true,
    description: 'Datanya benar2 terhapus dari db',
  })
  rewardRemove(@Args('rewardId') rewardId: number) {
    return this.rewardService.remove(rewardId);
  }

  private async isNewRewardClaimEventAndIsUserPointEnough(
    rewardUpdateOneArgs: RewardUpdateOneArgs,
  ) {
    const { connect } = rewardUpdateOneArgs.data.claimers;
    let userId: string;

    //Check if user claim new reward
    if (connect && connect.length > 0) {
      for (const userWhereUniqueInput of connect) {
        userId = userWhereUniqueInput.id;
      }
      //Get user's point
      const currentBalance: number =
        await this.pointTransactionResolver.getCurrentBalance(userId);
      const rewardPointCost: number = await this.rewardFindOne(
        { where: { id: rewardUpdateOneArgs.where.id } },
        { select: { pointCost: true } },
      ).then((reward: Reward) => reward.pointCost);

      if (currentBalance === null) {
        throw new GraphQLError('Empty Balance', {
          extensions: {
            code: 23505,
          },
        });
      }

      // Check user's points
      if (currentBalance < rewardPointCost) {
        throw new GraphQLError('Insufficient Points', {
          extensions: {
            code: 23525,
          },
        });
      }
    }
  }
}
