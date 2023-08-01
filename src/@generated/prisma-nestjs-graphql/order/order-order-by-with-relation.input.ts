import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { ItemOrderByRelationAggregateInput } from '../item/item-order-by-relation-aggregate.input';
import { ShippingOrderByWithRelationInput } from '../shipping/shipping-order-by-with-relation.input';
import { PaymentOrderByRelationAggregateInput } from '../payment/payment-order-by-relation-aggregate.input';

@InputType()
export class OrderOrderByWithRelationInput {

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

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    orderBy?: UserOrderByWithRelationInput;

    @Field(() => ItemOrderByRelationAggregateInput, {nullable:true})
    items?: ItemOrderByRelationAggregateInput;

    @Field(() => ShippingOrderByWithRelationInput, {nullable:true})
    shipping?: ShippingOrderByWithRelationInput;

    @Field(() => PaymentOrderByRelationAggregateInput, {nullable:true})
    payments?: PaymentOrderByRelationAggregateInput;
}
