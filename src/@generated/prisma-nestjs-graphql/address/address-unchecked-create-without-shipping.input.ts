import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { UserUncheckedCreateNestedOneWithoutAddressInput } from '../user/user-unchecked-create-nested-one-without-address.input';
import { HotelUncheckedCreateNestedOneWithoutAddressInput } from '../hotel/hotel-unchecked-create-nested-one-without-address.input';
import { SchoolUncheckedCreateNestedOneWithoutAddressInput } from '../school/school-unchecked-create-nested-one-without-address.input';

@InputType()
export class AddressUncheckedCreateWithoutShippingInput {

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

    @Field(() => UserUncheckedCreateNestedOneWithoutAddressInput, {nullable:true})
    user?: UserUncheckedCreateNestedOneWithoutAddressInput;

    @Field(() => HotelUncheckedCreateNestedOneWithoutAddressInput, {nullable:true})
    hotel?: HotelUncheckedCreateNestedOneWithoutAddressInput;

    @Field(() => SchoolUncheckedCreateNestedOneWithoutAddressInput, {nullable:true})
    school?: SchoolUncheckedCreateNestedOneWithoutAddressInput;
}
