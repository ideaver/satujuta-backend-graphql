import { Module } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { InvoiceResolver } from './invoice.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { InvoiceController } from './invoice.controller';

@Module({
  providers: [
    PrismaService,
    InvoiceResolver,
    InvoiceController,
    InvoiceService,
  ],
  exports: [InvoiceController],
})
export class InvoiceModule {}
