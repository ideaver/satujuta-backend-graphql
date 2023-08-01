import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HotelCountOrderByAggregateInput } from './hotel-count-order-by-aggregate.input';
import { HotelAvgOrderByAggregateInput } from './hotel-avg-order-by-aggregate.input';
import { HotelMaxOrderByAggregateInput } from './hotel-max-order-by-aggregate.input';
import { HotelMinOrderByAggregateInput } from './hotel-min-order-by-aggregate.input';
import { HotelSumOrderByAggregateInput } from './hotel-sum-order-by-aggregate.input';

@InputType()
export class HotelOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    addressId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rating?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    startDate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    quota?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdById?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => HotelCountOrderByAggregateInput, {nullable:true})
    _count?: HotelCountOrderByAggregateInput;

    @Field(() => HotelAvgOrderByAggregateInput, {nullable:true})
    _avg?: HotelAvgOrderByAggregateInput;

    @Field(() => HotelMaxOrderByAggregateInput, {nullable:true})
    _max?: HotelMaxOrderByAggregateInput;

    @Field(() => HotelMinOrderByAggregateInput, {nullable:true})
    _min?: HotelMinOrderByAggregateInput;

    @Field(() => HotelSumOrderByAggregateInput, {nullable:true})
    _sum?: HotelSumOrderByAggregateInput;
}
