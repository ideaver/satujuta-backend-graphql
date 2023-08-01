import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { OrderCountOrderByAggregateInput } from './order-count-order-by-aggregate.input';
import { OrderAvgOrderByAggregateInput } from './order-avg-order-by-aggregate.input';
import { OrderMaxOrderByAggregateInput } from './order-max-order-by-aggregate.input';
import { OrderMinOrderByAggregateInput } from './order-min-order-by-aggregate.input';
import { OrderSumOrderByAggregateInput } from './order-sum-order-by-aggregate.input';

@InputType()
export class OrderOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    orderById?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    shippingId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    isFullPaid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cost?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    platformFee?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    total?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => OrderCountOrderByAggregateInput, {nullable:true})
    _count?: OrderCountOrderByAggregateInput;

    @Field(() => OrderAvgOrderByAggregateInput, {nullable:true})
    _avg?: OrderAvgOrderByAggregateInput;

    @Field(() => OrderMaxOrderByAggregateInput, {nullable:true})
    _max?: OrderMaxOrderByAggregateInput;

    @Field(() => OrderMinOrderByAggregateInput, {nullable:true})
    _min?: OrderMinOrderByAggregateInput;

    @Field(() => OrderSumOrderByAggregateInput, {nullable:true})
    _sum?: OrderSumOrderByAggregateInput;
}
