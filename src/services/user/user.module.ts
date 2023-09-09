import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { UserController } from './user.controller';
import { ItemModule } from '../item/item.module';
import { UserListener } from '../../event-listeners/user.listener';

@Module({
  providers: [
    PrismaService,
    UserResolver,
    UserController,
    UserService,
    UserListener,
  ],
  imports: [ItemModule],
  exports: [UserService, UserController],
})
export class UserModule {}
