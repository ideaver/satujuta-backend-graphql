import { AccountService } from './account.service';
import {
  AccountCategory,
  Transaction,
  TransactionStatus,
} from '@prisma/client';
import { AccountFindManyArgs } from './dto/account-find-many.args';
import { AccountFindUniqueArgs } from './dto/account-find-one.args';
import { AccountUpdateOneArgs } from './dto/account-update-one.args';
import { AccountFindFirstArgs } from './dto/account-find-first.args';
import {
  AccountBalanceByCustomPeriodArgs,
  AccountBalanceByCustomPeriodQuery,
} from './dto/get-account-balance-by-custom-period.args';
import { Period } from 'src/model/period.enum';
import { TransactionService } from '../transaction/transaction.service';
import { Injectable, Logger } from '@nestjs/common';
import { UserController } from '../user/user.controller';
import { User } from 'src/@generated';

@Injectable()
export class AccountController {
  constructor(
    private readonly accountService: AccountService,
    private readonly transactionService: TransactionService,
    private readonly userController: UserController,
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

  async userFindManyOrderByAccountOfComission() {
    const Users: User[] | void = await this.userController.findMany({
      select: { accounts: { select: { id: true, accountCategory: true } } },
      where: {
        accounts: {
          some: {
            AND: [
              { accountCategory: { equals: AccountCategory.COMISSION } },
              {
                OR: [
                  { transactionOrigins: { some: {} } },
                  { transactionDestination: { some: {} } },
                ],
              },
            ],
          },
        },
      },
    });

    // this.logger.log(Users);

    if (Users) {
      const userBalances: { user: User; totalComissionBalance: number }[] = [];

      for (const user of Users) {
        const commissionAccount = user.accounts.find(
          (account) => account.accountCategory === AccountCategory.COMISSION,
        );

        if (commissionAccount) {
          const totalBalance = await this.getAccountTotalBalance(
            commissionAccount.id,
          );
          userBalances.push({ user, totalComissionBalance: totalBalance });
        }
      }

      // Sort the userBalances array in descending order based on balance
      userBalances.sort(
        (a, b) => b.totalComissionBalance - a.totalComissionBalance,
      );

      this.logger.log(userBalances);

      return userBalances.toString();
    }

    return 'well';
  }

  async getAccountTotalBalance(accountId: number) {
    const transactions = await this.transactionService.findMany({
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
        this.getNextPeriodDate(currentDate, period),
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

      currentDate = this.getNextPeriodDate(currentDate, period);
    }

    return balances;
  }

  async getTransactions(accountId: number, startDate: Date, endDate: Date) {
    return await this.transactionService.findMany({
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

  getNextPeriodDate(currentDate: Date, period: Period): Date {
    const nextDate = new Date(currentDate);

    if (period === Period.WEEKLY) {
      nextDate.setDate(currentDate.getDate() + 7);
    } else if (period === Period.MONTHLY) {
      nextDate.setMonth(currentDate.getMonth() + 1);
    } else if (period === Period.YEARLY) {
      nextDate.setFullYear(currentDate.getFullYear() + 1);
    }

    return nextDate;
  }
}
