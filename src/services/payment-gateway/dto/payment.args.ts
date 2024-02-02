import { Field, InputType, Int } from '@nestjs/graphql';

export declare enum SortBy {
  id = 'id',
  bill_link = 'bill_link',
  bill_title = 'bill_title',
  sender_bank = 'sender_bank',
  amount = 'amount',
  created_at = 'created_at',
}

export declare enum SortType {
  sort_desc = 'sort_desc',
  sort_asc = 'sort_asc',
}

@InputType()
export class GetPaymentArgs {
  @Field(() => Int)
  bill_id: number;

  @Field(() => String, { nullable: true })
  start_date?: string;

  @Field(() => String, { nullable: true })
  end_date?: string;

  @Field(() => Int, { nullable: true })
  pagination?: number;

  @Field(() => Int, { nullable: true })
  page?: number;

  @Field(() => String, { nullable: true })
  sort_by?: SortBy;

  @Field(() => String, { nullable: true })
  sort_type?: SortType;
}

@InputType()
export class GetAllPaymentArgs {
  @Field(() => String, { nullable: true })
  start_date?: string;

  @Field(() => String, { nullable: true })
  end_date?: string;

  @Field(() => Int, { nullable: true })
  pagination?: number;

  @Field(() => Int, { nullable: true })
  page?: number;

  @Field(() => String, { nullable: true })
  sort_by?: SortBy;

  @Field(() => String, { nullable: true })
  sort_type?: SortType;

  @Field(() => String, { nullable: true })
  reference_id?: string;
}
