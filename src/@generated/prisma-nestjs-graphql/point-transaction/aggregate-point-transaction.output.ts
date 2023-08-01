import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PointTransactionCountAggregate } from './point-transaction-count-aggregate.output';
import { PointTransactionAvgAggregate } from './point-transaction-avg-aggregate.output';
import { PointTransactionSumAggregate } from './point-transaction-sum-aggregate.output';
import { PointTransactionMinAggregate } from './point-transaction-min-aggregate.output';
import { PointTransactionMaxAggregate } from './point-transaction-max-aggregate.output';

@ObjectType()
export class AggregatePointTransaction {

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
