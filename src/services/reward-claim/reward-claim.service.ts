import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { throwPrismaError } from 'src/utils/throw-prisma-error.function';
import { CreateOneRewardClaimArgs, RewardClaim } from 'src/@generated';
import { RewardClaimFindManyArgs } from './dto/reward-claim-find-many.args';
import { RewardClaimFindUniqueArgs } from './dto/reward-claim-find-one.args';
import { RewardClaimUpdateOneArgs } from './dto/reward-claim-update-one.args';

@Injectable()
export class RewardClaimService {
  constructor(private prisma: PrismaService) {}

  async createOne(
    rewardClaimCreateArgs: CreateOneRewardClaimArgs,
  ): Promise<RewardClaim | void> {
    return await this.prisma.rewardClaim
      .create(rewardClaimCreateArgs)
      .then((rewardClaim) => {
        return rewardClaim;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  async findMany(rewardClaimFindManyArgs: RewardClaimFindManyArgs) {
    return this.prisma.rewardClaim
      .findMany(rewardClaimFindManyArgs)
      .then((rewardClaims) => {
        return rewardClaims;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  async findOne(
    rewardClaimFindUniqueArgs: RewardClaimFindUniqueArgs,
  ): Promise<RewardClaim | void> {
    return await this.prisma.rewardClaim
      .findUnique(rewardClaimFindUniqueArgs)
      .then((rewardClaim) => {
        return rewardClaim;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  async update(
    rewardClaimUpdateOneArgs: RewardClaimUpdateOneArgs,
  ): Promise<RewardClaim | void> {
    return this.prisma.rewardClaim
      .update(rewardClaimUpdateOneArgs)
      .then((rewardClaim) => {
        return rewardClaim;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  async remove(rewardClaimId: number): Promise<boolean | void> {
    return await this.prisma.rewardClaim
      .delete({
        where: { id: rewardClaimId },
      })
      .then(() => {
        return true;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }
}
