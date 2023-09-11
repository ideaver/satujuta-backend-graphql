// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateInvoice,
  CreateManyInvoiceArgs,
  CreateOneInvoiceArgs,
  DeleteManyInvoiceArgs,
  DeleteOneInvoiceArgs,
  FindFirstInvoiceArgs,
  FindManyInvoiceArgs,
  FindUniqueInvoiceArgs,
  Invoice,
  InvoiceAggregateArgs,
  UpdateManyInvoiceArgs,
  UpdateOneInvoiceArgs,
} from 'src/@generated';
import { InvoiceController } from './invoice.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface InvoiceSelect {
  select: Prisma.InvoiceSelect;
}

@Resolver(() => Invoice)
export class InvoiceResolver {
  constructor(private readonly invoiceController: InvoiceController) {}

  @Mutation(() => Invoice, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async invoiceCreateOne(
    @Args()
    invoiceCreateArgs: CreateOneInvoiceArgs,
    @Relations() relations: InvoiceSelect,
  ): Promise<Invoice | void> {
    return await this.invoiceController.createOne({
      ...invoiceCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async invoiceCreateMany(
    @Args()
    createManyInvoiceArgs: CreateManyInvoiceArgs,
  ) {
    return await this.invoiceController.createMany(createManyInvoiceArgs);
  }

  @Query(() => Invoice, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  invoiceFindOne(
    @Args()
    invoiceFindUniqueArgs: FindUniqueInvoiceArgs,
    @Relations() relations: InvoiceSelect,
  ): Promise<Invoice | void> {
    return this.invoiceController.findOne({
      ...invoiceFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [Invoice], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  invoiceFindMany(
    @Args() invoiceFindManyArgs: FindManyInvoiceArgs,
    @Relations() relations: InvoiceSelect,
  ) {
    return this.invoiceController.findMany({
      ...invoiceFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => Invoice, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  invoiceFindFirst(
    @Args()
    findFirstInvoiceArgs: FindFirstInvoiceArgs,
    @Relations() relations: InvoiceSelect,
  ): Promise<Invoice | void> {
    return this.invoiceController.findFirst({
      ...findFirstInvoiceArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Invoice, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async invoiceUpdateOne(
    @Args() invoiceUpdateOneArgs: UpdateOneInvoiceArgs,
    @Relations() relations: InvoiceSelect,
  ) {
    return this.invoiceController.updateOne({
      ...replaceNullWithUndefined(invoiceUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => Invoice, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async invoiceUpdateMany(
    @Args() updateManyInvoiceArgs: UpdateManyInvoiceArgs,
  ) {
    return this.invoiceController.updateMany(updateManyInvoiceArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async invoiceDelete(
    @Args() deleteOneInvoiceArgs: DeleteOneInvoiceArgs,
    @Relations() relations: InvoiceSelect,
  ) {
    return this.invoiceController.delete({
      ...deleteOneInvoiceArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async invoiceDeleteMany(
    @Args() deleteManyInvoiceArgs: DeleteManyInvoiceArgs,
  ) {
    return this.invoiceController.deleteMany(deleteManyInvoiceArgs);
  }

  @Query(() => AggregateInvoice, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  invoiceAggregate(@Args() invoiceAggregateArgs: InvoiceAggregateArgs) {
    return this.invoiceController.aggregate(invoiceAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  invoiceCount(@Args() invoiceCountAggregateInput: FindManyInvoiceArgs) {
    return this.invoiceController.count(invoiceCountAggregateInput);
  }
}
