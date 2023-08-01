import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { CityUpdateOneRequiredWithoutAddressNestedInput } from '../city/city-update-one-required-without-address-nested.input';
import { DistrictUpdateOneRequiredWithoutAddressNestedInput } from '../district/district-update-one-required-without-address-nested.input';
import { PostalCodeUpdateOneRequiredWithoutAddressNestedInput } from '../postal-code/postal-code-update-one-required-without-address-nested.input';
import { UserUpdateOneWithoutAddressNestedInput } from '../user/user-update-one-without-address-nested.input';
import { HotelUpdateOneWithoutAddressNestedInput } from '../hotel/hotel-update-one-without-address-nested.input';
import { ShippingUpdateOneWithoutAddressNestedInput } from '../shipping/shipping-update-one-without-address-nested.input';

@InputType()
export class AddressUpdateWithoutSchoolInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => CityUpdateOneRequiredWithoutAddressNestedInput, {nullable:true})
    city?: CityUpdateOneRequiredWithoutAddressNestedInput;

    @Field(() => DistrictUpdateOneRequiredWithoutAddressNestedInput, {nullable:true})
    district?: DistrictUpdateOneRequiredWithoutAddressNestedInput;

    @Field(() => PostalCodeUpdateOneRequiredWithoutAddressNestedInput, {nullable:true})
    postalCode?: PostalCodeUpdateOneRequiredWithoutAddressNestedInput;

    @Field(() => UserUpdateOneWithoutAddressNestedInput, {nullable:true})
    user?: UserUpdateOneWithoutAddressNestedInput;

    @Field(() => HotelUpdateOneWithoutAddressNestedInput, {nullable:true})
    hotel?: HotelUpdateOneWithoutAddressNestedInput;

    @Field(() => ShippingUpdateOneWithoutAddressNestedInput, {nullable:true})
    Shipping?: ShippingUpdateOneWithoutAddressNestedInput;
}
