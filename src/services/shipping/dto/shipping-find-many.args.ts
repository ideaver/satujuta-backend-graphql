import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { Int } from '@nestjs/graphql';
import {
  ShippingWhereInput,
  ShippingOrderByWithRelationInput,
  ShippingWhereUniqueInput,
  ShippingScalarFieldEnum,
} from 'src/@generated';

@InputType()
export class ShippingFindManyArgs {
  // @Field(() => ShippingSelect, { nullable: true })
  select?: Prisma.ShippingSelect;

  @Field(() => ShippingWhereInput, {nullable:true})
  @Type(() => ShippingWhereInput)
  where?: InstanceType<typeof ShippingWhereInput>;
  @Field(() => [ShippingOrderByWithRelationInput], {nullable:true})
  orderBy?: Array<ShippingOrderByWithRelationInput>;
  // @Field(() => ShippingWhereUniqueInput, {nullable:true})
  // cursor?: Prisma.AtLeast<ShippingWhereUniqueInput, 'id'>;
  @Field(() => Int, {nullable:true})
  take?: number;
  @Field(() => Int, {nullable:true})
  skip?: number;
  @Field(() => [ShippingScalarFieldEnum], {nullable:true})
  distinct?: Array<keyof typeof ShippingScalarFieldEnum>;
}
