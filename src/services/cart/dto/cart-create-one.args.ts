import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { CartCreateInput } from 'src/@generated';
import { Prisma } from '@prisma/client';

@InputType()
export class CartCreateArgs {
  select?: Prisma.CartSelect;

  @Field(() => CartCreateInput, { nullable: false })
  @Type(() => CartCreateInput)
  data!: CartCreateInput;
}
