import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { AddressUncheckedUpdateManyWithoutDistrictNestedInput } from '../address/address-unchecked-update-many-without-district-nested.input';

@InputType()
export class DistrictUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => AddressUncheckedUpdateManyWithoutDistrictNestedInput, {nullable:true})
    address?: AddressUncheckedUpdateManyWithoutDistrictNestedInput;
}
