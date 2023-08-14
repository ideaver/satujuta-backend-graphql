import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { throwPrismaError } from 'src/utils/throw-prisma-error.function';
import { CreateOnePointTransactionArgs, PointTransaction } from 'src/@generated';
import { PointTransactionFindManyArgs } from './dto/point-transaction-find-many.args';
import { PointTransactionFindUniqueArgs } from './dto/point-transaction-find-one.args';
import { PointTransactionUpdateOneArgs } from './dto/point-transaction-update-one.args';

@Injectable()
export class PointTransactionService {
  constructor(private prisma: PrismaService) {}

  async createOne(pointTransactionCreateArgs: CreateOnePointTransactionArgs): Promise<PointTransaction | void> {

    return await this.prisma.pointTransaction
      .create(pointTransactionCreateArgs)
      .then((pointTransaction) => {
        return pointTransaction;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  async findMany(pointTransactionFindManyArgs: PointTransactionFindManyArgs) {
    return this.prisma.pointTransaction
      .findMany(pointTransactionFindManyArgs)
      .then((pointTransactions) => {
        return pointTransactions;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  async findOne(pointTransactionFindUniqueArgs: PointTransactionFindUniqueArgs): Promise<PointTransaction | void> {
    return await this.prisma.pointTransaction
      .findUnique(pointTransactionFindUniqueArgs)
      .then((pointTransaction) => {
        return pointTransaction;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  async update(pointTransactionUpdateOneArgs: PointTransactionUpdateOneArgs): Promise<PointTransaction | void> {
    return this.prisma.pointTransaction
      .update(pointTransactionUpdateOneArgs)
      .then((pointTransaction) => {
        return pointTransaction;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  async remove(pointTransactionId: number): Promise<boolean | void>{
    return await this.prisma.pointTransaction
      .delete({
        where: { id: pointTransactionId },
      })
      .then(() => {
        return true;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }
}