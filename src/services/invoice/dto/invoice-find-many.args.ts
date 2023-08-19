import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { Int } from '@nestjs/graphql';
import {
  InvoiceWhereInput,
  InvoiceInvoiceByWithRelationInput,
  InvoiceWhereUniqueInput,
  InvoiceScalarFieldEnum,
} from 'src/@generated';

@InputType()
export class InvoiceFindManyArgs {
  select?: Prisma.InvoiceSelect | null;

  @Field(() => InvoiceWhereInput, { nullable: true })
  @Type(() => InvoiceWhereInput)
  where?: InvoiceWhereInput;

  @Field(() => [InvoiceInvoiceByWithRelationInput], { nullable: true })
  orderBy?: Array<InvoiceInvoiceByWithRelationInput>;

  // @Field(() => InvoiceWhereUniqueInput, { nullable: true })
  // cursor?: Prisma.AtLeast<
  //   InvoiceWhereUniqueInput,
  //   'id' | 'email' | 'addressId' | 'whatsappNumber'
  // >;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [InvoiceScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof InvoiceScalarFieldEnum>;
}
