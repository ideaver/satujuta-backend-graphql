import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class BankAccountInquiry {
  @Field()
  bank_code: string;

  @Field()
  account_number: string;

  @Field()
  account_holder: string;

  @Field()
  status: string;

  @Field()
  inquiry_key: string;
}
