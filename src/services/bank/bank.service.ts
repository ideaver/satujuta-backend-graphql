import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class BankService {
  constructor(private prisma: PrismaService) {}

  async createOne(bankCreateArgs: Prisma.BankCreateArgs) {
    try {
      return await this.prisma.bank.create(bankCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(bankCreateManyArgs: Prisma.BankCreateManyArgs) {
    try {
      return await this.prisma.bank.createMany(bankCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(bankFindUniqueArgs: Prisma.BankFindUniqueArgs) {
    try {
      return await this.prisma.bank.findUnique(bankFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(bankFindManyArgs: Prisma.BankFindManyArgs) {
    try {
      return await this.prisma.bank.findMany(bankFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(bankFindFirstArgs: Prisma.BankFindFirstArgs) {
    try {
      return await this.prisma.bank.findFirst(bankFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(bankUpdateOneArgs: Prisma.BankUpdateArgs) {
    try {
      return await this.prisma.bank.update(bankUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(bankUpdateManyArgs: Prisma.BankUpdateManyArgs) {
    try {
      return await this.prisma.bank.updateMany(bankUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(bankDeleteArgs: Prisma.BankDeleteArgs) {
    try {
      await this.prisma.bank.delete(bankDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(bankDeleteManyArgs: Prisma.BankDeleteManyArgs) {
    try {
      await this.prisma.bank.deleteMany(bankDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(bankAggregateArgs: Prisma.BankAggregateArgs) {
    try {
      return await this.prisma.bank.aggregate(bankAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(bankCountArgs: Prisma.BankCountArgs) {
    try {
      return await this.prisma.bank.count(bankCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
