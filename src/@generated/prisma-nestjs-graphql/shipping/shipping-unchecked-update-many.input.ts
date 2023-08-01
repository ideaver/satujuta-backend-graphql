import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { EnumShippingStatusFieldUpdateOperationsInput } from '../prisma/enum-shipping-status-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class ShippingUncheckedUpdateManyInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    logisticName?: StringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deliveryDate?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => EnumShippingStatusFieldUpdateOperationsInput, {nullable:true})
    shippingStatus?: EnumShippingStatusFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    addressId?: IntFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    courier?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    estimatedTime?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    trackingNo?: NullableStringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    orderId?: IntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
