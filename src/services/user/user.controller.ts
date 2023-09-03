import { UserService } from './user.service';
import { UserCreateArgs } from './dto/user-create-one.args';
import { UserFindManyArgs } from './dto/user-find-many.args';
import { UserFindUniqueArgs } from './dto/user-find-one.args';
import { UserUpdateOneArgs } from './dto/user-update-one.args';
// import { User } from 'src/model/user.model';
import { Item, Prisma, TransactionStatus, UserRole } from '@prisma/client';
import {
  generateRandomReferralCode,
  generateUniqueCode,
} from 'src/utils/generate-random.function';
import { Injectable, Logger } from '@nestjs/common';
import { ItemService } from '../item/item.service';
import { User } from 'src/@generated';
import {
  UserCreatedByCustomPeriodArgs,
  UserCreatedByCustomPeriodQuery,
} from './dto/get-user-created-by-custom-period.args';
import { getNextPeriodDate } from 'src/utils/get-next-period.function';
import { Period } from 'src/model/period.enum';
import { encryptUserPassword } from 'src/utils/bcrypt.function';
import { UploaderService } from '../uploader/uploader.service';
// Ignore the import errors
// @ts-ignore
import { FileUpload } from 'graphql-upload';
import { RatioEnum } from '../uploader/enums';
import { v4 as uuidV4 } from 'uuid';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';

@Injectable()
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly itemService: ItemService,
    private readonly uploaderService: UploaderService,
  ) {}
  private readonly logger = new Logger(UserController.name);

  async createOne(
    file: FileUpload,
    userCreateArgs: UserCreateArgs,
  ): Promise<User | void> {
    let userCreateArgsPrisma: Prisma.UserCreateArgs = { ...userCreateArgs };

    const { password, userRole, referredBy, school, referralCode } =
      userCreateArgsPrisma.data;

    //Handle null value GraphQL Capabitlity
    if (referredBy?.connect?.referralCode === null) {
      userCreateArgsPrisma.data.referredBy = undefined;
    }

    //Check if school create query is null
    if (school?.connectOrCreate?.create?.name === null) {
      userCreateArgsPrisma.data.school?.connectOrCreate?.create === undefined;
    }

    //Generate Random Referral Code
    userCreateArgsPrisma.data.referralCode = generateRandomReferralCode();

    //encrypt user password
    userCreateArgsPrisma.data.password = await encryptUserPassword(password);

    if (userRole !== UserRole.SUPERUSER && userRole !== UserRole.ADMIN) {
      //Auto Create User Accounts
      accountCreateManyUserInput(userCreateArgsPrisma);
      // Auto Create Order
      await orderCreate(userCreateArgsPrisma, this.itemService, userRole);
    }

    const uuid = uuidV4();

    // check if file is null
    if (file) {
      const avatarUrl = await this.uploaderService.uploadImage({
        userId: uuid,
        ratio: RatioEnum.SQUARE,
        file: file,
      });

      userCreateArgsPrisma.data.id = uuid;
      userCreateArgsPrisma.data.avatarUrl = avatarUrl;
    }

    return await this.userService
      .createOne(userCreateArgsPrisma)
      .then(async (user) => {
        //TODO: Record Sessions

        //check if order created successfully
        if (user) {
          const getOrderAndInvoice = await this.findOne({
            where: { id: user.id },
            select: { orders: { include: { invoice: true }, take: 1 } },
          });

          if (getOrderAndInvoice) {
            //TODO: Emit whatsapp OTP verification
            //TODO: Emit notify user via email
            //TODO: Emit notify admin via activity log
            console.log(getOrderAndInvoice);
          }
        }

        return user;
      })
      .catch((error) => {
        //delete file if error
        this.uploaderService.deleteFile(userCreateArgsPrisma.data.avatarUrl);
        throw new IGraphQLError({ code: 123456, err: error });
      });
  }

  findMany(userFindManyArgs: Prisma.UserFindManyArgs) {
    //handling graphql null value of UserFindManyByName (lastname)
    if (userFindManyArgs.where?.AND?.[1].lastName?.contains === null) {
      userFindManyArgs.where.AND[1] = undefined;
    }

    return this.userService.findMany(userFindManyArgs);
  }

  findFirst(userFindManyArgs: UserFindManyArgs) {
    return this.userService.findFirst(userFindManyArgs);
  }

  findOne(userFindUniqueArgs: UserFindUniqueArgs) {
    return this.userService.findOne(userFindUniqueArgs);
  }

  async updateOne(userUpdateOneArgs: UserUpdateOneArgs) {
    //TODO: Implement whatsapp verification
    const {
      firstName,
      lastName,
      email,
      whatsappNumber,
      whatsappVerifiedAt,
      password,
      theme,
      userType,
      avatarUrl,
      address,
    } = userUpdateOneArgs.data;

    if (firstName?.set === null) {
      userUpdateOneArgs.data.firstName = undefined;
    }

    if (lastName?.set === null) {
      userUpdateOneArgs.data.lastName = undefined;
    }

    if (email?.set === null) {
      userUpdateOneArgs.data.email = undefined;
    }

    if (whatsappNumber?.set === null) {
      userUpdateOneArgs.data.whatsappNumber = undefined;
    }

    if (whatsappVerifiedAt?.set === null) {
      userUpdateOneArgs.data.whatsappVerifiedAt = undefined;
    }

    if (password?.set === null) {
      userUpdateOneArgs.data.password = undefined;
    }

    if (theme?.set === null) {
      userUpdateOneArgs.data.theme = undefined;
    }

    if (userType?.set === null) {
      userUpdateOneArgs.data.userType = undefined;
    }

    if (avatarUrl?.set === null) {
      userUpdateOneArgs.data.avatarUrl = undefined;
    }

    if (address?.update?.data?.name?.set === null) {
      userUpdateOneArgs.data.address.update.data.name = undefined;
    }

    if (address?.update?.data?.subdistrict?.connect?.id === null) {
      userUpdateOneArgs.data.address.update.data.subdistrict = undefined;
    }

    //encrypt user password
    if (password?.set) {
      userUpdateOneArgs.data.password.set = await encryptUserPassword(
        password.set,
      );
    }

    return this.userService.update(userUpdateOneArgs);
  }

  remove(userId: string) {
    return this.userService.remove(userId);
  }

  count(userFindManyArgs: UserFindManyArgs) {
    return this.userService.count(userFindManyArgs);
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
  itemService: ItemService,
  userRole: UserRole,
) {
  const platformFee = 2000;
  const adminFee = 3000;
  //get Items
  const items: Item[] | void = await itemService.findMany({
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
