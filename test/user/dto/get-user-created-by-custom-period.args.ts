import { ObjectType, Field, InputType, Int, Float } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { AccountCategory, UserWhereInput } from 'src/@generated';
import { Period } from 'src/model/period.enum';

@ObjectType()
export class UserCreatedByCustomPeriodQuery {
  @Field(() => String, { nullable: true })
  period: string;

  @Field(() => Float, { nullable: true })
  totalUser: number;
}

@InputType()
export class UserCreatedByCustomPeriodArgs {
  @Field(() => Date)
  start: Date;

  @Field(() => Date)
  end: Date;

  @Field(() => Period)
  period: Period;

  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: UserWhereInput;
}
