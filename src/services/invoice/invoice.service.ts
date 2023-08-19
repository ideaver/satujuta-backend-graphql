import { Injectable } from '@nestjs/common';
import { InvoiceCreateArgs } from './dto/invoice-create-one.args';
import { InvoiceFindManyArgs as InvoiceFindManyArgs } from './dto/invoice-find-many.args';
import { InvoiceFindUniqueArgs } from './dto/invoice-find-one.args';
import { InvoiceUpdateOneArgs } from './dto/invoice-update-one.args';
import { Prisma } from '@prisma/client';

@Injectable()
export class InvoiceService {
  constructor(private prisma: PrismaService) {}

  async createOne(
    invoiceCreateArgs: Prisma.InvoiceCreateArgs,
  ): Promise<Invoice | void> {
    return await this.prisma.invoice
      .create(invoiceCreateArgs)
      .then((invoice) => {
        return invoice;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  async findMany(invoiceFindManyArgs: InvoiceFindManyArgs) {
    return this.prisma.invoice
      .findMany(invoiceFindManyArgs)
      .then((invoices) => {
        return invoices;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  async findOne(
    invoiceFindUniqueArgs: InvoiceFindUniqueArgs,
  ): Promise<Invoice | void> {
    return await this.prisma.invoice
      .findUnique(invoiceFindUniqueArgs)
      .then((invoice) => {
        return invoice;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  async update(
    invoiceUpdateArgs: Prisma.InvoiceUpdateArgs,
  ): Promise<Invoice | void> {
    return this.prisma.invoice
      .update(invoiceUpdateArgs)
      .then((invoice) => {
        return invoice;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  async remove(invoiceId: number) {
    return await this.prisma.invoice
      .delete({
        where: { id: invoiceId },
      })
      .then((invoice) => {
        return invoice;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  async count(findManyInvoiceArgs: FindManyInvoiceArgs) {
    return await this.prisma.invoice
      .count(findManyInvoiceArgs)
      .then((invoice) => {
        return invoice;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }
}
