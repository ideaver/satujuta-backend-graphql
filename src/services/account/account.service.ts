import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { throwPrismaError } from 'src/utils/throw-prisma-error.function';
import { CreateOneAccountArgs, Account } from 'src/@generated';
import { AccountFindManyArgs } from './dto/account-find-many.args';
import { AccountFindUniqueArgs } from './dto/account-find-one.args';
import { AccountUpdateOneArgs } from './dto/account-update-one.args';

@Injectable()
export class AccountService {
  constructor(private prisma: PrismaService) {}

  async createOne(accountCreateArgs: CreateOneAccountArgs): Promise<Account | void> {

    return await this.prisma.account
      .create(accountCreateArgs)
      .then((account) => {
        return account;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  async findMany(accountFindManyArgs: AccountFindManyArgs) {
    return this.prisma.account
      .findMany(accountFindManyArgs)
      .then((accounts) => {
        return accounts;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  async findOne(accountFindUniqueArgs: AccountFindUniqueArgs): Promise<Account | void> {
    return await this.prisma.account
      .findUnique(accountFindUniqueArgs)
      .then((account) => {
        return account;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  async update(accountUpdateOneArgs: AccountUpdateOneArgs): Promise<Account | void> {
    return this.prisma.account
      .update(accountUpdateOneArgs)
      .then((account) => {
        return account;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  async remove(accountId: number): Promise<boolean | void>{
    return await this.prisma.account
      .delete({
        where: { id: accountId },
      })
      .then(() => {
        return true;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }
}
