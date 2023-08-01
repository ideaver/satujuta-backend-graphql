import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShippingWhereInput } from './shipping-where.input';

@InputType()
export class ShippingNullableRelationFilter {

    @Field(() => ShippingWhereInput, {nullable:true})
    is?: ShippingWhereInput;

    @Field(() => ShippingWhereInput, {nullable:true})
    isNot?: ShippingWhereInput;
}
