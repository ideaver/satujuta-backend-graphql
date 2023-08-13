import { Module } from '@nestjs/common';
import { PointTransactionService } from './point-transaction.service';
import { PointTransactionResolver } from './point-transaction.resolver';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  providers: [PrismaService,PointTransactionResolver, PointTransactionService]
})
export class PointTransactionModule {}
