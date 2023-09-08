import { Injectable } from '@nestjs/common';
import { Prisma, Reward } from '@prisma/client';
import { RewardClaimService } from './reward-claim.service';
import { PointTransactionController } from '../point-transaction/point-transaction.controller';
import { RewardController } from '../reward/reward.controller';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';

@Injectable()
export class RewardClaimController {
  constructor(
    private readonly rewardClaimService: RewardClaimService,
    private readonly pointTransactionController: PointTransactionController,
    private readonly rewardController: RewardController,
  ) {}

  async createOne(rewardClaimCreateArgs: Prisma.RewardClaimCreateArgs) {
    //check for new claim and check if user has enough point
    await this.IsUserPointEnough(rewardClaimCreateArgs).then(async () => {
      return await this.rewardClaimService.createOne(rewardClaimCreateArgs);
    });
  }

  async createMany(
    rewardClaimCreateManyArgs: Prisma.RewardClaimCreateManyArgs,
  ) {
    return await this.rewardClaimService.createMany(rewardClaimCreateManyArgs);
  }

  async findOne(rewardClaimFindUniqueArgs: Prisma.RewardClaimFindUniqueArgs) {
    return await this.rewardClaimService.findOne(rewardClaimFindUniqueArgs);
  }

  async findMany(rewardClaimFindManyArgs: Prisma.RewardClaimFindManyArgs) {
    return await this.rewardClaimService.findMany(rewardClaimFindManyArgs);
  }

  async findFirst(rewardClaimFindFirstArgs: Prisma.RewardClaimFindFirstArgs) {
    return await this.rewardClaimService.findFirst(rewardClaimFindFirstArgs);
  }

  async updateOne(rewardClaimUpdateOneArgs: Prisma.RewardClaimUpdateArgs) {
    return await this.rewardClaimService.updateOne(rewardClaimUpdateOneArgs);
  }

  async updateMany(
    rewardClaimUpdateManyArgs: Prisma.RewardClaimUpdateManyArgs,
  ) {
    return await this.rewardClaimService.updateMany(rewardClaimUpdateManyArgs);
  }

  async delete(rewardClaimDeleteArgs: Prisma.RewardClaimDeleteArgs) {
    return await this.rewardClaimService.delete(rewardClaimDeleteArgs);
  }

  async deleteMany(
    rewardClaimDeleteManyArgs: Prisma.RewardClaimDeleteManyArgs,
  ) {
    return await this.rewardClaimService.deleteMany(rewardClaimDeleteManyArgs);
  }

  async aggregate(rewardClaimAggregateArgs: Prisma.RewardClaimAggregateArgs) {
    return await this.rewardClaimService.aggregate(rewardClaimAggregateArgs);
  }

  async count(rewardClaimCountArgs: Prisma.RewardClaimCountArgs) {
    return await this.rewardClaimService.count(rewardClaimCountArgs);
  }

  private async IsUserPointEnough(
    RewardClaimCreateArgs: Prisma.RewardClaimCreateArgs,
  ) {
    //Get user's point
    const currentBalance: number =
      await this.pointTransactionController.getCurrentBalance(
        RewardClaimCreateArgs.data.user.connect.id,
      );

    //Get reward's point cost
    const rewardPointCost: number = await this.rewardController
      .findOne({
        where: { id: RewardClaimCreateArgs.data.reward.connect.id },
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
