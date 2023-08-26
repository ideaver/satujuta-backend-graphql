import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import {
  CreateOneUserNotificationArgs,
  UserNotification,
} from 'src/@generated';
import { UserNotificationFindManyArgs } from './dto/user-notification-find-many.args';
import { UserNotificationFindUniqueArgs } from './dto/user-notification-find-one.args';
import { UserNotificationUpdateOneArgs } from './dto/user-notification-update-one.args';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';

@Injectable()
export class UserNotificationService {
  constructor(private prisma: PrismaService) {}

  async createOne(
    userNotificationCreateArgs: CreateOneUserNotificationArgs,
  ): Promise<UserNotification | void> {
    return await this.prisma.userNotification
      .create(userNotificationCreateArgs)
      .then((userNotification) => {
        return userNotification;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async findMany(userNotificationFindManyArgs: UserNotificationFindManyArgs) {
    return this.prisma.userNotification
      .findMany(userNotificationFindManyArgs)
      .then((userNotifications) => {
        return userNotifications;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async findOne(
    userNotificationFindUniqueArgs: UserNotificationFindUniqueArgs,
  ): Promise<UserNotification | void> {
    return await this.prisma.userNotification
      .findUnique(userNotificationFindUniqueArgs)
      .then((userNotification) => {
        return userNotification;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async update(
    userNotificationUpdateOneArgs: UserNotificationUpdateOneArgs,
  ): Promise<UserNotification | void> {
    return this.prisma.userNotification
      .update(userNotificationUpdateOneArgs)
      .then((userNotification) => {
        return userNotification;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async remove(userNotificationId: number): Promise<boolean | void> {
    return await this.prisma.userNotification
      .delete({
        where: { id: userNotificationId },
      })
      .then(() => {
        return true;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }
}
