import { Injectable, Logger } from '@nestjs/common';
import { Invoice, Prisma } from '@prisma/client';
import { TransactionService } from './transaction.service';
import { InvoiceController } from '../invoice/invoice.controller';

@Injectable()
export class TransactionController {
  constructor(
    private readonly transactionService: TransactionService,
    private readonly invoiceController: InvoiceController,
  ) {}
  private readonly logger = new Logger(TransactionController.name);

  async createOne(transactionCreateArgs: Prisma.TransactionCreateArgs) {
    //check intent from transaction category

    // check unique code
    // getInvoiceUniqueCode

    const invoice: void | Invoice = await this.invoiceController.findOne({
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

    //if order
    // notify order status
    // process comission and point transaction
    //return await this.transactionService.createOne(transactionCreateArgs);
  }

  async createMany(
    transactionCreateManyArgs: Prisma.TransactionCreateManyArgs,
  ) {
    return await this.transactionService.createMany(transactionCreateManyArgs);
  }

  async findOne(transactionFindUniqueArgs: Prisma.TransactionFindUniqueArgs) {
    return await this.transactionService.findOne(transactionFindUniqueArgs);
  }

  async findMany(transactionFindManyArgs: Prisma.TransactionFindManyArgs) {
    return await this.transactionService.findMany(transactionFindManyArgs);
  }

  async findFirst(transactionFindFirstArgs: Prisma.TransactionFindFirstArgs) {
    return await this.transactionService.findFirst(transactionFindFirstArgs);
  }

  async updateOne(transactionUpdateOneArgs: Prisma.TransactionUpdateArgs) {
    return await this.transactionService.updateOne(transactionUpdateOneArgs);
  }

  async updateMany(
    transactionUpdateManyArgs: Prisma.TransactionUpdateManyArgs,
  ) {
    return await this.transactionService.updateMany(transactionUpdateManyArgs);
  }

  async aggregate(transactionAggregateArgs: Prisma.TransactionAggregateArgs) {
    return await this.transactionService.aggregate(transactionAggregateArgs);
  }

  async count(transactionCountArgs: Prisma.TransactionCountArgs) {
    return await this.transactionService.count(transactionCountArgs);
  }
}
