import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { HotelUpdateOneRequiredWithoutCheckInsNestedInput } from '../hotel/hotel-update-one-required-without-check-ins-nested.input';

@InputType()
export class CheckInUpdateWithoutUserInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    checkInAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => HotelUpdateOneRequiredWithoutCheckInsNestedInput, {nullable:true})
    hotel?: HotelUpdateOneRequiredWithoutCheckInsNestedInput;
}
