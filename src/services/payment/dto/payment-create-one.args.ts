import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { PaymentCreateInput } from 'src/@generated';
import { Prisma } from '@prisma/client';

@InputType()
export class PaymentCreateArgs {
  select?: Prisma.PaymentSelect;

  @Field(() => PaymentCreateInput, { nullable: false })
  @Type(() => PaymentCreateInput)
  data!: PaymentCreateInput;
  //TODO: terapkan Case sensitive @Transform(({name}) => name.toUpperCase())
  //maybe use field middleware
}
