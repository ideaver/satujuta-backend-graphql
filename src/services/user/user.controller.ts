import { UserService } from './user.service';
import { UserCreateArgs } from './dto/user-create-one.args';
import { UserFindManyArgs } from './dto/user-find-many.args';
import { UserFindUniqueArgs } from './dto/user-find-one.args';
import { UserUpdateOneArgs } from './dto/user-update-one.args';
import { User } from 'src/model/user.model';
import { Prisma } from '@prisma/client';
import { generateRandomReferralCode } from 'src/utils/generate-random-referral-code.function';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserController {
  constructor(private readonly userService: UserService) {}

  async createOne(userCreateArgs: UserCreateArgs): Promise<User | void> {
    //Generate Random Referral Code
    userCreateArgs.data.referralCode = generateRandomReferralCode();

    //Handle null value GraphQL Capabitlity
    if (userCreateArgs.data.referredBy.connect.referralCode === null) {
      userCreateArgs.data.referredBy = undefined;
    }

    //Auto Create User Accounts
    userCreateArgs.data.accounts.createMany = {
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

    return await this.userService.createOne(userCreateArgs);
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
