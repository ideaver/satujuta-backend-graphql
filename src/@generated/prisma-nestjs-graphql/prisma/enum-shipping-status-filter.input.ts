import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShippingStatus } from './shipping-status.enum';
import { NestedEnumShippingStatusFilter } from './nested-enum-shipping-status-filter.input';

@InputType()
export class EnumShippingStatusFilter {

    @Field(() => ShippingStatus, {nullable:true})
    equals?: keyof typeof ShippingStatus;

    @Field(() => [ShippingStatus], {nullable:true})
    in?: Array<keyof typeof ShippingStatus>;

    @Field(() => [ShippingStatus], {nullable:true})
    notIn?: Array<keyof typeof ShippingStatus>;

    @Field(() => NestedEnumShippingStatusFilter, {nullable:true})
    not?: NestedEnumShippingStatusFilter;
}
