import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Customer {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  address: string;

  @Field({ nullable: true })
  phone: string;
}

@ObjectType()
export class ReceiverBankAccount {
  @Field({ nullable: true })
  account_number: string;

  @Field({ nullable: true })
  account_type: string;

  @Field({ nullable: true })
  bank_code: string;

  @Field({ nullable: true })
  account_holder: string;

  @Field({ nullable: true })
  qr_code_data: string;
}

@ObjectType()
export class BillPayment {
  @Field()
  id: number;

  @Field()
  amount: number;

  @Field({ nullable: true })
  unique_code: number;

  @Field()
  status: string;

  @Field({ nullable: true })
  sender_bank: string;

  @Field({ nullable: true })
  sender_bank_type: string;

  @Field(() => ReceiverBankAccount)
  receiver_bank_account: ReceiverBankAccount;

  @Field({ nullable: true })
  user_address: string;

  @Field({ nullable: true })
  user_phone: string;

  @Field()
  created_at: number;
}

@ObjectType()
export class BillEntity {
  @Field()
  link_id: number;

  @Field()
  link_url: string;

  @Field()
  title: string;

  @Field()
  type: string;

  @Field({ nullable: true })
  amount: number;

  @Field({ nullable: true })
  redirect_url: string;

  @Field({ nullable: true })
  expired_date: Date;

  @Field()
  created_from: string;

  @Field()
  status: string;

  @Field()
  step: number;

  @Field({ nullable: true })
  is_address_required: number;

  @Field({ nullable: true })
  is_phone_number_required: number;

  @Field(() => Customer, { nullable: true })
  customer?: Customer;

  @Field(() => BillPayment, { nullable: true })
  bill_payment?: BillPayment;

  @Field({ nullable: true })
  payment_url: string;
}
