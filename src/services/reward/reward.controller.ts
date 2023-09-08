import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { RewardService } from './reward.service';

@Injectable()
export class RewardController {
  constructor(private readonly rewardService: RewardService) {}

  async createOne(rewardCreateArgs: Prisma.RewardCreateArgs) {
    return await this.rewardService.createOne(rewardCreateArgs);
  }

  async createMany(rewardCreateManyArgs: Prisma.RewardCreateManyArgs) {
    return await this.rewardService.createMany(rewardCreateManyArgs);
  }

  async findOne(rewardFindUniqueArgs: Prisma.RewardFindUniqueArgs) {
    return await this.rewardService.findOne(rewardFindUniqueArgs);
  }

  async findMany(rewardFindManyArgs: Prisma.RewardFindManyArgs) {
    return await this.rewardService.findMany(rewardFindManyArgs);
  }

  async findFirst(rewardFindFirstArgs: Prisma.RewardFindFirstArgs) {
    return await this.rewardService.findFirst(rewardFindFirstArgs);
  }

  async updateOne(rewardUpdateOneArgs: Prisma.RewardUpdateArgs) {
    return await this.rewardService.updateOne(rewardUpdateOneArgs);
  }

  async updateMany(rewardUpdateManyArgs: Prisma.RewardUpdateManyArgs) {
    return await this.rewardService.updateMany(rewardUpdateManyArgs);
  }

  async delete(rewardDeleteArgs: Prisma.RewardDeleteArgs) {
    return await this.rewardService.delete(rewardDeleteArgs);
  }

  async deleteMany(rewardDeleteManyArgs: Prisma.RewardDeleteManyArgs) {
    return await this.rewardService.deleteMany(rewardDeleteManyArgs);
  }

  async aggregate(rewardAggregateArgs: Prisma.RewardAggregateArgs) {
    return await this.rewardService.aggregate(rewardAggregateArgs);
  }

  async count(rewardCountArgs: Prisma.RewardCountArgs) {
    return await this.rewardService.count(rewardCountArgs);
  }
}
