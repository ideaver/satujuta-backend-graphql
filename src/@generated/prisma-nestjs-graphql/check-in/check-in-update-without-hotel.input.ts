import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutCheckInsNestedInput } from '../user/user-update-one-required-without-check-ins-nested.input';

@InputType()
export class CheckInUpdateWithoutHotelInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    checkInAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutCheckInsNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutCheckInsNestedInput;
}
