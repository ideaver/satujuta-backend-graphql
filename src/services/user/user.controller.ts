import { Injectable } from '@nestjs/common';
import {
  AccountCategory,
  Item,
  Prisma,
  TransactionStatus,
  UserRole,
  UserStatus,
} from '@prisma/client';
import { UserService } from './user.service';
import {
  generateRandomReferralCode,
  generateUniqueCode,
} from 'src/utils/generate-random.function';
import { encryptUserPassword } from 'src/utils/bcrypt.function';
import { ItemController } from '../item/item.controller';
import {
  UserCreatedByCustomPeriodArgs,
  UserCreatedByCustomPeriodQuery,
} from './dto/get-user-created-by-custom-period.args';
import { getNextPeriodDate } from 'src/utils/get-next-period.function';
import { Period } from 'src/model/period.enum';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { User } from 'src/@generated';
import { UserEvents } from 'src/event-listeners/enum/user-event.enum';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import { UserReferralPercentage } from './dto/user-referral-percentage.output';

@Injectable()
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly itemController: ItemController,
    private eventEmitter: EventEmitter2,
  ) {}

  async createOne(userCreateArgs: Prisma.UserCreateArgs) {
    const { password, userRole, referralCode } = userCreateArgs.data;
    try {
      //check if Referral Code is exist/valid
      if (referralCode) {
        const referee = await this.findOne({
          where: { referralCode: referralCode },
        });

        if (!referee) {
          throw new IGraphQLError({
            code: 110001,
          });
        }
      }

      //Generate Random Referral Code
      userCreateArgs.data.referralCode = generateRandomReferralCode();

      //encrypt user password
      userCreateArgs.data.password = await encryptUserPassword(password);

      if (userRole !== UserRole.SUPERUSER && userRole !== UserRole.ADMIN) {
        //Auto Create User Accounts
        accountCreateManyUserInput(userCreateArgs);
        // Auto Create Order
        const platformFee = 2000;
        const adminFee = 3000;
        //get Items
        const items: Item[] | void = await this.itemController.findMany({
          where: { userRole: { equals: userRole } },
        });

        if (items) {
          // Calculate the sum of item prices
          const totalPrice = items.reduce(
            (total, item) => total + item.price,
            0,
          );

          userCreateArgs.data.orders = {
            create: {
              status: TransactionStatus.PENDING,
              platformFee: platformFee,
              total: totalPrice + platformFee,
              cart: {
                //TODO: Jika student didaftarkan member gimana?
                createMany: {
                  data: items.map((item) => ({
                    membershipItemId: item.id,
                    quantity: 1,
                    cost: item.cost,
                    price: item.price,
                  })),
                },
              },
              invoice: {
                create: {
                  amount: totalPrice + platformFee + adminFee,
                  adminFee: adminFee,
                  uniqueCode: generateUniqueCode(),
                },
              },
            },
          };
        } else {
          throw new IGraphQLError({ code: 180001 });
        }
      }
      //create user
      const res = await this.userService.createOne(
        replaceNullWithUndefined(userCreateArgs),
      );
      //OnUserCreatedEvent
      this.eventEmitter.emit(UserEvents.Created, res);

      return res;
    } catch (error) {
      throw new IGraphQLError({ code: 123456, err: error });
    }
  }

  async createMany(userCreateManyArgs: Prisma.UserCreateManyArgs) {
    return await this.userService.createMany(userCreateManyArgs);
  }

  async findOne(userFindUniqueArgs: Prisma.UserFindUniqueArgs) {
    return await this.userService.findOne(userFindUniqueArgs);
  }

  async findMany(userFindManyArgs: Prisma.UserFindManyArgs) {
    return await this.userService.findMany(userFindManyArgs);
  }

  async findFirst(userFindFirstArgs: Prisma.UserFindFirstArgs) {
    return await this.userService.findFirst(userFindFirstArgs);
  }

  async updateOne(userUpdateOneArgs: Prisma.UserUpdateArgs) {
    userUpdateOneArgs.data.status = { set: 'ACTIVE' };
    const { password, status } = userUpdateOneArgs.data;

    try {
      //encrypt user password
      if (password) {
        if (typeof password === 'object' && password.set) {
          userUpdateOneArgs.data.password = {
            set: await encryptUserPassword(password.set),
          };
        }
      }

      //TODO: if whatsapp updated: send whatsapp message
      //TODO: if email updated: send email
      //OR FAIL

      //update user
      const res: User = await this.userService.updateOne(userUpdateOneArgs);

      this.eventEmitter.emit(UserEvents.Updated, res);

      //from transaction
      if (status) {
        if (typeof status === 'object' && status.set === UserStatus.ACTIVE) {
          //OnUserStatusUpdatedToActiveEvent
          this.eventEmitter.emit(UserEvents.StatusUpdatedToActive, res);
        }
      }

      return res;
    } catch (error) {
      throw new IGraphQLError({ code: 123456, err: error });
    }
  }

  async updateOneOfStatusToInactive(userId: string, select: Prisma.UserSelect) {
    return await this.userService.updateOne({
      data: { status: { set: UserStatus.INACTIVE } },
      where: { id: userId },
      select: select,
    });
  }

  async updateMany(userUpdateManyArgs: Prisma.UserUpdateManyArgs) {
    return await this.userService.updateMany(userUpdateManyArgs);
  }

  async delete(userDeleteArgs: Prisma.UserDeleteArgs) {
    const { id } = userDeleteArgs.where;

    await this.updateOne({
      where: { id: id },
      data: { deletedAt: new Date() },
    });

    this.eventEmitter.emit(UserEvents.Deleted);

    return true;
  }

  async deleteMany(userDeleteManyArgs: Prisma.UserDeleteManyArgs) {
    const { id } = userDeleteManyArgs.where;

    if (id) {
      if (typeof id === 'object' && id.in) {
        await this.updateMany({
          where: { id: { in: id.in } },
          data: { deletedAt: new Date() },
        });
        this.eventEmitter.emit(UserEvents.Deleted);
      }
    }

    return true;
  }

  async aggregate(userAggregateArgs: Prisma.UserAggregateArgs) {
    return await this.userService.aggregate(userAggregateArgs);
  }

  async count(userCountArgs: Prisma.UserCountArgs) {
    return await this.userService.count(userCountArgs);
  }

  async countUserTypePercentage() {
    return this.userService.countUserTypePercentage();
  }

  async countUserReferralPercentage(): Promise<UserReferralPercentage[]> {
    const referredUsersPromise = this.count({
      where: {
        referredBy: {
          NOT: {},
        },
        //paid member only
        orders: {
          some: {
            invoice: {
              transactions: { some: { status: TransactionStatus.COMPLETED } },
            },
          },
        },
      },
    });

    const nonReferredUsersPromise = this.count({
      where: {
        referredBy: {},
        //paid member only
        orders: {
          some: {
            invoice: {
              transactions: { some: { status: TransactionStatus.COMPLETED } },
            },
          },
        },
      },
    });

    const totalUsersPromise = this.count({});

    const [referredUsersCount, nonReferredUsersCount, totalUsersCount] =
      await Promise.all([
        referredUsersPromise,
        nonReferredUsersPromise,
        totalUsersPromise,
      ]);

    // Calculate the percentage of users with referrals
    const percentageWithReferrals =
      (referredUsersCount / totalUsersCount) * 100;

    // Calculate the percentage of users without referrals
    const percentageWithoutReferrals =
      (nonReferredUsersCount / totalUsersCount) * 100;

    return [
      {
        userReferralType: 'percentageWithReferrals',
        userCount: referredUsersCount,
        userPercentage: percentageWithReferrals,
      },
      {
        userReferralType: 'percentageWithoutReferrals',
        userCount: nonReferredUsersCount,
        userPercentage: percentageWithoutReferrals,
      },
    ];
  }

  async getUserGrowthByCustomPeriod(
    args: UserCreatedByCustomPeriodArgs,
  ): Promise<UserCreatedByCustomPeriodQuery[]> {
    const { start, end, period, where } = args;

    const users = await this.findMany({
      orderBy: { createdAt: 'asc' },
      where: {
        createdAt: {
          gte: start,
          lt: end,
        },
        ...where,
      },
    });

    const userCounts: UserCreatedByCustomPeriodQuery[] = [];

    let currentDate = new Date(start);

    while (currentDate <= end) {
      const userCount = this.calculateUserCount(users, currentDate, period);

      userCounts.push({
        period: currentDate.toISOString(), // Convert date to string for consistent grouping
        totalUser: userCount,
      });

      currentDate = getNextPeriodDate(currentDate, period);
    }

    return userCounts;
  }

  calculateUserCount(users, currentDate, period) {
    const filteredUsers = users.filter((user) => {
      const userCreatedAt = new Date(user.createdAt);

      if (period === Period.WEEKLY) {
        const nextWeekDate = getNextPeriodDate(currentDate, period);
        return userCreatedAt >= currentDate && userCreatedAt < nextWeekDate;
      } else if (period === Period.MONTHLY) {
        const nextMonthDate = getNextPeriodDate(currentDate, period);
        return userCreatedAt >= currentDate && userCreatedAt < nextMonthDate;
      } else if (period === Period.YEARLY) {
        const nextYearDate = getNextPeriodDate(currentDate, period);
        return userCreatedAt >= currentDate && userCreatedAt < nextYearDate;
      }

      return false;
    });

    return filteredUsers.length;
  }
}

async function orderCreate(
  userCreateArgsPrisma: Prisma.UserCreateArgs,
  itemController: ItemController,
  userRole: UserRole,
) {}

function accountCreateManyUserInput(
  userCreateArgsPrisma: Prisma.UserCreateArgs,
) {
  userCreateArgsPrisma.data.accounts.createMany = {
    data: [
      { name: 'POINT Account', accountCategory: AccountCategory.POINT },
      { name: 'CASH Account', accountCategory: AccountCategory.CASH },
      {
        name: 'COMISSION Account',
        accountCategory: AccountCategory.COMISSION,
      },
      { name: 'EQUITY Account', accountCategory: AccountCategory.EQUITY },
      { name: 'DEBT Account', accountCategory: AccountCategory.DEBT },
    ],
  };
}
