import { Resolver, Query, Mutation, Args, Info } from '@nestjs/graphql';
import { AccountService } from './account.service';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import { Account } from 'src/@generated';
import { AccountCreateArgs } from './dto/account-create-one.args';
import { AccountFindManyArgs } from './dto/account-find-many.args';
import { AccountFindUniqueArgs } from './dto/account-find-one.args';
import { AccountUpdateOneArgs } from './dto/account-update-one.args';
import { AccountFindFirstArgs } from './dto/account-find-first.args';

interface AccountSelect {
  select: Prisma.AccountSelect;
}

@Resolver(() => Account)
export class AccountResolver {
  constructor(private readonly accountService: AccountService) {}

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
    description: 'Deskripsinya ada disini loh',
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
}
