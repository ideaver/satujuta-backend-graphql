import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { WithdrawalRequestWhereUniqueInput } from 'src/@generated';

@InputType()
export class WithdrawalRequestFindUniqueArgs {
  select?: Prisma.WithdrawalRequestSelect;

  @Field(() => WithdrawalRequestWhereUniqueInput, { nullable: false })
  @Type(() => WithdrawalRequestWhereUniqueInput)
  where!: Prisma.AtLeast<WithdrawalRequestWhereUniqueInput, 'id'>;
}
