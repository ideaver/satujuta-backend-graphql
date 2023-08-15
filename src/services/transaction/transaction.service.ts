import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { throwPrismaError } from 'src/utils/throw-prisma-error.function';
import { CreateOneTransactionArgs, Transaction } from 'src/@generated';
import { TransactionFindManyArgs } from './dto/transaction-find-many.args';
import { TransactionFindUniqueArgs } from './dto/transaction-find-one.args';
import { TransactionUpdateOneArgs } from './dto/transaction-update-one.args';
import {
  AccountMonthlyBalanceArgs,
  AccountMonthlyBalanceQuery,
} from './dto/get-account-monthly-balance.args';

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

  async findMany(transactionFindManyArgs: TransactionFindManyArgs) {
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

  async getMonthlyBalances({
    accountId,
    year,
  }: AccountMonthlyBalanceArgs): Promise<AccountMonthlyBalanceQuery[]> {
    const accountMonthlyBalances: AccountMonthlyBalanceQuery[] = [];

    try {
      const accounts = await this.prisma.account.findMany({
        where: { id: accountId },
        include: {
          transactionOrigins: {
            include: {
              payment: true,
            },
          },
          transactionDestination: {
            include: {
              payment: true,
            },
          },
        },
      });

      for (const account of accounts) {
        const monthlyBalanceQuery: AccountMonthlyBalanceQuery = {
          month: new Date().toLocaleString('en-us', { month: 'long' }), // You can adjust this to get the specific month
          total_balance: account.balance,
        };

        for (const transaction of account.transactionOrigins) {
          if (transaction.payment) {
            monthlyBalanceQuery.total_balance -= transaction.amount;
          }
        }

        for (const transaction of account.transactionDestination) {
          if (transaction.payment) {
            monthlyBalanceQuery.total_balance += transaction.amount;
          }
        }

        accountMonthlyBalances.push(monthlyBalanceQuery);
      }
    } catch (error) {
      throw new Error(`Error retrieving account monthly balances: ${error}`);
    }

    return accountMonthlyBalances;
  }
}
