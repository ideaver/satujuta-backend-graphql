import { Injectable } from '@nestjs/common';
import { UserCreateArgs } from './dto/user-create-one.args';
import { PrismaService } from 'prisma/prisma.service';
import { UserFindManyArgs as UserFindManyArgs } from './dto/user-find-many.args';
import { UserFindUniqueArgs } from './dto/user-find-one.args';
import { UserUpdateOneArgs } from './dto/user-update-one.args';
import { GraphQLError } from 'graphql';
import { User } from 'src/model/user.model';
import { throwPrismaError } from 'src/utils/throw-prisma-error.function';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createOne(userCreateArgs: UserCreateArgs): Promise<User | void> {
    // await this.prisma.city
    //   .create({ data: { name: 'Jakarta' } })
    //   .then((city) => {
    //     console.log('city created ' + city);
    //   });
    // await this.prisma.district
    //   .create({ data: { name: 'Jakarta Selatan' } })
    //   .then((district) => {
    //     console.log('district created ' + district);
    //   });
    // await this.prisma.postalCode
    //   .create({ data: { code: 456547 } })
    //   .then((postalCode) => {
    //     console.log('postalCode created ' + postalCode);
    //   });
    // await this.prisma.bank
    //   .create({
    //     data: {
    //       name: 'BCA',
    //       accountNumber: 2572653525,
    //       logoUrl: 'https://www.google.com/jfdggfpg',
    //       account: {
    //         create: {
    //           name: 'BCA Bank Account',
    //           accountCategory: AccountCategory.PLATFORM,
    //           user: { connect: { id: '5bfa338c-dd73-4435-b9b9-701ad364a355' } },
    //         },
    //       },
    //     },
    //   })
    //   .then((bank) => {
    //     console.log('bank created ' + bank);
    //   });

    //null graphql query capability
    if (userCreateArgs.data.referredBy.connect.referralCode === null) {
      userCreateArgs.data.referredBy = undefined;
    }

    return await this.prisma.user
      .create(userCreateArgs)
      .then((user) => {
        return user;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  async findMany(userFindManyArgs: UserFindManyArgs) {
    return this.prisma.user
      .findMany(userFindManyArgs)
      .then((users) => {
        return users;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  async findOne(userFindUniqueArgs: UserFindUniqueArgs): Promise<User | void> {
    return await this.prisma.user
      .findUnique(userFindUniqueArgs)
      .then((user) => {
        return user;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  async update(userUpdateOneArgs: UserUpdateOneArgs): Promise<User | void> {
    return this.prisma.user
      .update(userUpdateOneArgs)
      .then((user) => {
        return user;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  async remove(userId: string) {
    return await this.prisma.user
      .update({
        where: { id: userId },
        data: { deletedAt: new Date() },
        select: { id: true, firstName: true, deletedAt: true },
      })
      .then((user) => {
        return user;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }
}
