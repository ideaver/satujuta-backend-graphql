// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateAccount,
  CreateManyAccountArgs,
  CreateOneAccountArgs,
  DeleteManyAccountArgs,
  DeleteOneAccountArgs,
  FindFirstAccountArgs,
  FindManyAccountArgs,
  FindUniqueAccountArgs,
  Account,
  AccountAggregateArgs,
  UpdateManyAccountArgs,
  UpdateOneAccountArgs,
} from 'src/@generated';
import { AccountController } from './account.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';
import {
  UserFindManyOrderByAccountBalance,
  UserFindManyOrderByAccountBalanceArgs,
} from './dto/user-find-many-order-by-account-balance.args';
import {
  AccountBalanceByCustomPeriodArgs,
  AccountBalanceByCustomPeriodQuery,
  AccountBalanceOfPlatformByCustomPeriod,
} from './dto/get-account-balance-by-custom-period.args';

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
  //   @Args()
  //   accountCreateArgs: CreateOneAccountArgs,
  //   @Relations() relations: AccountSelect,
  // ): Promise<Account | void> {
  //   return await this.accountController.createOne({
  //     ...accountCreateArgs,
  //     select: relations.select,
  //   });
  // }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async accountCreateMany(
    @Args()
    createManyAccountArgs: CreateManyAccountArgs,
  ) {
    return await this.accountController.createMany(createManyAccountArgs);
  }

  @Query(() => Account, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  accountFindOne(
    @Args()
    accountFindUniqueArgs: FindUniqueAccountArgs,
    @Relations() relations: AccountSelect,
  ): Promise<Account | void> {
    return this.accountController.findOne({
      ...accountFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [Account], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  accountFindMany(
    @Args() accountFindManyArgs: FindManyAccountArgs,
    @Relations() relations: AccountSelect,
  ) {
    return this.accountController.findMany({
      ...accountFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => Account, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  accountFindFirst(
    @Args()
    findFirstAccountArgs: FindFirstAccountArgs,
    @Relations() relations: AccountSelect,
  ): Promise<Account | void> {
    return this.accountController.findFirst({
      ...findFirstAccountArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Account, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async accountUpdateOne(
    @Args() accountUpdateOneArgs: UpdateOneAccountArgs,
    @Relations() relations: AccountSelect,
  ) {
    return this.accountController.updateOne({
      ...replaceNullWithUndefined(accountUpdateOneArgs),
      select: relations.select,
    });
  }

  // @Mutation(() => Account, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async accountUpdateMany(
  //   @Args() updateManyAccountArgs: UpdateManyAccountArgs,
  // ) {
  //   return this.accountController.updateMany(updateManyAccountArgs);
  // }

  // @Mutation(() => Boolean, {
  //   nullable: false,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async accountDelete(
  //   @Args() deleteOneAccountArgs: DeleteOneAccountArgs,
  //   @Relations() relations: AccountSelect,
  // ) {
  //   return this.accountController.delete({
  //     ...deleteOneAccountArgs,
  //     select: relations.select,
  //   });
  // }

  // @Mutation(() => Boolean, {
  //   nullable: false,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async accountDeleteMany(
  //   @Args() deleteManyAccountArgs: DeleteManyAccountArgs,
  // ) {
  //   return this.accountController.deleteMany(deleteManyAccountArgs);
  // }

  @Query(() => AggregateAccount, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  accountAggregate(@Args() accountAggregateArgs: AccountAggregateArgs) {
    return this.accountController.aggregate(accountAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  accountCount(@Args() accountCountAggregateInput: FindManyAccountArgs) {
    return this.accountController.count(accountCountAggregateInput);
  }

  @Query(() => Float)
  async getAccountTotalBalance(@Args('accountId') accountId: number) {
    return await this.accountController.getAccountTotalBalance({
      accountId: accountId,
    });
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

  @Query(() => [AccountBalanceByCustomPeriodQuery])
  async getAccountBalanceOfPlatformByCustomPeriod(
    @Args('accountBalanceOfPlatformByCustomPeriod')
    accountBalanceOfPlatformByCustomPeriod: AccountBalanceOfPlatformByCustomPeriod,
  ): Promise<AccountBalanceByCustomPeriodQuery[] | void> {
    return await this.accountController.getAccountBalanceOfPlatformByCustomPeriod(
      accountBalanceOfPlatformByCustomPeriod,
    );
  }

  @Query(() => Float)
  async getAccountBalanceOfUserPointFromUserId(
    @Args('userId')
    userId: string,
  ): Promise<number> {
    return await this.accountController.getAccountBalanceOfUserPointFromUserId(
      userId,
    );
  }

  @Query(() => Float)
  async transactionFindManyByUserPointFromUserId(
    @Args('userId')
    userId: string,
    @Args('skip') skip: number,
    @Args('take') take: number,
  ): Promise<number> {
    return await this.accountController.transactionFindManyByUserPointFromUserId(
      userId,
      skip,
      take,
    );
  }
}
