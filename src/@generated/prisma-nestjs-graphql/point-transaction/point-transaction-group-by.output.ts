import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { PointType } from '../prisma/point-type.enum';
import { TransactionType } from '../prisma/transaction-type.enum';
import { PointTransactionCountAggregate } from './point-transaction-count-aggregate.output';
import { PointTransactionAvgAggregate } from './point-transaction-avg-aggregate.output';
import { PointTransactionSumAggregate } from './point-transaction-sum-aggregate.output';
import { PointTransactionMinAggregate } from './point-transaction-min-aggregate.output';
import { PointTransactionMaxAggregate } from './point-transaction-max-aggregate.output';

@ObjectType()
export class PointTransactionGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Float, {nullable:false})
    amount!: number;

    @Field(() => PointType, {nullable:false})
    pointType!: keyof typeof PointType;

    @Field(() => TransactionType, {nullable:false})
    transactionType!: keyof typeof TransactionType;

    @Field(() => Float, {nullable:false})
    currentBalance!: number;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => PointTransactionCountAggregate, {nullable:true})
    _count?: PointTransactionCountAggregate;

    @Field(() => PointTransactionAvgAggregate, {nullable:true})
    _avg?: PointTransactionAvgAggregate;

    @Field(() => PointTransactionSumAggregate, {nullable:true})
    _sum?: PointTransactionSumAggregate;

    @Field(() => PointTransactionMinAggregate, {nullable:true})
    _min?: PointTransactionMinAggregate;

    @Field(() => PointTransactionMaxAggregate, {nullable:true})
    _max?: PointTransactionMaxAggregate;
}
