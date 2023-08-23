import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartResolver } from './cart.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { PointTransactionModule } from '../point-transaction/point-transaction.module';
import { CartController } from './cart.controller';
import { UserModule } from '../user/user.module';

@Module({
  providers: [PrismaService, CartResolver, CartController, CartService],
})
export class CartModule {}
