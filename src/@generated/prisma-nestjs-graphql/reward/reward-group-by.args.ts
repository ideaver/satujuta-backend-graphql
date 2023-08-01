import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RewardWhereInput } from './reward-where.input';
import { Type } from 'class-transformer';
import { RewardOrderByWithAggregationInput } from './reward-order-by-with-aggregation.input';
import { RewardScalarFieldEnum } from './reward-scalar-field.enum';
import { RewardScalarWhereWithAggregatesInput } from './reward-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { RewardCountAggregateInput } from './reward-count-aggregate.input';
import { RewardAvgAggregateInput } from './reward-avg-aggregate.input';
import { RewardSumAggregateInput } from './reward-sum-aggregate.input';
import { RewardMinAggregateInput } from './reward-min-aggregate.input';
import { RewardMaxAggregateInput } from './reward-max-aggregate.input';

@ArgsType()
export class RewardGroupByArgs {

    @Field(() => RewardWhereInput, {nullable:true})
    @Type(() => RewardWhereInput)
    where?: RewardWhereInput;

    @Field(() => [RewardOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<RewardOrderByWithAggregationInput>;

    @Field(() => [RewardScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof RewardScalarFieldEnum>;

    @Field(() => RewardScalarWhereWithAggregatesInput, {nullable:true})
    having?: RewardScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => RewardCountAggregateInput, {nullable:true})
    _count?: RewardCountAggregateInput;

    @Field(() => RewardAvgAggregateInput, {nullable:true})
    _avg?: RewardAvgAggregateInput;

    @Field(() => RewardSumAggregateInput, {nullable:true})
    _sum?: RewardSumAggregateInput;

    @Field(() => RewardMinAggregateInput, {nullable:true})
    _min?: RewardMinAggregateInput;

    @Field(() => RewardMaxAggregateInput, {nullable:true})
    _max?: RewardMaxAggregateInput;
}
