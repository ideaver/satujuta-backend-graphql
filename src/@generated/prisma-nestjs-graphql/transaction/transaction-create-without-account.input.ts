import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { TransactionStatus } from '../prisma/transaction-status.enum';
import { TransactionType } from '../prisma/transaction-type.enum';
import { TransactionCategory } from '../prisma/transaction-category.enum';
import { UserCreateNestedOneWithoutTransactionsInput } from '../user/user-create-nested-one-without-transactions.input';
import { PaymentCreateNestedOneWithoutTransactionInput } from '../payment/payment-create-nested-one-without-transaction.input';

@InputType()
export class TransactionCreateWithoutAccountInput {

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

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutTransactionsInput, {nullable:false})
    User!: UserCreateNestedOneWithoutTransactionsInput;

    @Field(() => PaymentCreateNestedOneWithoutTransactionInput, {nullable:true})
    payment?: PaymentCreateNestedOneWithoutTransactionInput;
}
