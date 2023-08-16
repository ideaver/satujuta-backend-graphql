import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { throwPrismaError } from 'src/utils/throw-prisma-error.function';
import { CreateOneTransactionArgs, Transaction } from 'src/@generated';
import { TransactionFindManyArgs } from './dto/transaction-find-many.args';
import { TransactionFindUniqueArgs } from './dto/transaction-find-one.args';
import { TransactionUpdateOneArgs } from './dto/transaction-update-one.args';
import {
  AccountBalanceByCustomPeriodArgs,
  AccountBalanceByCustomPeriodQuery,
} from './dto/get-account-balance-by-custom-period.args';

@Injectable()
export class TransactionService {
  constructor(private prisma: PrismaService) {}

  async createOne(
    transactionCreateArgs: CreateOneTransactionArgs,
  ): Promise<Transaction | void> {
    return await this.prisma.transaction
      .create(transactionCreateArgs)
      .then((transaction) => {
        return transaction;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  async findMany(
    transactionFindManyArgs: TransactionFindManyArgs,
  ): Promise<Transaction[] | void> {
    return this.prisma.transaction
      .findMany(transactionFindManyArgs)
      .then((transactions) => {
        return transactions;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  async findOne(
    transactionFindUniqueArgs: TransactionFindUniqueArgs,
  ): Promise<Transaction | void> {
    return await this.prisma.transaction
      .findUnique(transactionFindUniqueArgs)
      .then((transaction) => {
        return transaction;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  async update(
    transactionUpdateOneArgs: TransactionUpdateOneArgs,
  ): Promise<Transaction | void> {
    return this.prisma.transaction
      .update(transactionUpdateOneArgs)
      .then((transaction) => {
        return transaction;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  // async remove(transactionId: number): Promise<boolean | void>{
  //   return await this.prisma.transaction
  //     .delete({
  //       where: { id: transactionId },
  //     })
  //     .then(() => {
  //       return true;
  //     })
  //     .catch((err) => {
  //       throwPrismaError(err);
  //     });
  // }
}
