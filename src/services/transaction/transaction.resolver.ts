// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateTransaction,
  CreateManyTransactionArgs,
  CreateOneTransactionArgs,
  DeleteManyTransactionArgs,
  DeleteOneTransactionArgs,
  FindFirstTransactionArgs,
  FindManyTransactionArgs,
  FindUniqueTransactionArgs,
  Transaction,
  TransactionAggregateArgs,
  UpdateManyTransactionArgs,
  UpdateOneTransactionArgs,
} from 'src/@generated';
import { TransactionController } from './transaction.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

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
    @Args()
    transactionCreateArgs: CreateOneTransactionArgs,
    @Relations() relations: TransactionSelect,
  ): Promise<Transaction | void> {
    return await this.transactionController.createOne({
      ...transactionCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async transactionCreateMany(
    @Args()
    createManyTransactionArgs: CreateManyTransactionArgs,
  ) {
    return await this.transactionController.createMany(
      createManyTransactionArgs,
    );
  }

  @Query(() => Transaction, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  transactionFindOne(
    @Args()
    transactionFindUniqueArgs: FindUniqueTransactionArgs,
    @Relations() relations: TransactionSelect,
  ): Promise<Transaction | void> {
    return this.transactionController.findOne({
      ...transactionFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [Transaction], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  transactionFindMany(
    @Args() transactionFindManyArgs: FindManyTransactionArgs,
    @Relations() relations: TransactionSelect,
  ) {
    return this.transactionController.findMany({
      ...transactionFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => Transaction, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  transactionFindFirst(
    @Args()
    findFirstTransactionArgs: FindFirstTransactionArgs,
    @Relations() relations: TransactionSelect,
  ): Promise<Transaction | void> {
    return this.transactionController.findFirst({
      ...findFirstTransactionArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Transaction, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async transactionUpdateOne(
    @Args() transactionUpdateOneArgs: UpdateOneTransactionArgs,
    @Relations() relations: TransactionSelect,
  ) {
    return this.transactionController.updateOne({
      ...replaceNullWithUndefined(transactionUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => Transaction, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async transactionUpdateMany(
    @Args() updateManyTransactionArgs: UpdateManyTransactionArgs,
  ) {
    return this.transactionController.updateMany(updateManyTransactionArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async transactionDelete(
    @Args() deleteOneTransactionArgs: DeleteOneTransactionArgs,
    @Relations() relations: TransactionSelect,
  ) {
    return this.transactionController.delete({
      ...deleteOneTransactionArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async transactionDeleteMany(
    @Args() deleteManyTransactionArgs: DeleteManyTransactionArgs,
  ) {
    return this.transactionController.deleteMany(deleteManyTransactionArgs);
  }

  @Query(() => AggregateTransaction, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  transactionAggregate(
    @Args() transactionAggregateArgs: TransactionAggregateArgs,
  ) {
    return this.transactionController.aggregate(transactionAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  count(@Args() transactionCountAggregateInput: FindManyTransactionArgs) {
    return this.transactionController.count(transactionCountAggregateInput);
  }
}
