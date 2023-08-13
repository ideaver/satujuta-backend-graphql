import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { Int } from '@nestjs/graphql';
import {
  OrderWhereInput,
  OrderOrderByWithRelationInput,
  OrderWhereUniqueInput,
  OrderScalarFieldEnum,
} from 'src/@generated';

@InputType()
export class OrderFindManyArgs {
  // @Field(() => OrderSelect, { nullable: true })
  select?: Prisma.OrderSelect;

  @Field(() => OrderWhereInput, {nullable:true})
  @Type(() => OrderWhereInput)
  where?: InstanceType<typeof OrderWhereInput>;
  @Field(() => [OrderOrderByWithRelationInput], {nullable:true})
  orderBy?: Array<OrderOrderByWithRelationInput>;
  // @Field(() => OrderWhereUniqueInput, {nullable:true})
  // cursor?: Prisma.AtLeast<OrderWhereUniqueInput, 'id'>;
  @Field(() => Int, {nullable:true})
  take?: number;
  @Field(() => Int, {nullable:true})
  skip?: number;
  @Field(() => [OrderScalarFieldEnum], {nullable:true})
  distinct?: Array<keyof typeof OrderScalarFieldEnum>;
}
