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
  }: AccountMonthlyBalanceArgs): Promise<AccountMonthlyBalanceQuery[] | void> {
    const yearStart: number = year;
    const yearEnd: number = yearStart + 1;

    return await this.prisma.$queryRaw<AccountMonthlyBalanceQuery[]>`SELECT
    DATE_FORMAT(t.createdAt, '%Y-%m') AS month,
    IF(t.fromAccountId = ${accountId}, t.fromAccountId, t.toAccountId) AS account_id,
    SUM(
      CASE
        WHEN t.fromAccountId = ${accountId} THEN -t.amount
        ELSE t.amount
      END
    ) AS total_balance
  FROM
    Transaction AS t
  JOIN Account AS fa ON t.fromAccountId = fa.id
  JOIN Account AS ta ON t.toAccountId = ta.id
  WHERE
    t.createdAt >= ${yearStart}+'-01-01' AND t.createdAt < ${yearEnd}+'-01-01'
    AND (
      t.fromAccountId = ${accountId} OR t.toAccountId = ${accountId}
    )
  GROUP BY
    month, account_id
  ORDER BY
    month ASC, account_id ASC;
  `.catch((err) => {
      throwPrismaError(err);
    });
  }
}
