import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { UserNotificationService } from './user-notification.service';

@Injectable()
export class UserNotificationController {
  constructor(
    private readonly userNotificationService: UserNotificationService,
  ) {}

  async createOne(
    userNotificationCreateArgs: Prisma.UserNotificationCreateArgs,
  ) {
    return await this.userNotificationService.createOne(
      userNotificationCreateArgs,
    );
  }

  async createMany(
    userNotificationCreateManyArgs: Prisma.UserNotificationCreateManyArgs,
  ) {
    return await this.userNotificationService.createMany(
      userNotificationCreateManyArgs,
    );
  }

  async findOne(
    userNotificationFindUniqueArgs: Prisma.UserNotificationFindUniqueArgs,
  ) {
    return await this.userNotificationService.findOne(
      userNotificationFindUniqueArgs,
    );
  }

  async findMany(
    userNotificationFindManyArgs: Prisma.UserNotificationFindManyArgs,
  ) {
    return await this.userNotificationService.findMany(
      userNotificationFindManyArgs,
    );
  }

  async findFirst(
    userNotificationFindFirstArgs: Prisma.UserNotificationFindFirstArgs,
  ) {
    return await this.userNotificationService.findFirst(
      userNotificationFindFirstArgs,
    );
  }

  async updateOne(
    userNotificationUpdateOneArgs: Prisma.UserNotificationUpdateArgs,
  ) {
    return await this.userNotificationService.updateOne(
      userNotificationUpdateOneArgs,
    );
  }

  async updateMany(
    userNotificationUpdateManyArgs: Prisma.UserNotificationUpdateManyArgs,
  ) {
    return await this.userNotificationService.updateMany(
      userNotificationUpdateManyArgs,
    );
  }

  async delete(userNotificationDeleteArgs: Prisma.UserNotificationDeleteArgs) {
    return await this.userNotificationService.delete(
      userNotificationDeleteArgs,
    );
  }

  async deleteMany(
    userNotificationDeleteManyArgs: Prisma.UserNotificationDeleteManyArgs,
  ) {
    return await this.userNotificationService.deleteMany(
      userNotificationDeleteManyArgs,
    );
  }

  async aggregate(
    userNotificationAggregateArgs: Prisma.UserNotificationAggregateArgs,
  ) {
    return await this.userNotificationService.aggregate(
      userNotificationAggregateArgs,
    );
  }

  async count(userNotificationCountArgs: Prisma.UserNotificationCountArgs) {
    return await this.userNotificationService.count(userNotificationCountArgs);
  }
}
