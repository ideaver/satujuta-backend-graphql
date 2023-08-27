import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { UserFindManyArgs as UserFindManyArgs } from './dto/user-find-many.args';
import { UserFindUniqueArgs } from './dto/user-find-one.args';
import { UserUpdateOneArgs } from './dto/user-update-one.args';
// import { User } from 'src/model/user.model';
import { FindManyUserArgs, User } from 'src/@generated';
import { Prisma } from '@prisma/client';
import { UserTypePercentage } from './dto/user-type-percentage.output';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createOne(userCreateArgs: Prisma.UserCreateArgs): Promise<User | void> {
    return await this.prisma.user
      .create(userCreateArgs)
      .then((user) => {
        return user;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async findMany(userFindManyArgs: Prisma.UserFindManyArgs) {
    return this.prisma.user
      .findMany(userFindManyArgs)
      .then((users) => {
        return users;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async findFirst(userFindManyArgs: UserFindManyArgs) {
    return await this.prisma.user
      .findFirst(userFindManyArgs)
      .then((user) => {
        return user;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async findOne(userFindUniqueArgs: UserFindUniqueArgs): Promise<User | void> {
    return await this.prisma.user
      .findUnique(userFindUniqueArgs)
      .then((user) => {
        return user;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async update(userUpdateOneArgs: UserUpdateOneArgs): Promise<User | void> {
    return this.prisma.user
      .update(userUpdateOneArgs)
      .then((user) => {
        return user;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
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
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async count(findManyUserArgs: FindManyUserArgs) {
    return await this.prisma.user
      .count(findManyUserArgs)
      .then((user) => {
        return user;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async countUserTypePercentage(): Promise<UserTypePercentage[] | void> {
    const query = Prisma.sql`
    SELECT
      userType AS userCountType,
      COUNT(*) AS userCount,
      ROUND(COUNT(*) * 100.0 / SUM(COUNT(*)) OVER (), 2) AS userPercentage
    FROM
      User
    GROUP BY
      userType;
  `;
    return await this.prisma
      .$queryRaw(query)
      .then((res: UserTypePercentage[]) => {
        return res;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }
}
