import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { Int } from '@nestjs/graphql';
import { AccountCreateNestedOneWithoutBankAccountInput } from '../account/account-create-nested-one-without-bank-account.input';

@InputType()
export class BankCreateInput {

    @Field(() => String, {nullable:false})
    @Validator.MinLength(1)
    @Validator.MaxLength(10)
    @Validator.IsAlphanumeric()
    @Validator.IsNotEmpty()
    name!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsUrl({ require_protocol: true })
    @Validator.IsNotEmpty()
    logoUrl!: string;

    @Field(() => Int, {nullable:false})
    @Validator.IsNumber()
    @Validator.IsNotEmpty()
    accountNumber!: number;

    @Field(() => AccountCreateNestedOneWithoutBankAccountInput, {nullable:false})
    account!: AccountCreateNestedOneWithoutBankAccountInput;
}
