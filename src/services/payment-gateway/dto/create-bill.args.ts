import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsIn, Min, IsEmail } from 'class-validator';

enum BillType {
  SINGLE = 'SINGLE',
  MULTIPLE = 'MULTIPLE',
}

enum BillSenderBankType {
  VIRTUAL_ACCOUNT = 'virtual_account',
  WALLET_ACCOUNT = 'wallet_account',
}

@InputType()
export class CreateBillArgs {
  @Field(() => String)
  @IsNotEmpty()
  title: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsIn([BillType.SINGLE, BillType.MULTIPLE])
  type: BillType;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @Min(10000)
  amount?: number;

  @Field(() => String, { nullable: true })
  @IsOptional()
  expired_date?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  redirect_url?: string;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsIn([0, 1])
  is_address_required?: number;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsIn([0, 1])
  is_phone_number_required?: number;

  @Field(() => Int)
  @IsNotEmpty()
  @IsIn([1, 2, 3])
  step: number;

  @Field(() => String, { nullable: true })
  @IsOptional({ groups: ['step2', 'step3'] })
  @IsNotEmpty({ groups: ['step2', 'step3'] })
  sender_name?: string;

  @Field(() => String, { nullable: true })
  @IsOptional({ groups: ['step2', 'step3'] })
  @IsNotEmpty({ groups: ['step2', 'step3'] })
  @IsEmail()
  sender_email?: string;

  @Field(() => String, { nullable: true })
  @IsOptional({ groups: ['step2', 'step3'] })
  sender_phone_number?: string;

  @Field(() => String, { nullable: true })
  @IsOptional({ groups: ['step2', 'step3'] })
  sender_address?: string;

  @Field(() => String, { nullable: true })
  @IsOptional({ groups: ['step3'] })
  @IsNotEmpty({ groups: ['step3'] })
  sender_bank?: string;

  @Field(() => String, { nullable: true })
  @IsOptional({ groups: ['step3'] })
  @IsNotEmpty({ groups: ['step3'] })
  sender_bank_type?: BillSenderBankType;
}
