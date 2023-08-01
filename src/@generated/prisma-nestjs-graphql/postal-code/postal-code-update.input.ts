import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { AddressUpdateManyWithoutPostalCodeNestedInput } from '../address/address-update-many-without-postal-code-nested.input';

@InputType()
export class PostalCodeUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    code?: IntFieldUpdateOperationsInput;

    @Field(() => AddressUpdateManyWithoutPostalCodeNestedInput, {nullable:true})
    address?: AddressUpdateManyWithoutPostalCodeNestedInput;
}
