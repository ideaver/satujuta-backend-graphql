import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { Int } from '@nestjs/graphql';
import {
  CartWhereInput,
  CartOrderByWithRelationInput,
  CartWhereUniqueInput,
  CartScalarFieldEnum,
} from 'src/@generated';

@InputType()
export class CartFindManyArgs {
  // @Field(() => CartSelect, { nullable: true })
  select?: Prisma.CartSelect;

  @Field(() => CartWhereInput, { nullable: true })
  @Type(() => CartWhereInput)
  where?: InstanceType<typeof CartWhereInput>;
  @Field(() => [CartOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<CartOrderByWithRelationInput>;
  // @Field(() => CartWhereUniqueInput, {nullable:true})
  // cursor?: Prisma.AtLeast<CartWhereUniqueInput, 'id'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [CartScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof CartScalarFieldEnum>;
}
