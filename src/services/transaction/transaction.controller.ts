import { TransactionService } from './transaction.service';
import { Transaction } from 'src/@generated';
import { TransactionCreateArgs } from './dto/transaction-create-one.args';
import { TransactionFindManyArgs } from './dto/transaction-find-many.args';
import { TransactionFindUniqueArgs } from './dto/transaction-find-one.args';
import { TransactionUpdateOneArgs } from './dto/transaction-update-one.args';
import { Injectable, Logger } from '@nestjs/common';
import { Invoice, Prisma } from '@prisma/client';
import { InvoiceService } from '../invoice/invoice.service';

@Injectable()
export class TransactionController {
  constructor(
    private readonly transactionService: TransactionService,
    private readonly invoiceService: InvoiceService,
  ) {}
  private readonly logger = new Logger(TransactionController.name);

  async createOne(
    transactionCreateArgs: TransactionCreateArgs,
  ): Promise<Transaction | void> {
    const TransactionCreateArgsPrisma: Prisma.TransactionCreateArgs = {
      ...transactionCreateArgs,
    };

    //check intent from transaction category

    // check unique code
    // getInvoiceUniqueCode

    const invoice: void | Invoice = await this.invoiceService.findOne({
      select: { uniqueCode: true },
      where: { id: transactionCreateArgs.data.invoice.connect.id },
    });
    let getInvoiceUniqueCode: number;
    if (invoice) {
      getInvoiceUniqueCode = invoice.uniqueCode;
    }

    // Check if the transaction amount contains the invoice unique code
    if (transactionCreateArgs.data.amount) {
      const amountContainsUniqueCode = String(
        transactionCreateArgs.data.amount,
      ).includes(String(getInvoiceUniqueCode));
      if (amountContainsUniqueCode) {
        console.log(
          `The amount contains the invoice unique code: ${getInvoiceUniqueCode}`,
        );
      } else {
        console.log(
          `The amount does not contain the invoice unique code: ${getInvoiceUniqueCode}`,
        );
      }
    } else {
      console.log('Transaction amount is not defined.');
    }

    // Check if it transaction with installment
    // Check if the transaction amount is equal to the invoice amount
    // Check if the transaction amount is equal to the invoice amount + unique code or - unique code

    this.logger.log(getInvoiceUniqueCode);
    //set transaction status to pending
    //determine from and to which account based on transaction category
    //get from and to Account Id from User

    // return await this.transactionService.createOne(transactionCreateArgs);

    // check for third party API mutation existence
    // Check if the mutation amount is equal to the invoice//installment amount
    // Check if the mutation amount is equal to the invoice amount + unique code or - unique code
    //set transaction status to completed
  }

  findMany(transactionFindManyArgs: TransactionFindManyArgs) {
    return this.transactionService.findMany(transactionFindManyArgs);
  }

  findOne(transactionFindUniqueArgs: TransactionFindUniqueArgs) {
    return this.transactionService.findOne(transactionFindUniqueArgs);
  }

  updateOne(transactionUpdateOneArgs: TransactionUpdateOneArgs) {
    return this.transactionService.update(transactionUpdateOneArgs);
  }

  // remove(transactionId: number) {
  //   return this.transactionService.remove(transactionId);
  // }
}
