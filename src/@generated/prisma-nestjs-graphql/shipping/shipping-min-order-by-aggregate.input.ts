import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ShippingMinOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    logisticName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deliveryDate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    shippingStatus?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    addressId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    courier?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    estimatedTime?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    trackingNo?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    orderId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}
