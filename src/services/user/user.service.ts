import { Injectable } from '@nestjs/common';
import { UserCreateArgs } from './dto/user-create-one.args';
import { PrismaService } from 'prisma/prisma.service';
import { UserFindManyArgs as UserFindManyArgs } from './dto/user-find-many.args';
import { UserFindUniqueArgs } from './dto/user-find-one.args';
import { UserUpdateOneArgs } from './dto/user-update-one.args';
import { GraphQLError } from 'graphql';
import { User } from 'src/model/user.model';
import { throwPrismaError } from 'src/utils/throw-prisma-error.function';
import {
  AccountCreateNestedManyWithoutUserInput,
  AggregateUser,
  FindManyUserArgs,
  UserAggregateArgs,
  UserCount,
  UserCountAggregate,
  UserCountAggregateInput,
} from 'src/@generated';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createOne(userCreateArgs: UserCreateArgs): Promise<User | void> {
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

  async count(findManyUserArgs: FindManyUserArgs) {
    return await this.prisma.user
      .count(findManyUserArgs)
      .then((user) => {
        return user;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }
}
