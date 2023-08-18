import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderResolver } from './order.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { OrderController } from './order.controller';

@Module({
  providers: [PrismaService, OrderResolver, OrderService, OrderController],
})
export class OrderModule {}
