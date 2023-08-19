import { InvoiceService } from './invoice.service';
import { InvoiceCreateArgs } from './dto/invoice-create-one.args';
import { InvoiceFindManyArgs } from './dto/invoice-find-many.args';
import { InvoiceFindUniqueArgs } from './dto/invoice-find-one.args';
import { InvoiceUpdateOneArgs } from './dto/invoice-update-one.args';
import { Prisma, ShippingStatus, User } from '@prisma/client';
import { Injectable, Logger } from '@nestjs/common';
import { Invoice } from 'src/@generated';
import { UserService } from '../user/user.service';

@Injectable()
export class InvoiceController {
  constructor(
    private readonly invoiceService: InvoiceService,
    private readonly userService: UserService,
  ) {}
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

    //Set Shipping Status to DELIVERING
    invoiceUpdateArgsPrisma.data.shipping.create.shippingStatus =
      ShippingStatus.DELIVERING;

    let getUserId: string;

    //Set Shipping Address to User's Address
    if (invoiceUpdateArgsPrisma.where.invoiceById) {
      getUserId = invoiceUpdateArgsPrisma.where.invoiceById;
    } else {
      //Get User AddressId from invoiceId
      const getInvoiceById: void | Invoice = await this.invoiceService.findOne({
        where: {
          id: invoiceUpdateArgsPrisma.where.id,
        },
        select: { invoiceById: true },
      });

      //Get User AddressId from invoiceId
      if (getInvoiceById) {
        getUserId = getInvoiceById.invoiceById;
      }
    }

    //Get User AddressId from userId
    const getUserById: void | User = await this.userService.findOne({
      where: { id: getUserId },
      select: { addressId: true },
    });

    //Set Shipping Address to User's Address
    invoiceUpdateArgsPrisma.data.shipping.create.address = {
      connect: {
        id: getUserById ? getUserById.addressId : undefined,
      },
    };

    // this.logger.log(invoiceUpdateArgsPrisma);
    return this.invoiceService.update(invoiceUpdateArgsPrisma);
  }

  remove(invoiceId: number) {
    return this.invoiceService.remove(invoiceId);
  }

  count(invoiceFindManyArgs: InvoiceFindManyArgs) {
    return this.invoiceService.count(invoiceFindManyArgs);
  }
}
