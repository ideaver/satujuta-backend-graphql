import { Field, InputType, Int } from '@nestjs/graphql';
import { BillSenderBankType, BillType } from 'src/@generated';

@InputType()
export class CreateBillArgs {
  @Field(() => String)
  title: string;

  @Field(() => BillType)
  type: keyof typeof BillType;

  @Field(() => Int, { nullable: true })
  amount?: number;

  @Field(() => String, { nullable: true })
  expired_date?: string;

  @Field(() => String, { nullable: true })
  redirect_url?: string;

  @Field(() => Int, { nullable: true })
  is_address_required?: number;

  @Field(() => Int, { nullable: true })
  is_phone_number_required?: number;

  @Field(() => Int)
  step: number;

  @Field(() => String, { nullable: true })
  sender_name?: string;

  @Field(() => String, { nullable: true })
  sender_email?: string;

  @Field(() => String, { nullable: true })
  sender_phone_number?: string;

  @Field(() => String, { nullable: true })
  sender_address?: string;

  @Field(() => String, { nullable: true })
  sender_bank?: string;

  @Field(() => BillSenderBankType, { nullable: true })
  sender_bank_type?: BillSenderBankType;
}
