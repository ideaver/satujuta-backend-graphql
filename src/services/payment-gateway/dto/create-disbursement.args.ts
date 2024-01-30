import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateDisbursementArgs {
  @Field(() => String, {
    description: 'The account number of the recipient.',
  })
  account_number: string;

  @Field(() => String, {
    description: 'Bank code of the recipient bank.',
  })
  bank_code: string;

  @Field(() => Int, {
    description: 'The amount of money to be disbursed',
  })
  amount: number;
}
