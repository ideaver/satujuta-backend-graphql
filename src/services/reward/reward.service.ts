import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class RewardService {
  constructor(private prisma: PrismaService) {}

  async createOne(rewardCreateArgs: Prisma.RewardCreateArgs) {
    try {
      return await this.prisma.reward.create(rewardCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(rewardCreateManyArgs: Prisma.RewardCreateManyArgs) {
    try {
      return await this.prisma.reward.createMany(rewardCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(rewardFindUniqueArgs: Prisma.RewardFindUniqueArgs) {
    try {
      return await this.prisma.reward.findUnique(rewardFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(rewardFindManyArgs: Prisma.RewardFindManyArgs) {
    try {
      return await this.prisma.reward.findMany(rewardFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(rewardFindFirstArgs: Prisma.RewardFindFirstArgs) {
    try {
      return await this.prisma.reward.findFirst(rewardFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(rewardUpdateOneArgs: Prisma.RewardUpdateArgs) {
    try {
      return await this.prisma.reward.update(rewardUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(rewardUpdateManyArgs: Prisma.RewardUpdateManyArgs) {
    try {
      return await this.prisma.reward.updateMany(rewardUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(rewardDeleteArgs: Prisma.RewardDeleteArgs) {
    try {
      await this.prisma.reward.delete(rewardDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(rewardDeleteManyArgs: Prisma.RewardDeleteManyArgs) {
    try {
      await this.prisma.reward.deleteMany(rewardDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(rewardAggregateArgs: Prisma.RewardAggregateArgs) {
    try {
      return await this.prisma.reward.aggregate(rewardAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(rewardCountArgs: Prisma.RewardCountArgs) {
    try {
      return await this.prisma.reward.count(rewardCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
