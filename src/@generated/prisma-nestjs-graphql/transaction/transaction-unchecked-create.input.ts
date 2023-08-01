import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { TransactionStatus } from '../prisma/transaction-status.enum';
import { TransactionType } from '../prisma/transaction-type.enum';
import { TransactionCategory } from '../prisma/transaction-category.enum';
import { PaymentUncheckedCreateNestedOneWithoutTransactionInput } from '../payment/payment-unchecked-create-nested-one-without-transaction.input';

@InputType()
export class TransactionUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:false})
    @Validator.IsNumber()
    @Validator.IsNotEmpty()
    amount!: number;

    @Field(() => TransactionStatus, {nullable:false})
    status!: keyof typeof TransactionStatus;

    @Field(() => TransactionType, {nullable:false})
    transactionType!: keyof typeof TransactionType;

    @Field(() => TransactionCategory, {nullable:false})
    transactionCategory!: keyof typeof TransactionCategory;

    @Field(() => Float, {nullable:false})
    currentBalance!: number;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => Int, {nullable:false})
    accountId!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => PaymentUncheckedCreateNestedOneWithoutTransactionInput, {nullable:true})
    payment?: PaymentUncheckedCreateNestedOneWithoutTransactionInput;
}
