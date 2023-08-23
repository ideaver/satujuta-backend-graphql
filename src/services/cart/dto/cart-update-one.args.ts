import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { CartUpdateInput, CartWhereUniqueInput } from 'src/@generated';

@InputType()
export class CartUpdateOneArgs {
  select?: Prisma.CartSelect;

  @Field(() => CartUpdateInput, { nullable: false })
  @Type(() => CartUpdateInput)
  data!: InstanceType<typeof CartUpdateInput>;
  @Field(() => CartWhereUniqueInput, { nullable: false })
  @Type(() => CartWhereUniqueInput)
  where!: Prisma.AtLeast<CartWhereUniqueInput, 'id'>;
}
