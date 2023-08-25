import { Field, InputType, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import {
  CartAvgAggregateInput,
  CartCountAggregateInput,
  CartMaxAggregateInput,
  CartMinAggregateInput,
  CartOrderByWithRelationInput,
  CartSumAggregateInput,
  CartWhereInput,
  CartWhereUniqueInput,
} from 'src/@generated';

@InputType()
export class CartAggregateArgs {
  @Field(() => CartWhereInput, { nullable: true })
  @Type(() => CartWhereInput)
  where?: CartWhereInput;

  @Field(() => [CartOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<CartOrderByWithRelationInput>;

  // @Field(() => CartWhereUniqueInput, { nullable: true })
  // cursor?: Prisma.AtLeast<
  //   CartWhereUniqueInput,
  //   'id' | 'orderById' | 'invoiceId'
  // >;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => CartCountAggregateInput, { nullable: true })
  _count?: CartCountAggregateInput;

  @Field(() => CartAvgAggregateInput, { nullable: true })
  _avg?: CartAvgAggregateInput;

  @Field(() => CartSumAggregateInput, { nullable: true })
  _sum?: CartSumAggregateInput;

  @Field(() => CartMinAggregateInput, { nullable: true })
  _min?: CartMinAggregateInput;

  @Field(() => CartMaxAggregateInput, { nullable: true })
  _max?: CartMaxAggregateInput;
}
