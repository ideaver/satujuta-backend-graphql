import { Module } from '@nestjs/common';
import { PointTransactionService } from './point-transaction.service';
import { PointTransactionResolver } from './point-transaction.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { PointTransactionController } from './point-transaction.controller';

@Module({
  providers: [
    PrismaService,
    PointTransactionResolver,
    PointTransactionController,
    PointTransactionService,
  ],
  exports: [PointTransactionController],
})
export class PointTransactionModule {}
