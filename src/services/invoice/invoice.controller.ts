import { InvoiceService } from './invoice.service';
import { InvoiceCreateArgs } from './dto/invoice-create-one.args';
import { InvoiceFindManyArgs } from './dto/invoice-find-many.args';
import { InvoiceFindUniqueArgs } from './dto/invoice-find-one.args';
import { InvoiceUpdateOneArgs } from './dto/invoice-update-one.args';
import { Prisma, ShippingStatus, User } from '@prisma/client';
import { Injectable, Logger } from '@nestjs/common';
import { Invoice } from 'src/@generated';

@Injectable()
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}
  private readonly logger = new Logger(InvoiceController.name);

  async createOne(
    invoiceCreateArgs: InvoiceCreateArgs,
  ): Promise<Invoice | void> {
    return await this.invoiceService.createOne(invoiceCreateArgs);
  }

  findMany(invoiceFindManyArgs: InvoiceFindManyArgs) {
    return this.invoiceService.findMany(invoiceFindManyArgs);
  }

  findOne(invoiceFindUniqueArgs: InvoiceFindUniqueArgs) {
    return this.invoiceService.findOne(invoiceFindUniqueArgs);
  }

  async updateOne(invoiceUpdateOneArgs: InvoiceUpdateOneArgs) {
    let invoiceUpdateArgsPrisma: Prisma.InvoiceUpdateArgs = {
      ...invoiceUpdateOneArgs,
    };

    return this.invoiceService.update(invoiceUpdateArgsPrisma);
  }

  remove(invoiceId: number) {
    return this.invoiceService.remove(invoiceId);
  }

  count(invoiceFindManyArgs: InvoiceFindManyArgs) {
    return this.invoiceService.count(invoiceFindManyArgs);
  }
}
