import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ItemCountOrderByAggregateInput } from './item-count-order-by-aggregate.input';
import { ItemAvgOrderByAggregateInput } from './item-avg-order-by-aggregate.input';
import { ItemMaxOrderByAggregateInput } from './item-max-order-by-aggregate.input';
import { ItemMinOrderByAggregateInput } from './item-min-order-by-aggregate.input';
import { ItemSumOrderByAggregateInput } from './item-sum-order-by-aggregate.input';

@InputType()
export class ItemOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    qty?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userRole?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    orderId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => ItemCountOrderByAggregateInput, {nullable:true})
    _count?: ItemCountOrderByAggregateInput;

    @Field(() => ItemAvgOrderByAggregateInput, {nullable:true})
    _avg?: ItemAvgOrderByAggregateInput;

    @Field(() => ItemMaxOrderByAggregateInput, {nullable:true})
    _max?: ItemMaxOrderByAggregateInput;

    @Field(() => ItemMinOrderByAggregateInput, {nullable:true})
    _min?: ItemMinOrderByAggregateInput;

    @Field(() => ItemSumOrderByAggregateInput, {nullable:true})
    _sum?: ItemSumOrderByAggregateInput;
}
