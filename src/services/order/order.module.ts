import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderResolver } from './order.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { OrderController } from './order.controller';
import { UserModule } from '../user/user.module';

@Module({
  providers: [PrismaService, OrderResolver, OrderController, OrderService],
  exports: [OrderController],
  imports: [UserModule],
})
export class OrderModule {}
