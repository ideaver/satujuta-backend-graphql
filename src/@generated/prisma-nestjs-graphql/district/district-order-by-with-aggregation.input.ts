import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { DistrictCountOrderByAggregateInput } from './district-count-order-by-aggregate.input';
import { DistrictAvgOrderByAggregateInput } from './district-avg-order-by-aggregate.input';
import { DistrictMaxOrderByAggregateInput } from './district-max-order-by-aggregate.input';
import { DistrictMinOrderByAggregateInput } from './district-min-order-by-aggregate.input';
import { DistrictSumOrderByAggregateInput } from './district-sum-order-by-aggregate.input';

@InputType()
export class DistrictOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => DistrictCountOrderByAggregateInput, {nullable:true})
    _count?: DistrictCountOrderByAggregateInput;

    @Field(() => DistrictAvgOrderByAggregateInput, {nullable:true})
    _avg?: DistrictAvgOrderByAggregateInput;

    @Field(() => DistrictMaxOrderByAggregateInput, {nullable:true})
    _max?: DistrictMaxOrderByAggregateInput;

    @Field(() => DistrictMinOrderByAggregateInput, {nullable:true})
    _min?: DistrictMinOrderByAggregateInput;

    @Field(() => DistrictSumOrderByAggregateInput, {nullable:true})
    _sum?: DistrictSumOrderByAggregateInput;
}
