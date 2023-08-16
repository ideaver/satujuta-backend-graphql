import { Resolver, Query, Mutation, Args, Info } from '@nestjs/graphql';
import { AccountService } from './account.service';
import { Prisma, TransactionStatus } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import { Account } from 'src/@generated';
import { AccountCreateArgs } from './dto/account-create-one.args';
import { AccountFindManyArgs } from './dto/account-find-many.args';
import { AccountFindUniqueArgs } from './dto/account-find-one.args';
import { AccountUpdateOneArgs } from './dto/account-update-one.args';
import { AccountFindFirstArgs } from './dto/account-find-first.args';
import {
  AccountBalanceByCustomPeriodArgs,
  AccountBalanceByCustomPeriodQuery,
} from '../transaction/dto/get-account-balance-by-custom-period.args';
import { Period } from 'src/model/period.enum';
import { TransactionService } from '../transaction/transaction.service';

interface AccountSelect {
  select: Prisma.AccountSelect;
}

@Resolver(() => Account)
export class AccountResolver {
  constructor(
    private readonly accountService: AccountService,
    private readonly transactionService: TransactionService,
  ) {}

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

  @Query(() => [Account], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  accountFindMany(
    @Args('accountFindManyArgs') accountFindManyArgs: AccountFindManyArgs,
    @Relations() relations: AccountSelect,
  ) {
    //Auto implement prisma select from graphql query info
    accountFindManyArgs.select = relations.select;
    return this.accountService.findMany(accountFindManyArgs);
  }

  @Query(() => Account, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  accountFindOne(
    @Args('accountFindUniqueArgs')
    accountFindUniqueArgs: AccountFindUniqueArgs,
    @Relations() relations: AccountSelect,
  ) {
    //Auto implement prisma select from graphql query info
    accountFindUniqueArgs.select = relations.select;
    return this.accountService.findOne(accountFindUniqueArgs);
  }

  @Query(() => Account, {
    nullable: true,
    description:
      'Bisa juga untuk ambil balance terakhir dari akun tertentu milik user',
  })
  accountFindFirst(
    @Args('accountFindFirstArgs')
    accountFindFirstArgs: AccountFindFirstArgs,
    @Relations() relations: AccountSelect,
  ) {
    //Auto implement prisma select from graphql query info
    accountFindFirstArgs.select = relations.select;
    return this.accountService.findFirst(accountFindFirstArgs);
  }

  @Mutation(() => Account, { description: 'Deskripsinya ada disini loh' })
  accountUpdateOne(
    @Args('accountUpdateOneArgs') accountUpdateOneArgs: AccountUpdateOneArgs,
    @Relations() relations: AccountSelect,
  ) {
    accountUpdateOneArgs.select = relations.select;
    return this.accountService.update(accountUpdateOneArgs);
  }

  // @Mutation(() => Boolean, {
  //   nullable: true,
  //   description: 'Datanya benar2 terhapus dari db',
  // })
  // accountRemove(@Args('accountId') accountId: number) {
  //   return this.accountService.remove(accountId);
  // }

  @Query(() => [AccountBalanceByCustomPeriodQuery])
  async getMonthlyAccountBalances(
    @Args('accountBalanceByCustomPeriodArgs')
    { accountId, period, start, end }: AccountBalanceByCustomPeriodArgs,
  ): Promise<AccountBalanceByCustomPeriodQuery[] | void> {
    const balances: AccountBalanceByCustomPeriodQuery[] = [];

    let currentDate = new Date(start);

    while (currentDate <= end) {
      const transactions = await this.getTransactions(
        accountId,
        currentDate,
        this.getNextPeriodDate(currentDate, period),
      );

      const formattedDate = currentDate.toLocaleDateString();

      const monthlyBalance = transactions.reduce((balance, transaction) => {
        if (transaction.fromAccountId === accountId) {
          balance -= transaction.amount;
        } else if (transaction.toAccountId === accountId) {
          balance += transaction.amount;
        }
        return balance;
      }, 0);

      balances.push({
        period: formattedDate,
        total_balance: monthlyBalance,
      });

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
