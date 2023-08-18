import { UserService } from './user.service';
import { UserCreateArgs } from './dto/user-create-one.args';
import { UserFindManyArgs } from './dto/user-find-many.args';
import { UserFindUniqueArgs } from './dto/user-find-one.args';
import { UserUpdateOneArgs } from './dto/user-update-one.args';
import { User } from 'src/model/user.model';
import { Item, Prisma, TransactionStatus, UserRole } from '@prisma/client';
import { generateRandomReferralCode } from 'src/utils/generate-random-referral-code.function';
import { Injectable, Logger } from '@nestjs/common';
import {
  OrderCreateNestedManyWithoutOrderByInput,
  Transaction,
} from 'src/@generated';
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

    //Generate Random Referral Code
    userCreateArgsPrisma.data.referralCode = generateRandomReferralCode();

    //Handle null value GraphQL Capabitlity
    if (userCreateArgsPrisma.data.referredBy.connect.referralCode === null) {
      userCreateArgsPrisma.data.referredBy = undefined;
    }

    //Auto Create User Accounts
    accountCreateManyUserInput(userCreateArgsPrisma);

    // Auto Create Order
    const platformFee = 2000;
    //get Items
    const items: Item[] | void = await this.itemService.findMany({
      where: { userRole: { equals: UserRole.MEMBER } },
    });

    if (items) {
      // Calculate the sum of item prices
      const totalPrice = items.reduce((total, item) => total + item.price, 0);

      userCreateArgsPrisma.data.orders = {
        create: {
          status: TransactionStatus.PENDING,
          platformFee: platformFee,
          total: totalPrice + platformFee,
          cost: 0,
          cart: {
            createMany: {
              data: items.map((item) => ({
                itemId: item.id,
                quantity: 1,
              })),
            },
          },
          invoice: {
            create: {
              amount: 0,
              adminFee: 0,
            },
          },
        },
      };
    }

    this.logger.log(userCreateArgsPrisma);

    // return await this.userService.createOne(userCreateArgsPrisma);
  }

  findMany(userFindManyArgs: UserFindManyArgs) {
    return this.userService.findMany(userFindManyArgs);
  }

  findOne(userFindUniqueArgs: UserFindUniqueArgs) {
    return this.userService.findOne(userFindUniqueArgs);
  }

  updateOne(userUpdateOneArgs: UserUpdateOneArgs) {
    //TODO: Implement whatsapp verification
    return this.userService.update(userUpdateOneArgs);
  }

  remove(userId: string) {
    return this.userService.remove(userId);
  }

  count(userFindManyArgs: UserFindManyArgs) {
    return this.userService.count(userFindManyArgs);
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
