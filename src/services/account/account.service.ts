import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class AccountService {
  constructor(private prisma: PrismaService) {}

  async createOne(accountCreateArgs: Prisma.AccountCreateArgs) {
    try {
      return await this.prisma.account.create(accountCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(accountCreateManyArgs: Prisma.AccountCreateManyArgs) {
    try {
      return await this.prisma.account.createMany(accountCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(accountFindUniqueArgs: Prisma.AccountFindUniqueArgs) {
    try {
      return await this.prisma.account.findUnique(accountFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(accountFindManyArgs: Prisma.AccountFindManyArgs) {
    try {
      return await this.prisma.account.findMany(accountFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(accountFindFirstArgs: Prisma.AccountFindFirstArgs) {
    try {
      return await this.prisma.account.findFirst(accountFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(accountUpdateOneArgs: Prisma.AccountUpdateArgs) {
    try {
      return await this.prisma.account.update(accountUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(accountUpdateManyArgs: Prisma.AccountUpdateManyArgs) {
    try {
      return await this.prisma.account.updateMany(accountUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(accountDeleteArgs: Prisma.AccountDeleteArgs) {
    try {
      await this.prisma.account.delete(accountDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(accountDeleteManyArgs: Prisma.AccountDeleteManyArgs) {
    try {
      await this.prisma.account.deleteMany(accountDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(accountAggregateArgs: Prisma.AccountAggregateArgs) {
    try {
      return await this.prisma.account.aggregate(accountAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(accountCountArgs: Prisma.AccountCountArgs) {
    try {
      return await this.prisma.account.count(accountCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
