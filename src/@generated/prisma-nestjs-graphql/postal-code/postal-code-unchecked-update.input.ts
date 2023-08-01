import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { AddressUncheckedUpdateManyWithoutPostalCodeNestedInput } from '../address/address-unchecked-update-many-without-postal-code-nested.input';

@InputType()
export class PostalCodeUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    code?: IntFieldUpdateOperationsInput;

    @Field(() => AddressUncheckedUpdateManyWithoutPostalCodeNestedInput, {nullable:true})
    address?: AddressUncheckedUpdateManyWithoutPostalCodeNestedInput;
}
