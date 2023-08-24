import { RewardService } from './reward.service';
import { Reward } from 'src/@generated';
import { RewardCreateArgs } from './dto/reward-create-one.args';
import { RewardFindManyArgs } from './dto/reward-find-many.args';
import { RewardFindUniqueArgs } from './dto/reward-find-one.args';
import { RewardUpdateOneArgs } from './dto/reward-update-one.args';

import { Injectable } from '@nestjs/common';

@Injectable()
export class RewardController {
  constructor(private readonly rewardService: RewardService) {}

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

    return this.rewardService.update(rewardUpdateOneArgs);
  }

  remove(rewardId: number) {
    return this.rewardService.remove(rewardId);
  }
}
