import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateOneAccountArgs, Account } from 'src/@generated';
import { AccountFindManyArgs } from '../../src/services/account/dto/account-find-many.args';
import { AccountFindUniqueArgs } from '../../src/services/account/dto/account-find-one.args';
import { AccountUpdateOneArgs } from '../../src/services/account/dto/account-update-one.args';
import { AccountFindFirstArgs } from '../../src/services/account/dto/account-find-first.args';
import {
  AccountBalanceByCustomPeriodArgs,
  AccountBalanceByCustomPeriodQuery,
} from '../../src/services/account/dto/get-account-balance-by-custom-period.args';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';

@Injectable()
export class AccountService {
  constructor(private prisma: PrismaService) {}

  async createOne(
    accountCreateArgs: CreateOneAccountArgs,
  ): Promise<Account | void> {
    return await this.prisma.account
      .create(accountCreateArgs)
      .then((account) => {
        return account;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async findMany(accountFindManyArgs: AccountFindManyArgs) {
    return await this.prisma.account
      .findMany(accountFindManyArgs)
      .then((accounts) => {
        return accounts;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  //to get current some account balance
  async findFirst(
    accountFindFirstArgs: AccountFindFirstArgs,
  ): Promise<Account | void> {
    return await this.prisma.account
      .findFirst(accountFindFirstArgs)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async findOne(
    accountFindUniqueArgs: AccountFindUniqueArgs,
  ): Promise<Account | void> {
    return await this.prisma.account
      .findUnique(accountFindUniqueArgs)
      .then((account) => {
        return account;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async update(
    accountUpdateOneArgs: AccountUpdateOneArgs,
  ): Promise<Account | void> {
    return this.prisma.account
      .update(accountUpdateOneArgs)
      .then((account) => {
        return account;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async remove(accountId: number): Promise<boolean | void> {
    return await this.prisma.account
      .delete({
        where: { id: accountId },
      })
      .then(() => {
        return true;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }
}
