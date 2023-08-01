import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { EnumShippingStatusWithAggregatesFilter } from '../prisma/enum-shipping-status-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class ShippingScalarWhereWithAggregatesInput {

    @Field(() => [ShippingScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ShippingScalarWhereWithAggregatesInput>;

    @Field(() => [ShippingScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ShippingScalarWhereWithAggregatesInput>;

    @Field(() => [ShippingScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ShippingScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    logisticName?: StringWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    deliveryDate?: DateTimeNullableWithAggregatesFilter;

    @Field(() => EnumShippingStatusWithAggregatesFilter, {nullable:true})
    shippingStatus?: EnumShippingStatusWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    addressId?: IntWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    courier?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    estimatedTime?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    trackingNo?: StringNullableWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    orderId?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
