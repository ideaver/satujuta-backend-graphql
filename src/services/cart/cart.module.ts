import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartResolver } from './cart.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { CartController } from './cart.controller';

@Module({
  providers: [PrismaService, CartResolver, CartController, CartService],
  exports: [CartController],
})
export class CartModule {}
