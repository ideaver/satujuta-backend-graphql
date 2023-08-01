import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShippingStatus } from './shipping-status.enum';

@InputType()
export class NestedEnumShippingStatusFilter {

    @Field(() => ShippingStatus, {nullable:true})
    equals?: keyof typeof ShippingStatus;

    @Field(() => [ShippingStatus], {nullable:true})
    in?: Array<keyof typeof ShippingStatus>;

    @Field(() => [ShippingStatus], {nullable:true})
    notIn?: Array<keyof typeof ShippingStatus>;

    @Field(() => NestedEnumShippingStatusFilter, {nullable:true})
    not?: NestedEnumShippingStatusFilter;
}
