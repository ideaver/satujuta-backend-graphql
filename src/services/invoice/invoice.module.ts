import { Module } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { InvoiceResolver } from './invoice.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { InvoiceController } from './invoice.controller';
import { UserModule } from '../user/user.module';

@Module({
  providers: [
    PrismaService,
    InvoiceResolver,
    InvoiceService,
    InvoiceController,
  ],
  imports: [UserModule],
})
export class InvoiceModule {}
