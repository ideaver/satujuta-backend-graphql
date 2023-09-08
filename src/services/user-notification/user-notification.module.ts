import { Module } from '@nestjs/common';
import { UserNotificationService } from './user-notification.service';
import { UserNotificationResolver } from './user-notification.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { UserNotificationController } from './user-notification.controller';

@Module({
  providers: [
    PrismaService,
    UserNotificationResolver,
    UserNotificationController,
    UserNotificationService,
  ],
  exports: [UserNotificationController],
})
export class UserNotificationModule {}
