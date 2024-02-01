import { Field, InputType, Int } from '@nestjs/graphql';
import { BillStatus, BillType } from 'src/@generated';

@InputType()
export class UpdateBillArgs {
  @Field(() => String)
  bill_id: string;

  @Field(() => String, { nullable: true })
  title?: string;

  @Field(() => BillType, { nullable: true })
  type?: keyof typeof BillType;

  @Field(() => Int, { nullable: true })
  amount?: number;

  @Field(() => String, { nullable: true })
  expired_date?: string;

  @Field(() => String, { nullable: true })
  redirect_url?: string;

  @Field(() => BillStatus, { nullable: true })
  status?: keyof typeof BillStatus;

  @Field(() => Int, { nullable: true })
  is_address_required?: number;

  @Field(() => Int, { nullable: true })
  is_phone_number_required?: number;
}
