import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { throwPrismaError } from 'src/utils/throw-prisma-error.function';
import { CreateOneRewardArgs, Reward } from 'src/@generated';
import { RewardFindManyArgs } from './dto/reward-find-many.args';
import { RewardFindUniqueArgs } from './dto/reward-find-one.args';
import { RewardUpdateOneArgs } from './dto/reward-update-one.args';

@Injectable()
export class RewardService {
  constructor(private prisma: PrismaService) {}

  async createOne(rewardCreateArgs: CreateOneRewardArgs): Promise<Reward | void> {

    return await this.prisma.reward
      .create(rewardCreateArgs)
      .then((reward) => {
        return reward;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  async findMany(rewardFindManyArgs: RewardFindManyArgs) {
    return this.prisma.reward
      .findMany(rewardFindManyArgs)
      .then((rewards) => {
        return rewards;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  async findOne(rewardFindUniqueArgs: RewardFindUniqueArgs): Promise<Reward | void> {
    return await this.prisma.reward
      .findUnique(rewardFindUniqueArgs)
      .then((reward) => {
        return reward;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  async update(rewardUpdateOneArgs: RewardUpdateOneArgs): Promise<Reward | void> {
    return this.prisma.reward
      .update(rewardUpdateOneArgs)
      .then((reward) => {
        return reward;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  async remove(rewardId: number): Promise<boolean | void>{
    return await this.prisma.reward
      .delete({
        where: { id: rewardId },
      })
      .then(() => {
        return true;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }
}
