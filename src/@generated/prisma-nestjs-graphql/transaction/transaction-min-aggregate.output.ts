import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { TransactionStatus } from '../prisma/transaction-status.enum';
import { TransactionType } from '../prisma/transaction-type.enum';
import { TransactionCategory } from '../prisma/transaction-category.enum';

@ObjectType()
export class TransactionMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    amount?: number;

    @Field(() => TransactionStatus, {nullable:true})
    status?: keyof typeof TransactionStatus;

    @Field(() => TransactionType, {nullable:true})
    transactionType?: keyof typeof TransactionType;

    @Field(() => TransactionCategory, {nullable:true})
    transactionCategory?: keyof typeof TransactionCategory;

    @Field(() => Float, {nullable:true})
    currentBalance?: number;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => Int, {nullable:true})
    accountId?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
