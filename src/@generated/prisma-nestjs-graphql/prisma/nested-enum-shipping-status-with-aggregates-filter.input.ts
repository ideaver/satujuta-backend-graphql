import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShippingStatus } from './shipping-status.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumShippingStatusFilter } from './nested-enum-shipping-status-filter.input';

@InputType()
export class NestedEnumShippingStatusWithAggregatesFilter {

    @Field(() => ShippingStatus, {nullable:true})
    equals?: keyof typeof ShippingStatus;

    @Field(() => [ShippingStatus], {nullable:true})
    in?: Array<keyof typeof ShippingStatus>;

    @Field(() => [ShippingStatus], {nullable:true})
    notIn?: Array<keyof typeof ShippingStatus>;

    @Field(() => NestedEnumShippingStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumShippingStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumShippingStatusFilter, {nullable:true})
    _min?: NestedEnumShippingStatusFilter;

    @Field(() => NestedEnumShippingStatusFilter, {nullable:true})
    _max?: NestedEnumShippingStatusFilter;
}
