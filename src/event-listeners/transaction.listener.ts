import { Injectable, Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { TransactionController } from 'src/services/transaction/transaction.controller';
import { TransactionCategory, TransactionStatus } from '@prisma/client';
import { AccountController } from 'src/services/account/account.controller';
import { TransactionEvents } from './enum/transaction-event.enum';

@Injectable()
export class TransactionListener {
  constructor(
    private readonly accountController: AccountController,
    private readonly transactionController: TransactionController,
  ) {}

  private readonly logger = new Logger(TransactionListener.name);

  @OnEvent(TransactionEvents.TransactionCreateOneOfSendPointToRefereeUserEvent)
  async OnTransactionCreateOneOfSendPointToRefereeUserEvent(
    referredById: string,
  ) {
    //get account id
    const accountOrigin =
      await this.accountController.getAccountIdOfPlatformPoint();
    const accountDestination =
      await this.accountController.getAccountIdOfUserPointFromUserId(
        referredById,
      );
    //create point transaction
    await this.transactionController
      .createOne({
        data: {
          amount: 1, //TODO: get from setting db
          transactionCategory: TransactionCategory.REFERRING,
          status: TransactionStatus.COMPLETED,
          fromAccount: { connect: { id: accountOrigin.id } },
          toAccount: { connect: { id: accountDestination.id } },
        },
      })
      .catch((err) => {
        this.logger.log({ message: err.message, stack: err.stack });
      });
  }
}
