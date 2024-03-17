import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class WithdrawalRequestService {
  constructor(private prisma: PrismaService) {}
  private readonly logger = new Logger(WithdrawalRequestService.name);

  async createOne(
    withdrawalRequestCreateArgs: Prisma.WithdrawalRequestCreateArgs,
  ) {
    try {
      return await this.prisma.withdrawalRequest.create(
        withdrawalRequestCreateArgs,
      );
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(
    withdrawalRequestCreateManyArgs: Prisma.WithdrawalRequestCreateManyArgs,
  ) {
    try {
      return await this.prisma.withdrawalRequest.createMany(
        withdrawalRequestCreateManyArgs,
      );
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(
    withdrawalRequestFindUniqueArgs: Prisma.WithdrawalRequestFindUniqueArgs,
  ) {
    try {
      return await this.prisma.withdrawalRequest.findUnique(
        withdrawalRequestFindUniqueArgs,
      );
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(
    withdrawalRequestFindManyArgs: Prisma.WithdrawalRequestFindManyArgs,
  ) {
    try {
      return await this.prisma.withdrawalRequest.findMany(
        withdrawalRequestFindManyArgs,
      );
    } catch (err) {
      this.logger.log(err);
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(
    withdrawalRequestFindFirstArgs: Prisma.WithdrawalRequestFindFirstArgs,
  ) {
    try {
      return await this.prisma.withdrawalRequest.findFirst(
        withdrawalRequestFindFirstArgs,
      );
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(
    withdrawalRequestUpdateOneArgs: Prisma.WithdrawalRequestUpdateArgs,
  ) {
    try {
      return await this.prisma.withdrawalRequest.update(
        withdrawalRequestUpdateOneArgs,
      );
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(
    withdrawalRequestUpdateManyArgs: Prisma.WithdrawalRequestUpdateManyArgs,
  ) {
    try {
      return await this.prisma.withdrawalRequest.updateMany(
        withdrawalRequestUpdateManyArgs,
      );
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(
    withdrawalRequestDeleteArgs: Prisma.WithdrawalRequestDeleteArgs,
  ) {
    try {
      await this.prisma.withdrawalRequest.delete(withdrawalRequestDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(
    withdrawalRequestDeleteManyArgs: Prisma.WithdrawalRequestDeleteManyArgs,
  ) {
    try {
      await this.prisma.withdrawalRequest.deleteMany(
        withdrawalRequestDeleteManyArgs,
      );
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(
    withdrawalRequestAggregateArgs: Prisma.WithdrawalRequestAggregateArgs,
  ) {
    try {
      return await this.prisma.withdrawalRequest.aggregate(
        withdrawalRequestAggregateArgs,
      );
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(withdrawalRequestCountArgs: Prisma.WithdrawalRequestCountArgs) {
    try {
      return await this.prisma.withdrawalRequest.count(
        withdrawalRequestCountArgs,
      );
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
