import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ShippingStatus } from '../prisma/shipping-status.enum';
import { Int } from '@nestjs/graphql';
import { Address } from '../address/address.model';
import { Order } from '../order/order.model';

@ObjectType()
export class Shipping {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    logisticName!: string;

    @Field(() => Date, {nullable:true})
    deliveryDate!: Date | null;

    @Field(() => ShippingStatus, {nullable:false})
    shippingStatus!: keyof typeof ShippingStatus;

    @Field(() => Int, {nullable:false})
    addressId!: number;

    @Field(() => String, {nullable:true})
    courier!: string | null;

    @Field(() => String, {nullable:true})
    estimatedTime!: string | null;

    @Field(() => String, {nullable:true})
    trackingNo!: string | null;

    @Field(() => Int, {nullable:false})
    orderId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Address, {nullable:false})
    address?: Address;

    @Field(() => Order, {nullable:false})
    order?: Order;
}
