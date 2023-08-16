import { ObjectType, Field, InputType, Int } from '@nestjs/graphql';
import { AccountCategory } from 'src/@generated';

@ObjectType()
export class AccountMonthlyBalanceQuery {
  @Field(() => String, { nullable: true })
  period: string;

  @Field(() => Int, { nullable: true })
  total_balance: number;
}

@InputType()
export class AccountMonthlyBalanceArgs {
  @Field(() => Int, { nullable: false })
  accountId: number;
  @Field(() => Int, { nullable: false })
  year: number;
}
