import { Injectable } from '@nestjs/common';
import {
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

@Injectable()
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly itemController: ItemController,
  ) {}

  async createOne(userCreateArgs: Prisma.UserCreateArgs) {
    try {
      const { password, userRole } = userCreateArgs.data;
      //Generate Random Referral Code
      userCreateArgs.data.referralCode = generateRandomReferralCode();

      //encrypt user password
      userCreateArgs.data.password = await encryptUserPassword(password);

      if (userRole !== UserRole.SUPERUSER && userRole !== UserRole.ADMIN) {
        //Auto Create User Accounts
        accountCreateManyUserInput(userCreateArgs);
        // Auto Create Order
        await orderCreate(userCreateArgs, this.itemController, userRole);
      }
      const res = await this.userService.createOne(userCreateArgs);
      //TODO: Handle OnUserCreateEvent : email verification, whatsapp verification,
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
    const { password } = userUpdateOneArgs.data;

    //TODO: if whatsapp updated: send whatsapp message
    //TODO: if email updated: send email

    //from transaction
    //TODO: if user status updated: OnRegisteredUserEvent
    if (userUpdateOneArgs?.data?.status === UserStatus.ACTIVE) {
      /* 
    1. send user notification about order status
    2. send notification to admin
    3. send point to referee user
    */
    }

    //encrypt user password
    if (password) {
      const castPassword = password as Prisma.StringFieldUpdateOperationsInput;
      if (castPassword?.set)
        userUpdateOneArgs.data.password = {
          set: await encryptUserPassword(castPassword.set),
        };
    }

    return await this.userService.updateOne(userUpdateOneArgs);
  }

  async updateMany(userUpdateManyArgs: Prisma.UserUpdateManyArgs) {
    return await this.userService.updateMany(userUpdateManyArgs);
  }

  async delete(userDeleteArgs: Prisma.UserDeleteArgs) {
    return await this.userService.delete(userDeleteArgs);
  }

  async deleteMany(userDeleteManyArgs: Prisma.UserDeleteManyArgs) {
    return await this.userService.deleteMany(userDeleteManyArgs);
  }

  async aggregate(userAggregateArgs: Prisma.UserAggregateArgs) {
    return await this.userService.aggregate(userAggregateArgs);
  }

  async count(userCountArgs: Prisma.UserCountArgs) {
    return await this.userService.count(userCountArgs);
  }

  countUserTypePercentage() {
    return this.userService.countUserTypePercentage();
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
) {
  const platformFee = 2000;
  const adminFee = 3000;
  //get Items
  const items: Item[] | void = await itemController.findMany({
    where: { userRole: { equals: userRole } },
  });

  if (items) {
    // Calculate the sum of item prices
    const totalPrice = items.reduce((total, item) => total + item.price, 0);

    userCreateArgsPrisma.data.orders = {
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
    console.log('items is null');
  }
}

function accountCreateManyUserInput(
  userCreateArgsPrisma: Prisma.UserCreateArgs,
) {
  userCreateArgsPrisma.data.accounts.createMany = {
    data: [
      { name: 'CASH Account', accountCategory: 'CASH' },
      {
        name: 'COMISSION Account',
        accountCategory: 'COMISSION',
      },
      { name: 'EQUITY Account', accountCategory: 'EQUITY' },
      { name: 'DEBT Account', accountCategory: 'DEBT' },
    ],
  };
}
