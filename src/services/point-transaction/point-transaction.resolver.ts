import { Resolver, Query, Mutation, Args, Info } from '@nestjs/graphql';
import { PointTransactionService } from './point-transaction.service';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import { PointTransaction } from 'src/@generated';
import { PointTransactionCreateArgs } from './dto/point-transaction-create-one.args';
import { PointTransactionFindManyArgs } from './dto/point-transaction-find-many.args';
import { PointTransactionFindUniqueArgs } from './dto/point-transaction-find-one.args';
import { PointTransactionUpdateOneArgs } from './dto/point-transaction-update-one.args';

interface PointTransactionSelect {
  select: Prisma.PointTransactionSelect;
}

@Resolver(() => PointTransaction)
export class PointTransactionResolver {
  constructor(private readonly pointTransactionService: PointTransactionService) {}

  @Mutation(() => PointTransaction, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async pointTransactionCreateOne(
    @Args('pointTransactionCreateArgs') pointTransactionCreateArgs: PointTransactionCreateArgs,
    @Relations() relations: PointTransactionSelect
  ): Promise<PointTransaction | void> {
    pointTransactionCreateArgs.select = relations.select;
    return await this.pointTransactionService.createOne(pointTransactionCreateArgs);
  }

  @Query(() => [PointTransaction], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  pointTransactionFindMany(
    @Args('pointTransactionFindManyArgs') pointTransactionFindManyArgs: PointTransactionFindManyArgs,
    @Relations() relations: PointTransactionSelect,
  ) {
    //Auto implement prisma select from graphql query info
    pointTransactionFindManyArgs.select = relations.select;
    return this.pointTransactionService.findMany(pointTransactionFindManyArgs);
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
    return this.pointTransactionService.findOne(pointTransactionFindUniqueArgs);
  }

  // @Mutation(() => PointTransaction, { description: 'Deskripsinya ada disini loh' })
  // pointTransactionUpdateOne(
  //   @Args('pointTransactionUpdateOneArgs') pointTransactionUpdateOneArgs: PointTransactionUpdateOneArgs,
  //   @Relations() relations: PointTransactionSelect,
  // ) {
  //   pointTransactionUpdateOneArgs.select = relations.select;
  //   return this.pointTransactionService.update(pointTransactionUpdateOneArgs);
  // }

  // @Mutation(() => Boolean, {
  //   nullable: true,
  //   description:
  //     'Datanya benar2 terhapus dari db',
  // })
  // pointTransactionRemove(@Args('pointTransactionId') pointTransactionId: number) {
  //   return this.pointTransactionService.remove(pointTransactionId);
  // }
}