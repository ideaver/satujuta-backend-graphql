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

    const { userRole } = userCreateArgsPrisma.data;

    if (userRole !== UserRole.SUPERUSER && userRole !== UserRole.ADMIN) {
      //Auto Create User Accounts
      accountCreateManyUserInput(userCreateArgsPrisma);
      // Auto Create Order
      await orderCreate(userCreateArgsPrisma, this.itemService, userRole);
    }

    //TODO: Record Sessions

    return await this.userService.createOne(userCreateArgsPrisma);
  }

  findMany(userFindManyArgs: Prisma.UserFindManyArgs) {
    //handling graphql null value of UserFindManyByName (lastname)
    if (userFindManyArgs.where?.AND?.[1].lastName?.contains === null) {
      userFindManyArgs.where.AND[1] = undefined;
    }

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

    // if (userRole?.set === null) {
    //   userUpdateOneArgs.data.userRole = undefined;
    // }

    if (userType?.set === null) {
      userUpdateOneArgs.data.userType = undefined;
    }

    if (avatarUrl?.set === null) {
      userUpdateOneArgs.data.avatarUrl = undefined;
    }

    if (address?.update?.data?.name?.set === null) {
      userUpdateOneArgs.data.address.update.data.name = undefined;
    }

    if (address?.update?.data?.province?.connect?.id === null) {
      userUpdateOneArgs.data.address.update.data.province = undefined;
    }

    if (address?.update?.data?.city?.connect?.id === null) {
      userUpdateOneArgs.data.address.update.data.city = undefined;
    }

    if (address?.update?.data?.district?.connect?.id === null) {
      userUpdateOneArgs.data.address.update.data.district = undefined;
    }

    if (address?.update?.data?.subdistrict?.connect?.id === null) {
      userUpdateOneArgs.data.address.update.data.subdistrict = undefined;
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
