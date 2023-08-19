import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { UserController } from './user.controller';
import { ItemModule } from '../item/item.module';

@Module({
  providers: [PrismaService, UserResolver, UserService, UserController],
  imports: [ItemModule],
  exports: [UserService],
})
export class UserModule {}
