import { Injectable } from '@nestjs/common';
import {
  AccountCategory,
  Prisma,
  Transaction,
  TransactionStatus,
  UserRole,
  UserStatus,
} from '@prisma/client';
import { AccountService } from './account.service';
import {
  UserFindManyOrderByAccountBalance,
  UserFindManyOrderByAccountBalanceArgs,
} from './dto/user-find-many-order-by-account-balance.args';
import { TransactionController } from '../transaction/transaction.controller';
import { getNextPeriodDate } from 'src/utils/get-next-period.function';
import {
  AccountBalanceOfPlatformByCustomPeriod,
  AccountBalanceByCustomPeriodQuery,
  AccountBalanceByCustomPeriodArgs,
} from './dto/get-account-balance-by-custom-period.args';
import { Account, User } from 'src/@generated';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { PointDistribution } from './dto/point-distribution.output';
import { UserController } from '../user/user.controller';

@Injectable()
export class AccountController {
  constructor(
    private readonly accountService: AccountService,
    private readonly transactionController: TransactionController,
    private readonly userController: UserController,
  ) {}

  async createOne(accountCreateArgs: Prisma.AccountCreateArgs) {
    return await this.accountService.createOne(accountCreateArgs);
  }

  async createMany(accountCreateManyArgs: Prisma.AccountCreateManyArgs) {
    return await this.accountService.createMany(accountCreateManyArgs);
  }

  async findOne(
    accountFindUniqueArgs: Prisma.AccountFindUniqueArgs,
  ): Promise<Account> {
    return await this.accountService.findOne(accountFindUniqueArgs);
  }

  async findMany(accountFindManyArgs: Prisma.AccountFindManyArgs) {
    return await this.accountService.findMany(accountFindManyArgs);
  }

  async findFirst(accountFindFirstArgs: Prisma.AccountFindFirstArgs) {
    return await this.accountService.findFirst(accountFindFirstArgs);
  }

  async updateOne(accountUpdateOneArgs: Prisma.AccountUpdateArgs) {
    return await this.accountService.updateOne(accountUpdateOneArgs);
  }

  async updateMany(accountUpdateManyArgs: Prisma.AccountUpdateManyArgs) {
    return await this.accountService.updateMany(accountUpdateManyArgs);
  }

  async delete(accountDeleteArgs: Prisma.AccountDeleteArgs) {
    return await this.accountService.delete(accountDeleteArgs);
  }

  async deleteMany(accountDeleteManyArgs: Prisma.AccountDeleteManyArgs) {
    return await this.accountService.deleteMany(accountDeleteManyArgs);
  }

  async aggregate(accountAggregateArgs: Prisma.AccountAggregateArgs) {
    return await this.accountService.aggregate(accountAggregateArgs);
  }

  async count(accountCountArgs: Prisma.AccountCountArgs) {
    return await this.accountService.count(accountCountArgs);
  }

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
    } else {
      throw new IGraphQLError({ code: 120001 });
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
      where: { accountCategory: { equals: AccountCategory.PLATFORM } },
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

  async getAccountIdOfPlatformPoint() {
    const res = await this.findFirst({
      take: 1,
      where: {
        user: { userRole: { equals: UserRole.SUPERUSER } },
        accountCategory: { equals: AccountCategory.POINT },
      },
    });

    if (!res) {
      throw new IGraphQLError({ err: 'Account of platform point not found' });
    }
    return res;
  }

  async getAccountIdOfUserPointFromUserId(userId: string) {
    const res = await this.findFirst({
      take: 1,
      where: { user: { id: { equals: userId } } },
    });

    if (!res) {
      throw new IGraphQLError({ err: 'Account of user point not found' });
    }
    return res;
  }

  //get all transaction of user point
  async transactionFindManyByUserPointFromUserId(
    userId: string,
    skip: number,
    take: number,
  ) {
    const res = await this.getAccountIdOfUserPointFromUserId(userId);
    return await this.transactionController.findMany({
      skip: skip,
      take: take,
      where: {
        OR: [
          { fromAccountId: { equals: res.id } },
          { toAccountId: { equals: res.id } },
        ],
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async getUserPointDistribution(): Promise<PointDistribution[]> {
    const pointDistribution = [
      { label: 'Over 1,000 points', count: 0 },
      { label: 'Between 100 and 1,000 points', count: 0 },
      { label: 'Between 50 and 100 points', count: 0 },
      { label: 'Between 30 and 50 points', count: 0 },
      { label: '0 points', count: 0 },
    ];

    const users: User[] = await this.userController.findMany({
      where: { status: { equals: UserStatus.ACTIVE } },
      include: {
        accounts: {
          where: {
            accountCategory: AccountCategory.POINT,
          },
          include: {
            transactionDestination: {
              where: {
                status: TransactionStatus.COMPLETED,
              },
            },
          },
        },
      },
    });

    users.forEach((user) => {
      let totalPoints = 0;

      user.accounts.forEach((account) => {
        account.transactionDestination.forEach((transaction) => {
          totalPoints += transaction.amount; // Add points for incoming transactions
        });
      });

      if (totalPoints > 1000) {
        pointDistribution[0].count++;
      } else if (totalPoints >= 100 && totalPoints <= 1000) {
        pointDistribution[1].count++;
      } else if (totalPoints >= 50 && totalPoints < 100) {
        pointDistribution[2].count++;
      } else if (totalPoints >= 30 && totalPoints < 50) {
        pointDistribution[3].count++;
      } else {
        pointDistribution[4].count++;
      }
    });

    return pointDistribution;
  }

  //get account balance of user point
  async getAccountBalanceOfUserPointFromUserId(userId: string) {
    const res = await this.getAccountIdOfUserPointFromUserId(userId);
    return this.getAccountTotalBalance({ accountId: res.id });
  }
}
