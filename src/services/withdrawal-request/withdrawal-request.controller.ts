import { Injectable } from '@nestjs/common';
import { AccountCategory, Prisma, TransactionStatus } from '@prisma/client';
import { WithdrawalRequestService } from './withdrawal-request.service';
import { AccountController } from '../account/account.controller';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';

@Injectable()
export class WithdrawalRequestController {
  constructor(
    private readonly withdrawalRequestService: WithdrawalRequestService,
    private readonly accountController: AccountController,
  ) {}

  async createOne(
    withdrawalRequestCreateArgs: Prisma.WithdrawalRequestCreateArgs,
  ) {
    const { id: userId } = withdrawalRequestCreateArgs.data.user.connect;
    //check if user has enough balance
    const accountBalance =
      await this.accountController.getAccountTotalBalanceByCategoryAndUserId({
        userId: userId,
        accountCategory: AccountCategory.COMISSION,
      });

    if (accountBalance < withdrawalRequestCreateArgs.data.amount) {
      throw new IGraphQLError({ code: 140001 });
    }

    //check if user has pending withdrawal request
    const findPending = await this.findFirst({
      take: 1,
      where: {
        user: {
          is: { id: { equals: userId } },
        },
        status: { equals: TransactionStatus.PENDING },
      },
    });

    if (findPending) {
      throw new IGraphQLError({ code: 140002 });
    }

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
    //TODO:
    //check if approved/rejected

    //reduce balance if approved
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
