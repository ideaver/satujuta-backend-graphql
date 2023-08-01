import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { RewardCountAggregate } from './reward-count-aggregate.output';
import { RewardAvgAggregate } from './reward-avg-aggregate.output';
import { RewardSumAggregate } from './reward-sum-aggregate.output';
import { RewardMinAggregate } from './reward-min-aggregate.output';
import { RewardMaxAggregate } from './reward-max-aggregate.output';

@ObjectType()
export class RewardGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Float, {nullable:false})
    pointCost!: number;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => RewardCountAggregate, {nullable:true})
    _count?: RewardCountAggregate;

    @Field(() => RewardAvgAggregate, {nullable:true})
    _avg?: RewardAvgAggregate;

    @Field(() => RewardSumAggregate, {nullable:true})
    _sum?: RewardSumAggregate;

    @Field(() => RewardMinAggregate, {nullable:true})
    _min?: RewardMinAggregate;

    @Field(() => RewardMaxAggregate, {nullable:true})
    _max?: RewardMaxAggregate;
}
