import { Resolver, Query, Mutation, Args, Info } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import { Transaction } from 'src/@generated';
import { TransactionCreateArgs } from './dto/transaction-create-one.args';
import { TransactionFindManyArgs } from './dto/transaction-find-many.args';
import { TransactionFindUniqueArgs } from './dto/transaction-find-one.args';
import { TransactionUpdateOneArgs } from './dto/transaction-update-one.args';
import {
  AccountBalanceByCustomPeriodArgs,
  AccountBalanceByCustomPeriodQuery,
} from '../account/dto/get-account-balance-by-custom-period.args';
import { TransactionController } from './transaction.controller';

interface TransactionSelect {
  select: Prisma.TransactionSelect;
}

@Resolver(() => Transaction)
export class TransactionResolver {
  constructor(private readonly transactionController: TransactionController) {}

  @Mutation(() => Transaction, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async transactionCreateOne(
    @Args('transactionCreateArgs') transactionCreateArgs: TransactionCreateArgs,
    @Relations() relations: TransactionSelect,
  ): Promise<Transaction | void> {
    transactionCreateArgs.select = relations.select;
    return await this.transactionController.createOne(transactionCreateArgs);
  }

  @Query(() => [Transaction], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  transactionFindMany(
    @Args('transactionFindManyArgs')
    transactionFindManyArgs: TransactionFindManyArgs,
    @Relations() relations: TransactionSelect,
  ) {
    //Auto implement prisma select from graphql query info
    transactionFindManyArgs.select = relations.select;

    return this.transactionController.findMany(transactionFindManyArgs);
  }

  @Query(() => Transaction, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  transactionFindOne(
    @Args('transactionFindUniqueArgs')
    transactionFindUniqueArgs: TransactionFindUniqueArgs,
    @Relations() relations: TransactionSelect,
  ) {
    //Auto implement prisma select from graphql query info
    transactionFindUniqueArgs.select = relations.select;
    return this.transactionController.findOne(transactionFindUniqueArgs);
  }

  // @Mutation(() => Transaction, { description: 'Deskripsinya ada disini loh' })
  // transactionUpdateOne(
  //   @Args('transactionUpdateOneArgs') transactionUpdateOneArgs: TransactionUpdateOneArgs,
  //   @Relations() relations: TransactionSelect,
  // ) {
  //   transactionUpdateOneArgs.select = relations.select;
  //   return this.transactionController.update(transactionUpdateOneArgs);
  // }

  // @Mutation(() => Boolean, {
  //   nullable: true,
  //   description:
  //     'Datanya benar2 terhapus dari db',
  // })
  // transactionRemove(@Args('transactionId') transactionId: number) {
  //   return this.transactionController.remove(transactionId);
  // }
}
