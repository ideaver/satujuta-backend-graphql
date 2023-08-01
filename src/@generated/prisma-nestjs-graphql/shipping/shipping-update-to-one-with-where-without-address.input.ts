import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShippingWhereInput } from './shipping-where.input';
import { Type } from 'class-transformer';
import { ShippingUpdateWithoutAddressInput } from './shipping-update-without-address.input';

@InputType()
export class ShippingUpdateToOneWithWhereWithoutAddressInput {

    @Field(() => ShippingWhereInput, {nullable:true})
    @Type(() => ShippingWhereInput)
    where?: ShippingWhereInput;

    @Field(() => ShippingUpdateWithoutAddressInput, {nullable:false})
    @Type(() => ShippingUpdateWithoutAddressInput)
    data!: ShippingUpdateWithoutAddressInput;
}
