import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { InvoiceCreateArgs } from './dto/invoice-create-one.args';
import { InvoiceFindManyArgs } from './dto/invoice-find-many.args';
import { InvoiceFindUniqueArgs } from './dto/invoice-find-one.args';
import { InvoiceUpdateOneArgs } from './dto/invoice-update-one.args';
import { Prisma } from '@prisma/client';
import { InvoiceController } from './invoice.controller';
import { Invoice } from 'src/@generated';
import { Relations } from 'src/utils/relations.decorator';

interface InvoiceSelect {
  select: Prisma.InvoiceSelect;
}

@Resolver(() => Invoice)
export class InvoiceResolver {
  constructor(private readonly invoiceController: InvoiceController) {}

  // @Mutation(() => Invoice, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async invoiceCreateOne(
  //   @Args('invoiceCreateArgs') invoiceCreateArgs: InvoiceCreateArgs,
  //   @Relations() relations: InvoiceSelect,
  // ): Promise<Invoice | void> {
  //   //Auto implement prisma select from graphql query info
  //   invoiceCreateArgs.select = relations.select;

  //   return await this.invoiceController.createOne(invoiceCreateArgs);
  // }

  @Query(() => [Invoice], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  invoiceFindMany(
    @Args('invoiceFindManyArgs') invoiceFindManyArgs: InvoiceFindManyArgs,
    @Relations() relations: InvoiceSelect,
  ) {
    //Auto implement prisma select from graphql query info
    invoiceFindManyArgs.select = relations.select;
    return this.invoiceController.findMany(invoiceFindManyArgs);
  }

  @Query(() => Invoice, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  invoiceFindOne(
    @Args('invoiceFindUniqueArgs')
    invoiceFindUniqueArgs: InvoiceFindUniqueArgs,
    @Relations() relations: InvoiceSelect,
  ) {
    //Auto implement prisma select from graphql query info
    invoiceFindUniqueArgs.select = relations.select;
    return this.invoiceController.findOne(invoiceFindUniqueArgs);
  }

  @Mutation(() => Invoice, { description: 'Deskripsinya ada disini loh' })
  invoiceUpdateOne(
    @Args('invoiceUpdateOneArgs') invoiceUpdateOneArgs: InvoiceUpdateOneArgs,
    @Relations() relations: InvoiceSelect,
  ) {
    invoiceUpdateOneArgs.select = relations.select;
    return this.invoiceController.updateOne(invoiceUpdateOneArgs);
  }

  // @Mutation(() => Invoice, {
  //   nullable: true,
  //   description:
  //     'Hanya berupa softdelete, artinya semua data tetap ada di database. field deleteAt pada entitas invoice akan terisi. select: { id: true, firstName: true, deletedAt: true }',
  // })
  // invoiceRemove(@Args('invoiceId') invoiceId: string) {
  //   return this.invoiceController.remove(invoiceId);
  // }

  @Query(() => Int, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  invoiceCount(
    @Args('invoiceFindManyArgs', { nullable: true })
    invoiceFindManyArgs: InvoiceFindManyArgs,
  ) {
    return this.invoiceController.count(invoiceFindManyArgs);
  }
}
