import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import { Account } from 'src/@generated';
import { AccountFindManyArgs } from './dto/account-find-many.args';
import { AccountFindUniqueArgs } from './dto/account-find-one.args';
import { AccountUpdateOneArgs } from './dto/account-update-one.args';
import { AccountFindFirstArgs } from './dto/account-find-first.args';
import {
  AccountBalanceByCustomPeriodArgs,
  AccountBalanceByCustomPeriodQuery,
} from './dto/get-account-balance-by-custom-period.args';
import { AccountController } from './account.controller';
import {
  UserFindManyOrderByAccountBalance,
  UserFindManyOrderByAccountBalanceArgs,
} from './dto/user-find-many-order-by-account-balance.args';

interface AccountSelect {
  select: Prisma.AccountSelect;
}

@Resolver(() => Account)
export class AccountResolver {
  constructor(private readonly accountController: AccountController) {}

  // @Mutation(() => Account, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async accountCreateOne(
  //   @Args('accountCreateArgs') accountCreateArgs: AccountCreateArgs,
  //   @Relations() relations: AccountSelect
  // ): Promise<Account | void> {
  //   accountCreateArgs.select = relations.select;
  //   return await this.accountController.createOne(accountCreateArgs);
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
    return this.accountController.findMany(accountFindManyArgs);
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
    return this.accountController.findOne(accountFindUniqueArgs);
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
    return this.accountController.findFirst(accountFindFirstArgs);
  }

  @Mutation(() => Account, { description: 'Deskripsinya ada disini loh' })
  accountUpdateOne(
    @Args('accountUpdateOneArgs') accountUpdateOneArgs: AccountUpdateOneArgs,
    @Relations() relations: AccountSelect,
  ) {
    accountUpdateOneArgs.select = relations.select;
    return this.accountController.updateOne(accountUpdateOneArgs);
  }

  // @Mutation(() => Boolean, {
  //   nullable: true,
  //   description: 'Datanya benar2 terhapus dari db',
  // })
  // accountRemove(@Args('accountId') accountId: number) {
  //   return this.accountController.remove(accountId);
  // }

  @Query(() => Float)
  async getAccountTotalBalance(@Args('accountId') accountId: number) {
    return await this.accountController.getAccountTotalBalance(accountId);
  }

  @Query(() => [UserFindManyOrderByAccountBalance])
  async userFindManyOrderByAccountBalance(
    @Args('userFindManyOrderByAccountBalanceArgs')
    userFindManyOrderByAccountBalanceArgs: UserFindManyOrderByAccountBalanceArgs,
  ) {
    return await this.accountController.userFindManyOrderByAccountBalance(
      userFindManyOrderByAccountBalanceArgs,
    );
  }

  @Query(() => [AccountBalanceByCustomPeriodQuery])
  async getAccountBalanceByCustomPeriod(
    @Args('accountBalanceByCustomPeriodArgs')
    accountBalanceByCustomPeriodArgs: AccountBalanceByCustomPeriodArgs,
  ): Promise<AccountBalanceByCustomPeriodQuery[] | void> {
    return await this.accountController.getAccountBalanceByCustomPeriod(
      accountBalanceByCustomPeriodArgs,
    );
  }
}
