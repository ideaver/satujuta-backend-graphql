import { PointTransactionService } from './point-transaction.service';
import { PointTransaction, User } from 'src/@generated';
import { PointTransactionCreateArgs } from './dto/point-transaction-create-one.args';
import { PointTransactionFindManyArgs } from './dto/point-transaction-find-many.args';
import { PointTransactionFindUniqueArgs } from './dto/point-transaction-find-one.args';
import { PointTransactionFindFirstArgs } from './dto/point-transaction-find-first.args';
import { Injectable } from '@nestjs/common';
import { UserController } from '../user/user.controller';
import { PointTransactionGroupPercentage } from './dto/point-transaction-percentage-group.object';

@Injectable()
export class PointTransactionController {
  constructor(
    private readonly pointTransactionService: PointTransactionService,
    private readonly userController: UserController,
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

  async getAverageUserPointBalance() {
    const users: User[] | void = await this.userController.findMany({
      select: {
        PointTransactions: {
          orderBy: {
            createdAt: 'desc',
          },
          take: 1,
        },
      },
    });

    if (users) {
      const totalCurrentBalance = users.reduce((accumulator, user) => {
        const latestTransaction = user.PointTransactions[0];
        const currentBalance = latestTransaction
          ? latestTransaction.currentBalance
          : 0;
        return accumulator + currentBalance;
      }, 0);

      return totalCurrentBalance / users.length;
    }
  }

  async getPointGroupPercentages(): Promise<PointTransactionGroupPercentage[]> {
    const users: User[] | void = await this.userController.findMany({
      select: {
        PointTransactions: {
          orderBy: {
            createdAt: 'desc',
          },
          take: 1,
        },
      },
    });

    let pointGroups: PointTransactionGroupPercentage[];

    if (users) {
      const userCount = users.length;

      const grouped = users.reduce((accumulator, user) => {
        const latestTransaction = user.PointTransactions[0];
        const currentBalance = latestTransaction
          ? latestTransaction.currentBalance
          : 0;

        let pointGroup = '';
        if (currentBalance <= 0) {
          pointGroup = '0';
        } else if (currentBalance <= 30) {
          pointGroup = '>0&<=30';
        } else if (currentBalance <= 50) {
          pointGroup = '>30&<=50 ';
        } else if (currentBalance <= 100) {
          pointGroup = '>50&<=100 ';
        } else if (currentBalance <= 1000) {
          pointGroup = '>100&<=1000';
        } else {
          pointGroup = '>1000';
        }

        if (!accumulator[pointGroup]) {
          accumulator[pointGroup] = 0;
        }
        accumulator[pointGroup]++;

        return accumulator;
      }, {});

      pointGroups = Object.keys(grouped).map((pointGroup) => {
        const userCountInGroup = grouped[pointGroup];
        const percentage = (userCountInGroup * 100) / userCount;

        return {
          pointGroup,
          userCount: userCountInGroup,
          percentage,
        };
      });
    }

    return pointGroups;
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
}
