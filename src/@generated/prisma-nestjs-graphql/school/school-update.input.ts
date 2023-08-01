import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { AddressUpdateOneRequiredWithoutSchoolNestedInput } from '../address/address-update-one-required-without-school-nested.input';
import { UserUpdateManyWithoutSchoolNestedInput } from '../user/user-update-many-without-school-nested.input';

@InputType()
export class SchoolUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => AddressUpdateOneRequiredWithoutSchoolNestedInput, {nullable:true})
    address?: AddressUpdateOneRequiredWithoutSchoolNestedInput;

    @Field(() => UserUpdateManyWithoutSchoolNestedInput, {nullable:true})
    students?: UserUpdateManyWithoutSchoolNestedInput;
}
