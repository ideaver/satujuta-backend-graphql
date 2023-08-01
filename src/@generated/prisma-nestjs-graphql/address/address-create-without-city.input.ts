import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { DistrictCreateNestedOneWithoutAddressInput } from '../district/district-create-nested-one-without-address.input';
import { PostalCodeCreateNestedOneWithoutAddressInput } from '../postal-code/postal-code-create-nested-one-without-address.input';
import { UserCreateNestedOneWithoutAddressInput } from '../user/user-create-nested-one-without-address.input';
import { HotelCreateNestedOneWithoutAddressInput } from '../hotel/hotel-create-nested-one-without-address.input';
import { SchoolCreateNestedOneWithoutAddressInput } from '../school/school-create-nested-one-without-address.input';
import { ShippingCreateNestedOneWithoutAddressInput } from '../shipping/shipping-create-nested-one-without-address.input';

@InputType()
export class AddressCreateWithoutCityInput {

    @Field(() => String, {nullable:false})
    @Validator.MinLength(5)
    @Validator.IsNotEmpty()
    name!: string;

    @Field(() => DistrictCreateNestedOneWithoutAddressInput, {nullable:false})
    district!: DistrictCreateNestedOneWithoutAddressInput;

    @Field(() => PostalCodeCreateNestedOneWithoutAddressInput, {nullable:false})
    postalCode!: PostalCodeCreateNestedOneWithoutAddressInput;

    @Field(() => UserCreateNestedOneWithoutAddressInput, {nullable:true})
    user?: UserCreateNestedOneWithoutAddressInput;

    @Field(() => HotelCreateNestedOneWithoutAddressInput, {nullable:true})
    hotel?: HotelCreateNestedOneWithoutAddressInput;

    @Field(() => SchoolCreateNestedOneWithoutAddressInput, {nullable:true})
    school?: SchoolCreateNestedOneWithoutAddressInput;

    @Field(() => ShippingCreateNestedOneWithoutAddressInput, {nullable:true})
    Shipping?: ShippingCreateNestedOneWithoutAddressInput;
}
