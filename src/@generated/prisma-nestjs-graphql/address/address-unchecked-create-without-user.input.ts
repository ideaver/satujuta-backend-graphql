import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { HotelUncheckedCreateNestedOneWithoutAddressInput } from '../hotel/hotel-unchecked-create-nested-one-without-address.input';
import { SchoolUncheckedCreateNestedOneWithoutAddressInput } from '../school/school-unchecked-create-nested-one-without-address.input';
import { ShippingUncheckedCreateNestedOneWithoutAddressInput } from '../shipping/shipping-unchecked-create-nested-one-without-address.input';

@InputType()
export class AddressUncheckedCreateWithoutUserInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    @Validator.MinLength(5)
    @Validator.IsNotEmpty()
    name!: string;

    @Field(() => Int, {nullable:false})
    cityId!: number;

    @Field(() => Int, {nullable:false})
    districtId!: number;

    @Field(() => Int, {nullable:false})
    postalCodeId!: number;

    @Field(() => HotelUncheckedCreateNestedOneWithoutAddressInput, {nullable:true})
    hotel?: HotelUncheckedCreateNestedOneWithoutAddressInput;

    @Field(() => SchoolUncheckedCreateNestedOneWithoutAddressInput, {nullable:true})
    school?: SchoolUncheckedCreateNestedOneWithoutAddressInput;

    @Field(() => ShippingUncheckedCreateNestedOneWithoutAddressInput, {nullable:true})
    Shipping?: ShippingUncheckedCreateNestedOneWithoutAddressInput;
}
