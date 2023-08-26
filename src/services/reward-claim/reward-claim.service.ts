import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import {
  CreateOneRewardClaimArgs,
  FindManyRewardClaimArgs,
  RewardClaim,
} from 'src/@generated';
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
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async findMany(rewardClaimFindManyArgs: RewardClaimFindManyArgs) {
    return this.prisma.rewardClaim
      .findMany(rewardClaimFindManyArgs)
      .then((rewardClaims) => {
        return rewardClaims;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
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
        throw new IGraphQLError({ code: 123456, err: err });
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
        throw new IGraphQLError({ code: 123456, err: err });
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
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async count(
    findManyRewardClaimArgs: FindManyRewardClaimArgs,
  ): Promise<number | void> {
    return await this.prisma.rewardClaim
      .count(findManyRewardClaimArgs)
      .then((count) => {
        return count;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }
}
