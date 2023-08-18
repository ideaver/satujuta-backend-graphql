import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { OrderCreateInput } from 'src/@generated';
import { Prisma } from '@prisma/client';

@InputType()
export class OrderCreateArgs {
  select?: Prisma.OrderSelect | null;

  @Field(() => OrderCreateInput, { nullable: false })
  @Type(() => OrderCreateInput)
  data!: OrderCreateInput;
  //TODO: terapkan Case sensitive @Transform(({name}) => name.toUpperCase())
  //maybe use field middleware
}
