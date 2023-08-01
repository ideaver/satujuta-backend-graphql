import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShippingUpdateWithoutAddressInput } from './shipping-update-without-address.input';
import { Type } from 'class-transformer';
import { ShippingCreateWithoutAddressInput } from './shipping-create-without-address.input';
import { ShippingWhereInput } from './shipping-where.input';

@InputType()
export class ShippingUpsertWithoutAddressInput {

    @Field(() => ShippingUpdateWithoutAddressInput, {nullable:false})
    @Type(() => ShippingUpdateWithoutAddressInput)
    update!: ShippingUpdateWithoutAddressInput;

    @Field(() => ShippingCreateWithoutAddressInput, {nullable:false})
    @Type(() => ShippingCreateWithoutAddressInput)
    create!: ShippingCreateWithoutAddressInput;

    @Field(() => ShippingWhereInput, {nullable:true})
    @Type(() => ShippingWhereInput)
    where?: ShippingWhereInput;
}
