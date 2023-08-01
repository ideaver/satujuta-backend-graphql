import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { Float } from '@nestjs/graphql';
import { AccountCategory } from '../prisma/account-category.enum';
import { UserCreateNestedOneWithoutAccountsInput } from '../user/user-create-nested-one-without-accounts.input';
import { TransactionCreateNestedManyWithoutAccountInput } from '../transaction/transaction-create-nested-many-without-account.input';
import { BankCreateNestedOneWithoutAccountInput } from '../bank/bank-create-nested-one-without-account.input';

@InputType()
export class AccountCreateWithoutProjectInput {

    @Field(() => Int, {nullable:true})
    accountNumber?: number;

    @Field(() => String, {nullable:false})
    @Validator.MinLength(2)
    @Validator.MaxLength(20)
    @Validator.IsAlpha()
    name!: string;

    @Field(() => Float, {nullable:true})
    balance?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => AccountCategory, {nullable:false})
    accountCategory!: keyof typeof AccountCategory;

    @Field(() => UserCreateNestedOneWithoutAccountsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutAccountsInput;

    @Field(() => TransactionCreateNestedManyWithoutAccountInput, {nullable:true})
    transactions?: TransactionCreateNestedManyWithoutAccountInput;

    @Field(() => BankCreateNestedOneWithoutAccountInput, {nullable:true})
    bankAccount?: BankCreateNestedOneWithoutAccountInput;
}
