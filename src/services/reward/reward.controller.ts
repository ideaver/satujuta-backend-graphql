import { RewardService } from './reward.service';
import { PointTransaction, Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import { Reward } from 'src/@generated';
import { RewardCreateArgs } from './dto/reward-create-one.args';
import { RewardFindManyArgs } from './dto/reward-find-many.args';
import { RewardFindUniqueArgs } from './dto/reward-find-one.args';
import { RewardUpdateOneArgs } from './dto/reward-update-one.args';

import { GraphQLError } from 'graphql';
import { Injectable } from '@nestjs/common';
import { PointTransactionController } from '../point-transaction/point-transaction.controller';

@Injectable()
export class RewardController {
  constructor(
    private readonly rewardService: RewardService,
    private readonly pointTransactionController: PointTransactionController,
  ) {}

  async createOne(rewardCreateArgs: RewardCreateArgs): Promise<Reward | void> {
    return await this.rewardService.createOne(rewardCreateArgs);
  }

  findMany(rewardFindManyArgs: RewardFindManyArgs) {
    return this.rewardService.findMany(rewardFindManyArgs);
  }

  findOne(rewardFindUniqueArgs: RewardFindUniqueArgs): Promise<Reward | void> {
    return this.rewardService.findOne(rewardFindUniqueArgs);
  }

  async updateOne(rewardUpdateOneArgs: RewardUpdateOneArgs) {
    const { name, description, images } = rewardUpdateOneArgs.data;

    if (name?.set === null) {
      rewardUpdateOneArgs.data.name = undefined;
    }

    if (description?.set === null) {
      rewardUpdateOneArgs.data.description = undefined;
    }

    if (images.delete?.[0]?.url.equals === null) {
      rewardUpdateOneArgs.data.images.delete = undefined;
    }

    if (images.deleteMany?.[0]?.url.equals === null) {
      rewardUpdateOneArgs.data.images.deleteMany = undefined;
    }

    if (images.createMany?.data?.[0]?.url === null) {
      rewardUpdateOneArgs.data.images.createMany = undefined;
    }
    //check for new claim and check if user has enough point
    await this.isNewRewardClaimEventAndIsUserPointEnough(rewardUpdateOneArgs);
    return this.rewardService.update(rewardUpdateOneArgs);
  }

  remove(rewardId: number) {
    return this.rewardService.remove(rewardId);
  }

  private async isNewRewardClaimEventAndIsUserPointEnough(
    rewardUpdateOneArgs: RewardUpdateOneArgs,
  ) {
    //Check if user claim new reward
    if (
      rewardUpdateOneArgs.data.claimers?.connect &&
      rewardUpdateOneArgs.data.claimers?.connect.length > 0
    ) {
      let userId: string;
      for (const userWhereUniqueInput of rewardUpdateOneArgs.data.claimers
        .connect) {
        userId = userWhereUniqueInput.id;
      }
      //Get user's point
      const currentBalance: number =
        await this.pointTransactionController.getCurrentBalance(userId);
      const rewardPointCost: number = await this.findOne({
        where: { id: rewardUpdateOneArgs.where.id },
      }).then((reward: Reward) => reward.pointCost);

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
