import { Module } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionResolver } from './transaction.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { TransactionController } from './transaction.controller';
import { InvoiceModule } from '../invoice/invoice.module';
import { TransactionListener } from 'src/event-listeners/transaction.listener';

@Module({
  providers: [
    PrismaService,
    TransactionResolver,
    TransactionController,
    TransactionService,
    TransactionListener,
  ],
  imports: [InvoiceModule],
  exports: [TransactionController],
})
export class TransactionModule {}
