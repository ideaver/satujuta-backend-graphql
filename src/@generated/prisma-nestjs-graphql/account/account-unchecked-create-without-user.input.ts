import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { Float } from '@nestjs/graphql';
import { AccountCategory } from '../prisma/account-category.enum';
import { TransactionUncheckedCreateNestedManyWithoutAccountInput } from '../transaction/transaction-unchecked-create-nested-many-without-account.input';
import { ProjectUncheckedCreateNestedOneWithoutAccountInput } from '../project/project-unchecked-create-nested-one-without-account.input';
import { BankUncheckedCreateNestedOneWithoutAccountInput } from '../bank/bank-unchecked-create-nested-one-without-account.input';

@InputType()
export class AccountUncheckedCreateWithoutUserInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => TransactionUncheckedCreateNestedManyWithoutAccountInput, {nullable:true})
    transactions?: TransactionUncheckedCreateNestedManyWithoutAccountInput;

    @Field(() => ProjectUncheckedCreateNestedOneWithoutAccountInput, {nullable:true})
    project?: ProjectUncheckedCreateNestedOneWithoutAccountInput;

    @Field(() => BankUncheckedCreateNestedOneWithoutAccountInput, {nullable:true})
    bankAccount?: BankUncheckedCreateNestedOneWithoutAccountInput;
}
