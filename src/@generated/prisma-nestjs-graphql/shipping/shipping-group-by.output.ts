import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ShippingStatus } from '../prisma/shipping-status.enum';
import { ShippingCountAggregate } from './shipping-count-aggregate.output';
import { ShippingAvgAggregate } from './shipping-avg-aggregate.output';
import { ShippingSumAggregate } from './shipping-sum-aggregate.output';
import { ShippingMinAggregate } from './shipping-min-aggregate.output';
import { ShippingMaxAggregate } from './shipping-max-aggregate.output';

@ObjectType()
export class ShippingGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    logisticName!: string;

    @Field(() => Date, {nullable:true})
    deliveryDate?: Date | string;

    @Field(() => ShippingStatus, {nullable:false})
    shippingStatus!: keyof typeof ShippingStatus;

    @Field(() => Int, {nullable:false})
    addressId!: number;

    @Field(() => String, {nullable:true})
    courier?: string;

    @Field(() => String, {nullable:true})
    estimatedTime?: string;

    @Field(() => String, {nullable:true})
    trackingNo?: string;

    @Field(() => Int, {nullable:false})
    orderId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => ShippingCountAggregate, {nullable:true})
    _count?: ShippingCountAggregate;

    @Field(() => ShippingAvgAggregate, {nullable:true})
    _avg?: ShippingAvgAggregate;

    @Field(() => ShippingSumAggregate, {nullable:true})
    _sum?: ShippingSumAggregate;

    @Field(() => ShippingMinAggregate, {nullable:true})
    _min?: ShippingMinAggregate;

    @Field(() => ShippingMaxAggregate, {nullable:true})
    _max?: ShippingMaxAggregate;
}
