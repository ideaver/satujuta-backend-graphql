import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ShippingCreateInput } from 'src/@generated';
import { Prisma } from '@prisma/client';

@InputType()
export class ShippingCreateArgs {
  select?: Prisma.ShippingSelect;

  @Field(() => ShippingCreateInput, { nullable: false })
  @Type(() => ShippingCreateInput)
  data!: ShippingCreateInput;
  //TODO: terapkan Case sensitive @Transform(({name}) => name.toUpperCase())
  //maybe use field middleware
}
