import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { WithdrawalRequestCreateInput } from 'src/@generated';
import { Prisma } from '@prisma/client';

@InputType()
export class WithdrawalRequestCreateArgs {
  select?: Prisma.WithdrawalRequestSelect;

  @Field(() => WithdrawalRequestCreateInput, { nullable: false })
  @Type(() => WithdrawalRequestCreateInput)
  data!: WithdrawalRequestCreateInput;
}
