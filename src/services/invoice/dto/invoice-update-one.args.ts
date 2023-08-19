import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { InvoiceUpdateInput, InvoiceWhereUniqueInput } from 'src/@generated';

@InputType()
export class InvoiceUpdateOneArgs {
  select?: Prisma.InvoiceSelect | null;

  @Field(() => InvoiceUpdateInput, { nullable: false })
  @Type(() => InvoiceUpdateInput)
  data!: InvoiceUpdateInput;

  @Field(() => InvoiceWhereUniqueInput, { nullable: false })
  @Type(() => InvoiceWhereUniqueInput)
  where!: Prisma.AtLeast<InvoiceWhereUniqueInput, 'id'>;
}
