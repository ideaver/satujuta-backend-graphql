import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { CreateOneTransactionArgs, Transaction } from 'src/@generated';
import { TransactionFindManyArgs } from './dto/transaction-find-many.args';
import { TransactionFindUniqueArgs } from './dto/transaction-find-one.args';
import { TransactionUpdateOneArgs } from './dto/transaction-update-one.args';
import {
  AccountBalanceByCustomPeriodArgs,
  AccountBalanceByCustomPeriodQuery,
} from '../account/dto/get-account-balance-by-custom-period.args';
import { Prisma } from '@prisma/client';

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
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async findMany(
    transactionFindManyArgs: Prisma.TransactionFindManyArgs,
  ): Promise<Transaction[] | void> {
    return this.prisma.transaction
      .findMany(transactionFindManyArgs)
      .then((transactions) => {
        return transactions;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
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
        throw new IGraphQLError({ code: 123456, err: err });
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
        throw new IGraphQLError({ code: 123456, err: err });
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
  //       throw new IGraphQLError({ code: 123456, err: err });
  //     });
  // }
}
