import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ShippingMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    logisticName?: true;

    @Field(() => Boolean, {nullable:true})
    deliveryDate?: true;

    @Field(() => Boolean, {nullable:true})
    shippingStatus?: true;

    @Field(() => Boolean, {nullable:true})
    addressId?: true;

    @Field(() => Boolean, {nullable:true})
    courier?: true;

    @Field(() => Boolean, {nullable:true})
    estimatedTime?: true;

    @Field(() => Boolean, {nullable:true})
    trackingNo?: true;

    @Field(() => Boolean, {nullable:true})
    orderId?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}
