import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  OrderAvgAggregateInput,
  OrderCountAggregateInput,
  OrderMaxAggregateInput,
  OrderMinAggregateInput,
  OrderOrderByWithRelationInput,
  OrderSumAggregateInput,
  OrderWhereInput,
  OrderWhereUniqueInput,
} from 'src/@generated';

@InputType()
export class OrderAggregateArgs {
  @Field(() => OrderWhereInput, { nullable: true })
  @Type(() => OrderWhereInput)
  where?: OrderWhereInput;

  @Field(() => [OrderOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<OrderOrderByWithRelationInput>;

  @Field(() => OrderWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<
    OrderWhereUniqueInput,
    'id' | 'orderById' | 'invoiceId'
  >;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => OrderCountAggregateInput, { nullable: true })
  _count?: OrderCountAggregateInput;

  @Field(() => OrderAvgAggregateInput, { nullable: true })
  _avg?: OrderAvgAggregateInput;

  @Field(() => OrderSumAggregateInput, { nullable: true })
  _sum?: OrderSumAggregateInput;

  @Field(() => OrderMinAggregateInput, { nullable: true })
  _min?: OrderMinAggregateInput;

  @Field(() => OrderMaxAggregateInput, { nullable: true })
  _max?: OrderMaxAggregateInput;
}
