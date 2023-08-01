import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { AddressUpdateManyWithoutDistrictNestedInput } from '../address/address-update-many-without-district-nested.input';

@InputType()
export class DistrictUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => AddressUpdateManyWithoutDistrictNestedInput, {nullable:true})
    address?: AddressUpdateManyWithoutDistrictNestedInput;
}
