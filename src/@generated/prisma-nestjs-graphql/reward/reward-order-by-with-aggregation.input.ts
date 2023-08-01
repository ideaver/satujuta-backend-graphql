import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { RewardCountOrderByAggregateInput } from './reward-count-order-by-aggregate.input';
import { RewardAvgOrderByAggregateInput } from './reward-avg-order-by-aggregate.input';
import { RewardMaxOrderByAggregateInput } from './reward-max-order-by-aggregate.input';
import { RewardMinOrderByAggregateInput } from './reward-min-order-by-aggregate.input';
import { RewardSumOrderByAggregateInput } from './reward-sum-order-by-aggregate.input';

@InputType()
export class RewardOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    pointCost?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => RewardCountOrderByAggregateInput, {nullable:true})
    _count?: RewardCountOrderByAggregateInput;

    @Field(() => RewardAvgOrderByAggregateInput, {nullable:true})
    _avg?: RewardAvgOrderByAggregateInput;

    @Field(() => RewardMaxOrderByAggregateInput, {nullable:true})
    _max?: RewardMaxOrderByAggregateInput;

    @Field(() => RewardMinOrderByAggregateInput, {nullable:true})
    _min?: RewardMinOrderByAggregateInput;

    @Field(() => RewardSumOrderByAggregateInput, {nullable:true})
    _sum?: RewardSumOrderByAggregateInput;
}
