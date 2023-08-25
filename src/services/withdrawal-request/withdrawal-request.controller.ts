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
import { GraphQLError } from 'graphql';
import { WithdrawalRequestFindFirstArgs } from './dto/withdrawal-request-find-first.args';

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
      throw new GraphQLError('Saldo tidak mencukupi ', {
        extensions: {
          code: 434654,
        },
      });
    }

    //check if user has pending withdrawal request
    await this.findFirst({
      where: {
        user: {
          is: { id: { equals: userId } },
        },
        status: { equals: TransactionStatus.PENDING },
      },
    }).then(() => {
      throw new GraphQLError(
        'Masih ada request withdrawal yang pending terdahulu ',
        {
          extensions: {
            code: 453544,
          },
        },
      );
    });

    //

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
    //TODO:
    //check if approved/rejected

    //reduce balance if approved

    return this.withdrawalRequestService.update(withdrawalRequestUpdateOneArgs);
  }

  remove(withdrawalRequestId: number) {
    return this.withdrawalRequestService.remove(withdrawalRequestId);
  }
}
