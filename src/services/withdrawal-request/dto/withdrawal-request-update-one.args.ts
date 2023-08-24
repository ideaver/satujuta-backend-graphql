import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import {
  WithdrawalRequestUpdateInput,
  WithdrawalRequestWhereUniqueInput,
} from 'src/@generated';

@InputType()
export class WithdrawalRequestUpdateOneArgs {
  select?: Prisma.WithdrawalRequestSelect;

  @Field(() => WithdrawalRequestUpdateInput, { nullable: false })
  @Type(() => WithdrawalRequestUpdateInput)
  data!: InstanceType<typeof WithdrawalRequestUpdateInput>;
  @Field(() => WithdrawalRequestWhereUniqueInput, { nullable: false })
  @Type(() => WithdrawalRequestWhereUniqueInput)
  where!: Prisma.AtLeast<WithdrawalRequestWhereUniqueInput, 'id'>;
}
