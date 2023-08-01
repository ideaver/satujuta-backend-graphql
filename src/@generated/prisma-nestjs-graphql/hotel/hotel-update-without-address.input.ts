import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { ImagesUpdateManyWithoutHotelImageNestedInput } from '../images/images-update-many-without-hotel-image-nested.input';
import { CheckInUpdateManyWithoutHotelNestedInput } from '../check-in/check-in-update-many-without-hotel-nested.input';
import { UserUpdateOneRequiredWithoutHotelsCreatedNestedInput } from '../user/user-update-one-required-without-hotels-created-nested.input';

@InputType()
export class HotelUpdateWithoutAddressInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    rating?: FloatFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    startDate?: DateTimeFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    quota?: IntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ImagesUpdateManyWithoutHotelImageNestedInput, {nullable:true})
    images?: ImagesUpdateManyWithoutHotelImageNestedInput;

    @Field(() => CheckInUpdateManyWithoutHotelNestedInput, {nullable:true})
    checkIns?: CheckInUpdateManyWithoutHotelNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutHotelsCreatedNestedInput, {nullable:true})
    createdBy?: UserUpdateOneRequiredWithoutHotelsCreatedNestedInput;
}
