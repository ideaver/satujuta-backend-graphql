import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma, TransactionStatus, UserType } from '@prisma/client';
import { UserTypePercentage } from './dto/user-type-percentage.output';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  private readonly logger = new Logger(UserService.name);
  async createOne(userCreateArgs: Prisma.UserCreateArgs) {
    try {
      return await this.prisma.user.create(userCreateArgs);
    } catch (err) {
      this.logger.debug(userCreateArgs);
      this.logger.error(err);
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(userCreateManyArgs: Prisma.UserCreateManyArgs) {
    try {
      return await this.prisma.user.createMany(userCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(userFindUniqueArgs: Prisma.UserFindUniqueArgs) {
    try {
      return await this.prisma.user.findUnique(userFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(userFindManyArgs: Prisma.UserFindManyArgs) {
    try {
      return await this.prisma.user.findMany(userFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(userFindFirstArgs: Prisma.UserFindFirstArgs) {
    try {
      return await this.prisma.user.findFirst(userFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(userUpdateOneArgs: Prisma.UserUpdateArgs) {
    try {
      return await this.prisma.user.update(userUpdateOneArgs);
    } catch (err) {
      this.logger.error(err);
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(userUpdateManyArgs: Prisma.UserUpdateManyArgs) {
    try {
      return await this.prisma.user.updateMany(userUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(userDeleteArgs: Prisma.UserDeleteArgs) {
    try {
      await this.prisma.user.delete(userDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(userDeleteManyArgs: Prisma.UserDeleteManyArgs) {
    try {
      await this.prisma.user.deleteMany(userDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(userAggregateArgs: Prisma.UserAggregateArgs) {
    try {
      return await this.prisma.user.aggregate(userAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(userCountArgs: Prisma.UserCountArgs) {
    try {
      return await this.prisma.user.count(userCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async countUserTypePercentage(): Promise<UserTypePercentage[] | void> {
    // Get all enum values of UserType
    const userTypes = Object.values(UserType);

    // Initialize an array to store UserTypePercentage objects
    const userTypePercentages: UserTypePercentage[] = [];

    // Query to count total users
    const totalUsersCount = await this.count({});

    // Query to count users for each userType and populate userTypePercentages array
    for (const userType of userTypes) {
      const count = await this.count({
        where: {
          userType: userType,
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

      const percentage = (count / totalUsersCount) * 100;

      const userTypePercentage = new UserTypePercentage();
      userTypePercentage.userCountType = userType;
      userTypePercentage.userCount = count;
      userTypePercentage.userPercentage = percentage;

      userTypePercentages.push(userTypePercentage);
    }

    return userTypePercentages;
  }
}
