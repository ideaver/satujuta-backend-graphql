import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ShippingWhereInput } from './shipping-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { EnumShippingStatusFilter } from '../prisma/enum-shipping-status-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { AddressRelationFilter } from '../address/address-relation-filter.input';
import { OrderRelationFilter } from '../order/order-relation-filter.input';

@InputType()
export class ShippingWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    addressId?: number;

    @Field(() => Int, {nullable:true})
    orderId?: number;

    @Field(() => [ShippingWhereInput], {nullable:true})
    AND?: Array<ShippingWhereInput>;

    @Field(() => [ShippingWhereInput], {nullable:true})
    OR?: Array<ShippingWhereInput>;

    @Field(() => [ShippingWhereInput], {nullable:true})
    NOT?: Array<ShippingWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    logisticName?: StringFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    deliveryDate?: DateTimeNullableFilter;

    @Field(() => EnumShippingStatusFilter, {nullable:true})
    shippingStatus?: EnumShippingStatusFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    courier?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    estimatedTime?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    trackingNo?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => AddressRelationFilter, {nullable:true})
    address?: AddressRelationFilter;

    @Field(() => OrderRelationFilter, {nullable:true})
    order?: OrderRelationFilter;
}
