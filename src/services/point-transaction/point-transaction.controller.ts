import { PointTransactionService } from './point-transaction.service';
import { PointTransaction } from 'src/@generated';
import { PointTransactionCreateArgs } from './dto/point-transaction-create-one.args';
import { PointTransactionFindManyArgs } from './dto/point-transaction-find-many.args';
import { PointTransactionFindUniqueArgs } from './dto/point-transaction-find-one.args';
import { PointTransactionFindFirstArgs } from './dto/point-transaction-find-first.args';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PointTransactionController {
  constructor(
    private readonly pointTransactionService: PointTransactionService,
  ) {}

  async createOne(
    pointTransactionCreateArgs: PointTransactionCreateArgs,
  ): Promise<PointTransaction | void> {
    return await this.pointTransactionService.createOne(
      pointTransactionCreateArgs,
    );
  }

  findMany(pointTransactionFindManyArgs: PointTransactionFindManyArgs) {
    return this.pointTransactionService.findMany(pointTransactionFindManyArgs);
  }

  findOne(pointTransactionFindUniqueArgs: PointTransactionFindUniqueArgs) {
    return this.pointTransactionService.findOne(pointTransactionFindUniqueArgs);
  }

  findFirst(pointTransactionFindFirstArgs: PointTransactionFindFirstArgs) {
    return this.pointTransactionService.findFirst(
      pointTransactionFindFirstArgs,
    );
  }

  async getCurrentBalance(userId: string) {
    const latestTransaction: PointTransaction = await this.findFirst({
      where: {
        User: {
          is: {
            id: {
              equals: userId,
            },
          },
        },
      },
      take: 1,
      orderBy: [
        {
          createdAt: 'desc',
        },
      ],
    }).then((res: PointTransaction) => res);

    return latestTransaction?.currentBalance;
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
