import { ObjectType, Field, InputType, Int } from '@nestjs/graphql';
import { AccountCategory } from 'src/@generated';
import { Period } from 'src/model/period.enum';

@ObjectType()
export class AccountBalanceByCustomPeriodQuery {
  @Field(() => String, { nullable: true })
  period: string;

  @Field(() => Int, { nullable: true })
  total_balance: number;
}

@InputType()
export class AccountBalanceByCustomPeriodArgs {
  @Field(() => Int)
  accountId: number;

  @Field(() => Date)
  start: Date;

  @Field(() => Date)
  end: Date;

  @Field(() => Period)
  period: Period;
}
