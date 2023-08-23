import { UserService } from './user.service';
import { UserCreateArgs } from './dto/user-create-one.args';
import { UserFindManyArgs } from './dto/user-find-many.args';
import { UserFindUniqueArgs } from './dto/user-find-one.args';
import { UserUpdateOneArgs } from './dto/user-update-one.args';
import { User } from 'src/model/user.model';
import { Item, Prisma, TransactionStatus, UserRole } from '@prisma/client';
import {
  generateRandomReferralCode,
  generateUniqueCode,
} from 'src/utils/generate-random.function';
import { Injectable, Logger } from '@nestjs/common';
import { ItemService } from '../item/item.service';

@Injectable()
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly itemService: ItemService,
  ) {}
  private readonly logger = new Logger(UserController.name);

  async createOne(userCreateArgs: UserCreateArgs): Promise<User | void> {
    let userCreateArgsPrisma: Prisma.UserCreateArgs = { ...userCreateArgs };

    //Handle null value GraphQL Capabitlity
    if (
      userCreateArgsPrisma.data.referredBy?.connect?.referralCode === null &&
      userCreateArgsPrisma.data.referredBy === undefined
    ) {
      userCreateArgsPrisma.data.referredBy = undefined;
    }

    //Check if school create query is null
    if (
      userCreateArgsPrisma.data.school?.connectOrCreate?.create?.name === null
    ) {
      userCreateArgsPrisma.data.school?.connectOrCreate?.create === undefined;
    }

    //Generate Random Referral Code
    userCreateArgsPrisma.data.referralCode = generateRandomReferralCode();

    if (
      userCreateArgsPrisma.data.userRole !== UserRole.SUPERUSER &&
      userCreateArgsPrisma.data.userRole !== UserRole.ADMIN
    ) {
      //Auto Create User Accounts
      accountCreateManyUserInput(userCreateArgsPrisma);
      // Auto Create Order
      await orderCreate(userCreateArgsPrisma, this.itemService);
    }

    console.log(userCreateArgsPrisma);

    return await this.userService.createOne(userCreateArgsPrisma);
  }

  findMany(userFindManyArgs: UserFindManyArgs) {
    return this.userService.findMany(userFindManyArgs);
  }

  findOne(userFindUniqueArgs: UserFindUniqueArgs) {
    return this.userService.findOne(userFindUniqueArgs);
  }

  updateOne(userUpdateOneArgs: UserUpdateOneArgs) {
    //TODO: Implement whatsapp verification
    const {
      firstName,
      lastName,
      email,
      whatsappNumber,
      whatsappVerifiedAt,
      password,
      theme,
      userRole,
      userType,
      avatarUrl,
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

    // if (userRole?.set === null) {
    //   userUpdateOneArgs.data.userRole = undefined;
    // }

    if (userType?.set === null) {
      userUpdateOneArgs.data.userType = undefined;
    }

    if (avatarUrl?.set === null) {
      userUpdateOneArgs.data.avatarUrl = undefined;
    }

    return this.userService.update(userUpdateOneArgs);
  }

  remove(userId: string) {
    return this.userService.remove(userId);
  }

  count(userFindManyArgs: UserFindManyArgs) {
    return this.userService.count(userFindManyArgs);
  }
}

async function orderCreate(
  userCreateArgsPrisma: Prisma.UserCreateArgs,
  itemService: ItemService,
) {
  const platformFee = 2000;
  const adminFee = 3000;
  //get Items
  const items: Item[] | void = await itemService.findMany({
    where: { userRole: { equals: userCreateArgsPrisma.data.userRole } },
  });

  // Calculate the sum of item prices
  const totalPrice = items
    ? items.reduce((total, item) => total + item.price, 0)
    : 0;

  userCreateArgsPrisma.data.orders = {
    create: {
      status: TransactionStatus.PENDING,
      platformFee: platformFee,
      total: totalPrice + platformFee,
      cart: {
        //TODO: Jika student didaftarkan member gimana?
        createMany: {
          data: items
            ? items.map((item) => ({
                itemId: item.id,
                quantity: 1,
                cost: item.cost,
                price: item.price,
              }))
            : undefined,
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
