import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { InvoiceService } from './invoice.service';

@Injectable()
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  async createOne(invoiceCreateArgs: Prisma.InvoiceCreateArgs) {
    return await this.invoiceService.createOne(invoiceCreateArgs);
  }

  async createMany(invoiceCreateManyArgs: Prisma.InvoiceCreateManyArgs) {
    return await this.invoiceService.createMany(invoiceCreateManyArgs);
  }

  async findOne(invoiceFindUniqueArgs: Prisma.InvoiceFindUniqueArgs) {
    return await this.invoiceService.findOne(invoiceFindUniqueArgs);
  }

  async findMany(invoiceFindManyArgs: Prisma.InvoiceFindManyArgs) {
    return await this.invoiceService.findMany(invoiceFindManyArgs);
  }

  async findFirst(invoiceFindFirstArgs: Prisma.InvoiceFindFirstArgs) {
    return await this.invoiceService.findFirst(invoiceFindFirstArgs);
  }

  async updateOne(invoiceUpdateOneArgs: Prisma.InvoiceUpdateArgs) {
    return await this.invoiceService.updateOne(invoiceUpdateOneArgs);
  }

  async updateMany(invoiceUpdateManyArgs: Prisma.InvoiceUpdateManyArgs) {
    return await this.invoiceService.updateMany(invoiceUpdateManyArgs);
  }

  async delete(invoiceDeleteArgs: Prisma.InvoiceDeleteArgs) {
    return await this.invoiceService.delete(invoiceDeleteArgs);
  }

  async deleteMany(invoiceDeleteManyArgs: Prisma.InvoiceDeleteManyArgs) {
    return await this.invoiceService.deleteMany(invoiceDeleteManyArgs);
  }

  async aggregate(invoiceAggregateArgs: Prisma.InvoiceAggregateArgs) {
    return await this.invoiceService.aggregate(invoiceAggregateArgs);
  }

  async count(invoiceCountArgs: Prisma.InvoiceCountArgs) {
    return await this.invoiceService.count(invoiceCountArgs);
  }
}
