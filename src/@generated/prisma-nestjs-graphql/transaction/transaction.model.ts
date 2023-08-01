import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { TransactionStatus } from '../prisma/transaction-status.enum';
import { TransactionType } from '../prisma/transaction-type.enum';
import { TransactionCategory } from '../prisma/transaction-category.enum';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Account } from '../account/account.model';
import { Payment } from '../payment/payment.model';

@ObjectType()
export class Transaction {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Float, {nullable:false})
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

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => User, {nullable:false})
    User?: User;

    @Field(() => Account, {nullable:false})
    account?: Account;

    @Field(() => Payment, {nullable:true})
    payment?: Payment | null;
}
