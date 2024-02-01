import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  PaymentStatus,
  SenderBankType,
  SettlementStatus,
} from 'src/@generated';

@ObjectType()
export class Payment {
  @Field()
  id: string;

  @Field()
  bill_link: string;

  @Field()
  bill_title: string;

  @Field()
  sender_name: string;

  @Field()
  sender_bank: string;

  @Field(() => SenderBankType)
  sender_bank_type: SenderBankType;

  @Field({ nullable: true })
  virtual_account_number?: string;

  @Field()
  amount: string;

  @Field(() => PaymentStatus)
  status: PaymentStatus;

  @Field(() => String)
  settlement_status: string;

  @Field({ nullable: true })
  reference_id?: string;

  @Field()
  payment_url: string;

  @Field()
  created_at: string;

  @Field({ nullable: true })
  completed_at?: string;
}

@ObjectType()
export class GetPayment {
  @Field(() => Int)
  link_id: number;

  @Field(() => Int)
  total_data: number;

  @Field(() => Int)
  data_per_page: number;

  @Field(() => Int)
  total_page: number;

  @Field(() => Int)
  page: number;

  @Field(() => [Payment])
  data: Payment[];
}

@ObjectType()
export class GetAllPayment {
  @Field(() => Int)
  total_data: number;

  @Field(() => Int)
  data_per_page: number;

  @Field(() => Int)
  total_page: number;

  @Field(() => Int)
  page: number;

  @Field(() => [Payment])
  data: Payment[];
}
