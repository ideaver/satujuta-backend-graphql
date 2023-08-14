import { Module } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionResolver } from './transaction.resolver';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  providers: [PrismaService,TransactionResolver, TransactionService]
})
export class TransactionModule {}