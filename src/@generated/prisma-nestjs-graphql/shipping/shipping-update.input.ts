import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { EnumShippingStatusFieldUpdateOperationsInput } from '../prisma/enum-shipping-status-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { AddressUpdateOneRequiredWithoutShippingNestedInput } from '../address/address-update-one-required-without-shipping-nested.input';
import { OrderUpdateOneRequiredWithoutShippingNestedInput } from '../order/order-update-one-required-without-shipping-nested.input';

@InputType()
export class ShippingUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    logisticName?: StringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deliveryDate?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => EnumShippingStatusFieldUpdateOperationsInput, {nullable:true})
    shippingStatus?: EnumShippingStatusFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    courier?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    estimatedTime?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    trackingNo?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => AddressUpdateOneRequiredWithoutShippingNestedInput, {nullable:true})
    address?: AddressUpdateOneRequiredWithoutShippingNestedInput;

    @Field(() => OrderUpdateOneRequiredWithoutShippingNestedInput, {nullable:true})
    order?: OrderUpdateOneRequiredWithoutShippingNestedInput;
}
