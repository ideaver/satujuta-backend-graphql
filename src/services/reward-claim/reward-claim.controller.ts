import { RewardClaimService } from './reward-claim.service';
import { RewardClaim } from 'src/@generated';
import { RewardClaimCreateArgs } from './dto/reward-claim-create-one.args';
import { RewardClaimFindManyArgs } from './dto/reward-claim-find-many.args';
import { RewardClaimFindUniqueArgs } from './dto/reward-claim-find-one.args';
import { RewardClaimUpdateOneArgs } from './dto/reward-claim-update-one.args';
import { Injectable } from '@nestjs/common';
import { PointTransactionController } from '../point-transaction/point-transaction.controller';
import { RewardController } from '../reward/reward.controller';
import { Reward } from '@prisma/client';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';

@Injectable()
export class RewardClaimController {
  constructor(
    private readonly rewardClaimService: RewardClaimService,
    private readonly pointTransactionController: PointTransactionController,
    private readonly rewardController: RewardController,
  ) {}

  async createOne(
    rewardClaimCreateArgs: RewardClaimCreateArgs,
  ): Promise<RewardClaim | void> {
    //check for new claim and check if user has enough point
    await this.IsUserPointEnough(rewardClaimCreateArgs).then(async () => {
      return await this.rewardClaimService.createOne(rewardClaimCreateArgs);
    });
  }

  findMany(rewardClaimFindManyArgs: RewardClaimFindManyArgs) {
    return this.rewardClaimService.findMany(rewardClaimFindManyArgs);
  }

  findOne(
    rewardClaimFindUniqueArgs: RewardClaimFindUniqueArgs,
  ): Promise<RewardClaim | void> {
    return this.rewardClaimService.findOne(rewardClaimFindUniqueArgs);
  }

  async updateOne(rewardClaimUpdateOneArgs: RewardClaimUpdateOneArgs) {
    return this.rewardClaimService.update(rewardClaimUpdateOneArgs);
  }

  remove(rewardClaimId: number) {
    return this.rewardClaimService.remove(rewardClaimId);
  }

  count(rewardClaimFindManyArgs: RewardClaimFindManyArgs) {
    return this.rewardClaimService.count(rewardClaimFindManyArgs);
  }

  private async IsUserPointEnough(
    rewardClaimCreateArgs: RewardClaimCreateArgs,
  ) {
    //Get user's point
    const currentBalance: number =
      await this.pointTransactionController.getCurrentBalance(
        rewardClaimCreateArgs.data.user.connect.id,
      );

    //Get reward's point cost
    const rewardPointCost: number = await this.rewardController
      .findOne({
        where: { id: rewardClaimCreateArgs.data.reward.connect.id },
      })
      .then((reward: Reward) => reward.pointCost);

    // Check if user has any point
    if (currentBalance === null) {
      throw new IGraphQLError({ code: 150001 });
    }

    // Check user's points
    if (currentBalance < rewardPointCost) {
      throw new IGraphQLError({ code: 150002 });
    }
  }
}
