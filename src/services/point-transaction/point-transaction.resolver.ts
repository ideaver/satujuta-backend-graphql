import { Resolver, Query, Mutation, Args, Info } from '@nestjs/graphql';

import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import { PointTransaction } from 'src/@generated';
import { PointTransactionCreateArgs } from './dto/point-transaction-create-one.args';
import { PointTransactionFindManyArgs } from './dto/point-transaction-find-many.args';
import { PointTransactionFindUniqueArgs } from './dto/point-transaction-find-one.args';
import { PointTransactionFindFirstArgs } from './dto/point-transaction-find-first.args';
import { PointTransactionController } from './point-transaction.controller';

interface PointTransactionSelect {
  select: Prisma.PointTransactionSelect;
}

@Resolver(() => PointTransaction)
export class PointTransactionResolver {
  constructor(
    private readonly pointTransactionController: PointTransactionController,
  ) {}

  // @Mutation(() => PointTransaction, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async pointTransactionCreateOne(
  //   @Args('pointTransactionCreateArgs')
  //   pointTransactionCreateArgs: PointTransactionCreateArgs,
  //   @Relations() relations: PointTransactionSelect,
  // ): Promise<PointTransaction | void> {
  //   pointTransactionCreateArgs.select = relations.select;
  //   return await this.pointTransactionController.createOne(
  //     pointTransactionCreateArgs,
  //   );
  // }

  @Query(() => [PointTransaction], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  pointTransactionFindMany(
    @Args('pointTransactionFindManyArgs')
    pointTransactionFindManyArgs: PointTransactionFindManyArgs,
    @Relations() relations: PointTransactionSelect,
  ) {
    //Auto implement prisma select from graphql query info
    pointTransactionFindManyArgs.select = relations.select;
    return this.pointTransactionController.findMany(
      pointTransactionFindManyArgs,
    );
  }

  @Query(() => PointTransaction, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  pointTransactionFindOne(
    @Args('pointTransactionFindUniqueArgs')
    pointTransactionFindUniqueArgs: PointTransactionFindUniqueArgs,
    @Relations() relations: PointTransactionSelect,
  ) {
    //Auto implement prisma select from graphql query info
    pointTransactionFindUniqueArgs.select = relations.select;
    return this.pointTransactionController.findOne(
      pointTransactionFindUniqueArgs,
    );
  }

  @Query(() => PointTransaction, {
    nullable: true,
    description: 'Bisa juga untuk ambil balance terakhir dari point milik user',
  })
  pointTransactionFindFirst(
    @Args('pointTransactionFindFirstArgs')
    pointTransactionFindFirstArgs: PointTransactionFindFirstArgs,
    @Relations() relations: PointTransactionSelect,
  ) {
    //Auto implement prisma select from graphql query info
    pointTransactionFindFirstArgs.select = relations.select;
    return this.pointTransactionController.findFirst(
      pointTransactionFindFirstArgs,
    );
  }
}
