import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { OrderWhereUniqueInput } from 'src/@generated';

@InputType()
export class OrderFindUniqueArgs {
  select?: Prisma.OrderSelect | null;

  @Field(() => OrderWhereUniqueInput, { nullable: false })
  @Type(() => OrderWhereUniqueInput)
  where!: Prisma.AtLeast<
    OrderWhereUniqueInput,
    'id' | 'orderById' | 'invoiceId'
  >;
}
