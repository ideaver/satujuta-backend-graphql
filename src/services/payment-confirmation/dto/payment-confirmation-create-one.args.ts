import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { PaymentConfirmationCreateInput } from 'src/@generated';
import { Prisma } from '@prisma/client';

@InputType()
export class PaymentConfirmationCreateArgs {
  select?: Prisma.PaymentConfirmationSelect;

  @Field(() => PaymentConfirmationCreateInput, { nullable: false })
  @Type(() => PaymentConfirmationCreateInput)
  data!: PaymentConfirmationCreateInput;
  //TODO: terapkan Case sensitive @Transform(({name}) => name.toUpperCase())
  //maybe use field middleware
}
