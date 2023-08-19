import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { InvoiceWhereUniqueInput } from 'src/@generated';

@InputType()
export class InvoiceFindUniqueArgs {
  select?: Prisma.InvoiceSelect | null;

  @Field(() => InvoiceWhereUniqueInput, { nullable: false })
  @Type(() => InvoiceWhereUniqueInput)
  where!: Prisma.AtLeast<InvoiceWhereUniqueInput, 'id'>;
}
