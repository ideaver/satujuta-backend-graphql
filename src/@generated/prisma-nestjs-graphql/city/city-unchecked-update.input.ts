import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { AddressUncheckedUpdateManyWithoutCityNestedInput } from '../address/address-unchecked-update-many-without-city-nested.input';

@InputType()
export class CityUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => AddressUncheckedUpdateManyWithoutCityNestedInput, {nullable:true})
    address?: AddressUncheckedUpdateManyWithoutCityNestedInput;
}
