import { Module } from '@nestjs/common';
import { UserNotificationService } from './user-notification.service';
import { UserNotificationResolver } from './user-notification.resolver';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  providers: [PrismaService,UserNotificationResolver, UserNotificationService]
})
export class UserNotificationModule {}
