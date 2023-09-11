import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { WithdrawalRequestService } from './withdrawal-request.service';

@Injectable()
export class WithdrawalRequestController {
  constructor(
    private readonly withdrawalRequestService: WithdrawalRequestService,
  ) {}

  async createOne(
    withdrawalRequestCreateArgs: Prisma.WithdrawalRequestCreateArgs,
  ) {
    return await this.withdrawalRequestService.createOne(
      withdrawalRequestCreateArgs,
    );
  }

  async createMany(
    withdrawalRequestCreateManyArgs: Prisma.WithdrawalRequestCreateManyArgs,
  ) {
    return await this.withdrawalRequestService.createMany(
      withdrawalRequestCreateManyArgs,
    );
  }

  async findOne(
    withdrawalRequestFindUniqueArgs: Prisma.WithdrawalRequestFindUniqueArgs,
  ) {
    return await this.withdrawalRequestService.findOne(
      withdrawalRequestFindUniqueArgs,
    );
  }

  async findMany(
    withdrawalRequestFindManyArgs: Prisma.WithdrawalRequestFindManyArgs,
  ) {
    return await this.withdrawalRequestService.findMany(
      withdrawalRequestFindManyArgs,
    );
  }

  async findFirst(
    withdrawalRequestFindFirstArgs: Prisma.WithdrawalRequestFindFirstArgs,
  ) {
    return await this.withdrawalRequestService.findFirst(
      withdrawalRequestFindFirstArgs,
    );
  }

  async updateOne(
    withdrawalRequestUpdateOneArgs: Prisma.WithdrawalRequestUpdateArgs,
  ) {
    return await this.withdrawalRequestService.updateOne(
      withdrawalRequestUpdateOneArgs,
    );
  }

  async updateMany(
    withdrawalRequestUpdateManyArgs: Prisma.WithdrawalRequestUpdateManyArgs,
  ) {
    return await this.withdrawalRequestService.updateMany(
      withdrawalRequestUpdateManyArgs,
    );
  }

  async delete(
    withdrawalRequestDeleteArgs: Prisma.WithdrawalRequestDeleteArgs,
  ) {
    return await this.withdrawalRequestService.delete(
      withdrawalRequestDeleteArgs,
    );
  }

  async deleteMany(
    withdrawalRequestDeleteManyArgs: Prisma.WithdrawalRequestDeleteManyArgs,
  ) {
    return await this.withdrawalRequestService.deleteMany(
      withdrawalRequestDeleteManyArgs,
    );
  }

  async aggregate(
    withdrawalRequestAggregateArgs: Prisma.WithdrawalRequestAggregateArgs,
  ) {
    return await this.withdrawalRequestService.aggregate(
      withdrawalRequestAggregateArgs,
    );
  }

  async count(withdrawalRequestCountArgs: Prisma.WithdrawalRequestCountArgs) {
    return await this.withdrawalRequestService.count(
      withdrawalRequestCountArgs,
    );
  }
}
