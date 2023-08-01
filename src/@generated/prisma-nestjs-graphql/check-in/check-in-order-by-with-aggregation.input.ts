import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CheckInCountOrderByAggregateInput } from './check-in-count-order-by-aggregate.input';
import { CheckInAvgOrderByAggregateInput } from './check-in-avg-order-by-aggregate.input';
import { CheckInMaxOrderByAggregateInput } from './check-in-max-order-by-aggregate.input';
import { CheckInMinOrderByAggregateInput } from './check-in-min-order-by-aggregate.input';
import { CheckInSumOrderByAggregateInput } from './check-in-sum-order-by-aggregate.input';

@InputType()
export class CheckInOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    hotelId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    checkInAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => CheckInCountOrderByAggregateInput, {nullable:true})
    _count?: CheckInCountOrderByAggregateInput;

    @Field(() => CheckInAvgOrderByAggregateInput, {nullable:true})
    _avg?: CheckInAvgOrderByAggregateInput;

    @Field(() => CheckInMaxOrderByAggregateInput, {nullable:true})
    _max?: CheckInMaxOrderByAggregateInput;

    @Field(() => CheckInMinOrderByAggregateInput, {nullable:true})
    _min?: CheckInMinOrderByAggregateInput;

    @Field(() => CheckInSumOrderByAggregateInput, {nullable:true})
    _sum?: CheckInSumOrderByAggregateInput;
}
