import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class TransactionService {
  constructor(private prisma: PrismaService) {}

  async createOne(transactionCreateArgs: Prisma.TransactionCreateArgs) {
    try {
      return await this.prisma.transaction.create(transactionCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(
    transactionCreateManyArgs: Prisma.TransactionCreateManyArgs,
  ) {
    try {
      return await this.prisma.transaction.createMany(
        transactionCreateManyArgs,
      );
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(transactionFindUniqueArgs: Prisma.TransactionFindUniqueArgs) {
    try {
      return await this.prisma.transaction.findUnique(
        transactionFindUniqueArgs,
      );
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(transactionFindManyArgs: Prisma.TransactionFindManyArgs) {
    try {
      return await this.prisma.transaction.findMany(transactionFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(transactionFindFirstArgs: Prisma.TransactionFindFirstArgs) {
    try {
      return await this.prisma.transaction.findFirst(transactionFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(transactionUpdateOneArgs: Prisma.TransactionUpdateArgs) {
    try {
      return await this.prisma.transaction.update(transactionUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(
    transactionUpdateManyArgs: Prisma.TransactionUpdateManyArgs,
  ) {
    try {
      return await this.prisma.transaction.updateMany(
        transactionUpdateManyArgs,
      );
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(transactionDeleteArgs: Prisma.TransactionDeleteArgs) {
    try {
      await this.prisma.transaction.delete(transactionDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(
    transactionDeleteManyArgs: Prisma.TransactionDeleteManyArgs,
  ) {
    try {
      await this.prisma.transaction.deleteMany(transactionDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(transactionAggregateArgs: Prisma.TransactionAggregateArgs) {
    try {
      return await this.prisma.transaction.aggregate(transactionAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(transactionCountArgs: Prisma.TransactionCountArgs) {
    try {
      return await this.prisma.transaction.count(transactionCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
