import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ShippingCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    logisticName!: number;

    @Field(() => Int, {nullable:false})
    deliveryDate!: number;

    @Field(() => Int, {nullable:false})
    shippingStatus!: number;

    @Field(() => Int, {nullable:false})
    addressId!: number;

    @Field(() => Int, {nullable:false})
    courier!: number;

    @Field(() => Int, {nullable:false})
    estimatedTime!: number;

    @Field(() => Int, {nullable:false})
    trackingNo!: number;

    @Field(() => Int, {nullable:false})
    orderId!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
