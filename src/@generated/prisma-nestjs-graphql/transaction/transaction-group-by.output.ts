import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { TransactionStatus } from '../prisma/transaction-status.enum';
import { TransactionType } from '../prisma/transaction-type.enum';
import { TransactionCategory } from '../prisma/transaction-category.enum';
import { TransactionCountAggregate } from './transaction-count-aggregate.output';
import { TransactionAvgAggregate } from './transaction-avg-aggregate.output';
import { TransactionSumAggregate } from './transaction-sum-aggregate.output';
import { TransactionMinAggregate } from './transaction-min-aggregate.output';
import { TransactionMaxAggregate } from './transaction-max-aggregate.output';

@ObjectType()
export class TransactionGroupBy {

    @Field(() => Int, {nullable:false})
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
    createdAt!: Date | string;

    @Field(() => TransactionCountAggregate, {nullable:true})
    _count?: TransactionCountAggregate;

    @Field(() => TransactionAvgAggregate, {nullable:true})
    _avg?: TransactionAvgAggregate;

    @Field(() => TransactionSumAggregate, {nullable:true})
    _sum?: TransactionSumAggregate;

    @Field(() => TransactionMinAggregate, {nullable:true})
    _min?: TransactionMinAggregate;

    @Field(() => TransactionMaxAggregate, {nullable:true})
    _max?: TransactionMaxAggregate;
}
