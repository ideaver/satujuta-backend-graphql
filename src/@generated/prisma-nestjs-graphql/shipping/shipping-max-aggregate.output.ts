import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ShippingStatus } from '../prisma/shipping-status.enum';

@ObjectType()
export class ShippingMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    logisticName?: string;

    @Field(() => Date, {nullable:true})
    deliveryDate?: Date | string;

    @Field(() => ShippingStatus, {nullable:true})
    shippingStatus?: keyof typeof ShippingStatus;

    @Field(() => Int, {nullable:true})
    addressId?: number;

    @Field(() => String, {nullable:true})
    courier?: string;

    @Field(() => String, {nullable:true})
    estimatedTime?: string;

    @Field(() => String, {nullable:true})
    trackingNo?: string;

    @Field(() => Int, {nullable:true})
    orderId?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
