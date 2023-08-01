import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { AddressUpdateManyWithoutCityNestedInput } from '../address/address-update-many-without-city-nested.input';

@InputType()
export class CityUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => AddressUpdateManyWithoutCityNestedInput, {nullable:true})
    address?: AddressUpdateManyWithoutCityNestedInput;
}
