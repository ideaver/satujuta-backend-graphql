import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderResolver } from './order.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { OrderController } from './order.controller';
import { UserController } from '../user/user.controller';

@Module({
  providers: [PrismaService, OrderResolver, OrderController, OrderService],
  exports: [OrderController],
  imports: [UserController],
})
export class OrderModule {}
