import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ShippingCountOrderByAggregateInput } from './shipping-count-order-by-aggregate.input';
import { ShippingAvgOrderByAggregateInput } from './shipping-avg-order-by-aggregate.input';
import { ShippingMaxOrderByAggregateInput } from './shipping-max-order-by-aggregate.input';
import { ShippingMinOrderByAggregateInput } from './shipping-min-order-by-aggregate.input';
import { ShippingSumOrderByAggregateInput } from './shipping-sum-order-by-aggregate.input';

@InputType()
export class ShippingOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    logisticName?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    deliveryDate?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    shippingStatus?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    addressId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    courier?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    estimatedTime?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    trackingNo?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    orderId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => ShippingCountOrderByAggregateInput, {nullable:true})
    _count?: ShippingCountOrderByAggregateInput;

    @Field(() => ShippingAvgOrderByAggregateInput, {nullable:true})
    _avg?: ShippingAvgOrderByAggregateInput;

    @Field(() => ShippingMaxOrderByAggregateInput, {nullable:true})
    _max?: ShippingMaxOrderByAggregateInput;

    @Field(() => ShippingMinOrderByAggregateInput, {nullable:true})
    _min?: ShippingMinOrderByAggregateInput;

    @Field(() => ShippingSumOrderByAggregateInput, {nullable:true})
    _sum?: ShippingSumOrderByAggregateInput;
}
