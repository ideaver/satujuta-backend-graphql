import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { HotelUncheckedUpdateOneWithoutAddressNestedInput } from '../hotel/hotel-unchecked-update-one-without-address-nested.input';
import { SchoolUncheckedUpdateOneWithoutAddressNestedInput } from '../school/school-unchecked-update-one-without-address-nested.input';
import { ShippingUncheckedUpdateOneWithoutAddressNestedInput } from '../shipping/shipping-unchecked-update-one-without-address-nested.input';

@InputType()
export class AddressUncheckedUpdateWithoutUserInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    cityId?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    districtId?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    postalCodeId?: IntFieldUpdateOperationsInput;

    @Field(() => HotelUncheckedUpdateOneWithoutAddressNestedInput, {nullable:true})
    hotel?: HotelUncheckedUpdateOneWithoutAddressNestedInput;

    @Field(() => SchoolUncheckedUpdateOneWithoutAddressNestedInput, {nullable:true})
    school?: SchoolUncheckedUpdateOneWithoutAddressNestedInput;

    @Field(() => ShippingUncheckedUpdateOneWithoutAddressNestedInput, {nullable:true})
    Shipping?: ShippingUncheckedUpdateOneWithoutAddressNestedInput;
}
