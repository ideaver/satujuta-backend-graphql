import { AccountService } from './account.service';
import { Transaction, TransactionStatus } from '@prisma/client';
import { AccountFindManyArgs } from './dto/account-find-many.args';
import { AccountFindUniqueArgs } from './dto/account-find-one.args';
import { AccountUpdateOneArgs } from './dto/account-update-one.args';
import { AccountFindFirstArgs } from './dto/account-find-first.args';
import {
  AccountBalanceByCustomPeriodArgs,
  AccountBalanceByCustomPeriodQuery,
  AccountBalanceOfPlatformByCustomPeriod,
} from './dto/get-account-balance-by-custom-period.args';
import { Period } from 'src/model/period.enum';
import { Injectable, Logger } from '@nestjs/common';
import { Account, AccountCategory } from 'src/@generated';
import {
  UserFindManyOrderByAccountBalance,
  UserFindManyOrderByAccountBalanceArgs,
} from './dto/user-find-many-order-by-account-balance.args';
import { getNextPeriodDate } from 'src/utils/get-next-period.function';
import { get } from 'node:http';
import { TransactionController } from '../transaction/transaction.controller';

@Injectable()
export class AccountController {
  constructor(
    private readonly accountService: AccountService,
    private readonly transactionController: TransactionController,
  ) {}

  private readonly logger = new Logger(AccountController.name);

  // @Mutation(() => Account, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async accountCreateOne(
  //   @Args('accountCreateArgs') accountCreateArgs: AccountCreateArgs,
  //   @Relations() relations: AccountSelect
  // ): Promise<Account | void> {
  //   accountCreateArgs.select = relations.select;
  //   return await this.accountService.createOne(accountCreateArgs);
  // }

  findMany(accountFindManyArgs: AccountFindManyArgs) {
    return this.accountService.findMany(accountFindManyArgs);
  }

  findOne(accountFindUniqueArgs: AccountFindUniqueArgs) {
    return this.accountService.findOne(accountFindUniqueArgs);
  }

  findFirst(accountFindFirstArgs: AccountFindFirstArgs) {
    return this.accountService.findFirst(accountFindFirstArgs);
  }

  updateOne(accountUpdateOneArgs: AccountUpdateOneArgs) {
    const { name, accountNumber } = accountUpdateOneArgs.data;

    if (name?.set === null) {
      accountUpdateOneArgs.data.name = undefined;
    }

    if (accountNumber?.set === null) {
      accountUpdateOneArgs.data.accountNumber = undefined;
    }

    return this.accountService.update(accountUpdateOneArgs);
  }

  // @Mutation(() => Boolean, {
  //   nullable: true,
  //   description: 'Datanya benar2 terhapus dari db',
  // })
  // accountRemove(@Args('accountId') accountId: number) {
  //   return this.accountService.remove(accountId);
  // }

  async userFindManyOrderByAccountBalance(
    userFindManyOrderByAccountBalanceArgs: UserFindManyOrderByAccountBalanceArgs,
  ) {
    const accounts: Account[] | void = await this.findMany({
      select: {
        id: true,
        accountCategory: true,
        user: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            avatarUrl: true,
          },
        },
      },
      where: {
        accountCategory: {
          equals: userFindManyOrderByAccountBalanceArgs.accountCategory,
        },
        OR: [
          { transactionOrigins: { some: {} } },
          { transactionDestination: { some: {} } },
        ],
      },
    });

    if (accounts) {
      const userBalances: UserFindManyOrderByAccountBalance[] = [];

      for (const account of accounts) {
        const totalBalance = await this.getAccountTotalBalance({
          accountId: account.id,
        });
        userBalances.push({
          user: account.user,
          totalBalance: totalBalance,
        });
      }

      // Sort the userBalances array in descending order based on balance
      userBalances.sort((a, b) => b.totalBalance - a.totalBalance);

      return userBalances;
    }

    return [];
  }

  async getAccountTotalBalanceByCategoryAndUserId({
    userId,
    accountCategory,
  }: {
    userId: string;
    accountCategory: AccountCategory;
  }): Promise<number> {
    const accounts = await this.findFirst({
      where: {
        userId: { equals: userId },
        accountCategory: { equals: accountCategory },
      },
      select: {
        id: true,
      },
    });

    if (accounts) {
      return this.getAccountTotalBalance({ accountId: accounts.id });
    }
  }

  async getAccountTotalBalance({ accountId }: { accountId: number }) {
    const transactions = await this.transactionController.findMany({
      where: {
        OR: [
          {
            fromAccountId: { equals: accountId },
            status: { equals: TransactionStatus.COMPLETED },
          },
          {
            toAccountId: { equals: accountId },
            status: { equals: TransactionStatus.COMPLETED },
          },
        ],
      },
      select: {
        amount: true,
        fromAccountId: true,
        toAccountId: true,
      },
    });

    let totalBalance = 0;
    if (transactions) {
      for (const transaction of transactions) {
        if (transaction.fromAccountId === accountId) {
          totalBalance -= transaction.amount;
        } else if (transaction.toAccountId === accountId) {
          totalBalance += transaction.amount;
        }
      }

      return totalBalance;
    }
  }

  async getAccountBalanceOfPlatformByCustomPeriod({
    period,
    start,
    end,
  }: AccountBalanceOfPlatformByCustomPeriod): Promise<
    AccountBalanceByCustomPeriodQuery[] | void
  > {
    const getPlatformAccount = await this.findFirst({
      select: { id: true },
      take: 1,
      where: { accountCategory: { equals: 'PLATFORM' } },
    });

    if (getPlatformAccount) {
      return this.getAccountBalanceByCustomPeriod({
        accountId: getPlatformAccount.id,
        start,
        end,
        period,
      });
    }
  }

  async getAccountBalanceByCustomPeriod({
    accountId,
    period,
    start,
    end,
  }: AccountBalanceByCustomPeriodArgs): Promise<
    AccountBalanceByCustomPeriodQuery[] | void
  > {
    const balances: AccountBalanceByCustomPeriodQuery[] = [];

    let currentDate = new Date(start);

    while (currentDate <= end) {
      const transactions = await this.getTransactions(
        accountId,
        currentDate,
        getNextPeriodDate(currentDate, period),
      );

      if (transactions) {
        const formattedDate = currentDate.toLocaleDateString();

        const monthlyBalance = this.calculateMonthlyBalance(
          transactions,
          accountId,
        );

        balances.push({
          period: formattedDate,
          totalBalance: monthlyBalance,
        });
      }

      currentDate = getNextPeriodDate(currentDate, period);
    }

    return balances;
  }

  async getTransactions(accountId: number, startDate: Date, endDate: Date) {
    return await this.transactionController.findMany({
      where: {
        OR: [
          {
            fromAccountId: { equals: accountId },
            createdAt: { gte: startDate, lt: endDate },
            status: { equals: TransactionStatus.COMPLETED },
          },
          {
            toAccountId: { equals: accountId },
            createdAt: { gte: startDate, lt: endDate },
            status: { equals: TransactionStatus.COMPLETED },
          },
        ],
      },
      select: {
        amount: true,
        fromAccountId: true,
        toAccountId: true,
        createdAt: true,
      },
    });
  }

  calculateMonthlyBalance(
    transactions: Transaction[],
    accountId: number,
  ): number {
    let monthlyBalance = 0;

    for (const transaction of transactions) {
      if (transaction.fromAccountId === accountId) {
        monthlyBalance -= transaction.amount;
      } else if (transaction.toAccountId === accountId) {
        monthlyBalance += transaction.amount;
      }
    }

    return monthlyBalance;
  }
}
