import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserNotificationService {
  constructor(private prisma: PrismaService) {}

  async createOne(
    userNotificationCreateArgs: Prisma.UserNotificationCreateArgs,
  ) {
    try {
      return await this.prisma.userNotification.create(
        userNotificationCreateArgs,
      );
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(
    userNotificationCreateManyArgs: Prisma.UserNotificationCreateManyArgs,
  ) {
    try {
      return await this.prisma.userNotification.createMany(
        userNotificationCreateManyArgs,
      );
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(
    userNotificationFindUniqueArgs: Prisma.UserNotificationFindUniqueArgs,
  ) {
    try {
      return await this.prisma.userNotification.findUnique(
        userNotificationFindUniqueArgs,
      );
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(
    userNotificationFindManyArgs: Prisma.UserNotificationFindManyArgs,
  ) {
    try {
      return await this.prisma.userNotification.findMany(
        userNotificationFindManyArgs,
      );
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(
    userNotificationFindFirstArgs: Prisma.UserNotificationFindFirstArgs,
  ) {
    try {
      return await this.prisma.userNotification.findFirst(
        userNotificationFindFirstArgs,
      );
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(
    userNotificationUpdateOneArgs: Prisma.UserNotificationUpdateArgs,
  ) {
    try {
      return await this.prisma.userNotification.update(
        userNotificationUpdateOneArgs,
      );
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(
    userNotificationUpdateManyArgs: Prisma.UserNotificationUpdateManyArgs,
  ) {
    try {
      return await this.prisma.userNotification.updateMany(
        userNotificationUpdateManyArgs,
      );
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(userNotificationDeleteArgs: Prisma.UserNotificationDeleteArgs) {
    try {
      await this.prisma.userNotification.delete(userNotificationDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(
    userNotificationDeleteManyArgs: Prisma.UserNotificationDeleteManyArgs,
  ) {
    try {
      await this.prisma.userNotification.deleteMany(
        userNotificationDeleteManyArgs,
      );
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(
    userNotificationAggregateArgs: Prisma.UserNotificationAggregateArgs,
  ) {
    try {
      return await this.prisma.userNotification.aggregate(
        userNotificationAggregateArgs,
      );
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(userNotificationCountArgs: Prisma.UserNotificationCountArgs) {
    try {
      return await this.prisma.userNotification.count(
        userNotificationCountArgs,
      );
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
