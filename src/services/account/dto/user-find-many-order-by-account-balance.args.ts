import { Field, Float, InputType, ObjectType } from '@nestjs/graphql';
import { AccountCategory, User } from 'src/@generated';

@ObjectType()
export class UserFindManyOrderByAccountBalance {
  @Field(() => User)
  user: User;

  @Field(() => Float)
  totalBalance: number;
}

@InputType()
export class UserFindManyOrderByAccountBalanceArgs {
  @Field(() => AccountCategory, { nullable: false })
  accountCategory!: keyof typeof AccountCategory;
}
