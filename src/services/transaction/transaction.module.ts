import { Module } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionResolver } from './transaction.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { TransactionController } from './transaction.controller';
import { Invoice } from 'src/@generated';
import { InvoiceModule } from '../invoice/invoice.module';

@Module({
  providers: [
    PrismaService,
    TransactionResolver,
    TransactionController,
    TransactionService,
  ],
  imports: [InvoiceModule],
  exports: [TransactionController],
})
export class TransactionModule {}
