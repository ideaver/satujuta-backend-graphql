import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Disbursement {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  user_id: number;

  @Field(() => Int)
  amount: number;

  @Field()
  status: string;

  @Field()
  reason: string;

  @Field()
  timestamp: string;

  @Field()
  bank_code: string;

  @Field()
  account_number: string;

  @Field()
  recipient_name: string;

  @Field({ nullable: true })
  sender_bank: string;

  @Field()
  remark: string;

  @Field()
  receipt: string;

  @Field()
  time_served: string;

  @Field(() => Int)
  bundle_id: number;

  @Field(() => Int)
  company_id: number;

  @Field(() => Int)
  recipient_city: number;

  @Field()
  created_from: string;

  @Field()
  direction: string;

  @Field({ nullable: true })
  sender: string;

  @Field(() => Int)
  fee: number;

  @Field()
  beneficiary_email: string;

  @Field()
  idempotency_key: string;
}

@ObjectType()
export class GetAllDisbursement {
  @Field(() => Int)
  total_data: number;

  @Field(() => Int)
  data_per_page: number;

  @Field(() => Int)
  total_page: number;

  @Field(() => Int)
  page: number;

  @Field(() => [Disbursement])
  data: Disbursement[];
}
