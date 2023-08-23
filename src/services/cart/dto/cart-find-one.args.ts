import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { CartWhereUniqueInput } from 'src/@generated';

@InputType()
export class CartFindUniqueArgs {
  select?: Prisma.CartSelect;

  @Field(() => CartWhereUniqueInput, { nullable: false })
  @Type(() => CartWhereUniqueInput)
  where!: Prisma.AtLeast<CartWhereUniqueInput, 'id'>;
}
