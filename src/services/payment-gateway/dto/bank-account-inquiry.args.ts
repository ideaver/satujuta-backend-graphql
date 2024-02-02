import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class BankAccountInquiryArgs {
  @Field(() => String, {
    description: 'The account number of the inquiry bank',
  })
  account_number: string;

  @Field(() => String, {
    description: 'Bank code of the inquiry bank',
  })
  bank_code: string;

  @Field(() => Int, {
    description: 'The inquiry key.',
  })
  inquiry_key: number;
}
