import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class RewardClaimService {
  constructor(private prisma: PrismaService) {}

  async createOne(rewardClaimCreateArgs: Prisma.RewardClaimCreateArgs) {
    try {
      return await this.prisma.rewardClaim.create(rewardClaimCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(
    rewardClaimCreateManyArgs: Prisma.RewardClaimCreateManyArgs,
  ) {
    try {
      return await this.prisma.rewardClaim.createMany(
        rewardClaimCreateManyArgs,
      );
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(rewardClaimFindUniqueArgs: Prisma.RewardClaimFindUniqueArgs) {
    try {
      return await this.prisma.rewardClaim.findUnique(
        rewardClaimFindUniqueArgs,
      );
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(rewardClaimFindManyArgs: Prisma.RewardClaimFindManyArgs) {
    try {
      return await this.prisma.rewardClaim.findMany(rewardClaimFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(rewardClaimFindFirstArgs: Prisma.RewardClaimFindFirstArgs) {
    try {
      return await this.prisma.rewardClaim.findFirst(rewardClaimFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(rewardClaimUpdateOneArgs: Prisma.RewardClaimUpdateArgs) {
    try {
      return await this.prisma.rewardClaim.update(rewardClaimUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(
    rewardClaimUpdateManyArgs: Prisma.RewardClaimUpdateManyArgs,
  ) {
    try {
      return await this.prisma.rewardClaim.updateMany(
        rewardClaimUpdateManyArgs,
      );
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(rewardClaimDeleteArgs: Prisma.RewardClaimDeleteArgs) {
    try {
      await this.prisma.rewardClaim.delete(rewardClaimDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(
    rewardClaimDeleteManyArgs: Prisma.RewardClaimDeleteManyArgs,
  ) {
    try {
      await this.prisma.rewardClaim.deleteMany(rewardClaimDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(rewardClaimAggregateArgs: Prisma.RewardClaimAggregateArgs) {
    try {
      return await this.prisma.rewardClaim.aggregate(rewardClaimAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(rewardClaimCountArgs: Prisma.RewardClaimCountArgs) {
    try {
      return await this.prisma.rewardClaim.count(rewardClaimCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
