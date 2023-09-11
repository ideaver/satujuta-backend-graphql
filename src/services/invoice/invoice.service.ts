import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class InvoiceService {
  constructor(private prisma: PrismaService) {}

  async createOne(invoiceCreateArgs: Prisma.InvoiceCreateArgs) {
    try {
      return await this.prisma.invoice.create(invoiceCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(invoiceCreateManyArgs: Prisma.InvoiceCreateManyArgs) {
    try {
      return await this.prisma.invoice.createMany(invoiceCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(invoiceFindUniqueArgs: Prisma.InvoiceFindUniqueArgs) {
    try {
      return await this.prisma.invoice.findUnique(invoiceFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(invoiceFindManyArgs: Prisma.InvoiceFindManyArgs) {
    try {
      return await this.prisma.invoice.findMany(invoiceFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(invoiceFindFirstArgs: Prisma.InvoiceFindFirstArgs) {
    try {
      return await this.prisma.invoice.findFirst(invoiceFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(invoiceUpdateOneArgs: Prisma.InvoiceUpdateArgs) {
    try {
      return await this.prisma.invoice.update(invoiceUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(invoiceUpdateManyArgs: Prisma.InvoiceUpdateManyArgs) {
    try {
      return await this.prisma.invoice.updateMany(invoiceUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(invoiceDeleteArgs: Prisma.InvoiceDeleteArgs) {
    try {
      await this.prisma.invoice.delete(invoiceDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(invoiceDeleteManyArgs: Prisma.InvoiceDeleteManyArgs) {
    try {
      await this.prisma.invoice.deleteMany(invoiceDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(invoiceAggregateArgs: Prisma.InvoiceAggregateArgs) {
    try {
      return await this.prisma.invoice.aggregate(invoiceAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(invoiceCountArgs: Prisma.InvoiceCountArgs) {
    try {
      return await this.prisma.invoice.count(invoiceCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
