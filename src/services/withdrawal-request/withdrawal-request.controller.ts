import { WithdrawalRequestService } from './withdrawal-request.service';
import {
  AccountCategory,
  TransactionStatus,
  WithdrawalRequest,
} from 'src/@generated';
import { WithdrawalRequestCreateArgs } from './dto/withdrawal-request-create-one.args';
import { WithdrawalRequestFindManyArgs } from './dto/withdrawal-request-find-many.args';
import { WithdrawalRequestFindUniqueArgs } from './dto/withdrawal-request-find-one.args';
import { WithdrawalRequestUpdateOneArgs } from './dto/withdrawal-request-update-one.args';

import { Injectable } from '@nestjs/common';
import { AccountController } from '../account/account.controller';
import { WithdrawalRequestFindFirstArgs } from './dto/withdrawal-request-find-first.args';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';

@Injectable()
export class WithdrawalRequestController {
  constructor(
    private readonly withdrawalRequestService: WithdrawalRequestService,
    private readonly accountController: AccountController,
  ) {}

  async createOne(
    withdrawalRequestCreateArgs: WithdrawalRequestCreateArgs,
  ): Promise<WithdrawalRequest | void> {
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

  findMany(withdrawalRequestFindManyArgs: WithdrawalRequestFindManyArgs) {
    return this.withdrawalRequestService.findMany(
      withdrawalRequestFindManyArgs,
    );
  }

  findOne(
    withdrawalRequestFindUniqueArgs: WithdrawalRequestFindUniqueArgs,
  ): Promise<WithdrawalRequest | void> {
    return this.withdrawalRequestService.findOne(
      withdrawalRequestFindUniqueArgs,
    );
  }

  findFirst(withdrawalRequestFindFirstArgs: WithdrawalRequestFindFirstArgs) {
    return this.withdrawalRequestService.findFirst(
      withdrawalRequestFindFirstArgs,
    );
  }

  async updateOne(
    withdrawalRequestUpdateOneArgs: WithdrawalRequestUpdateOneArgs,
  ) {
    const { status, proofUrl, proofDescription } =
      withdrawalRequestUpdateOneArgs.data;
    //TODO:
    //check if approved/rejected

    //reduce balance if approved

    //handle graphql null value to prisma
    if (status === null || status === undefined) {
      withdrawalRequestUpdateOneArgs.data.status = undefined;
    }

    if (proofUrl === null || proofUrl === undefined) {
      withdrawalRequestUpdateOneArgs.data.proofUrl = undefined;
    }

    if (proofDescription === null || proofDescription === undefined) {
      withdrawalRequestUpdateOneArgs.data.proofDescription = undefined;
    }

    return this.withdrawalRequestService.update(withdrawalRequestUpdateOneArgs);
  }

  remove(withdrawalRequestId: number) {
    return this.withdrawalRequestService.remove(withdrawalRequestId);
  }
}
