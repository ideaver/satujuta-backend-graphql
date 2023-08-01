import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { EnumTransactionStatusFieldUpdateOperationsInput } from '../prisma/enum-transaction-status-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ItemUncheckedUpdateManyWithoutOrderNestedInput } from '../item/item-unchecked-update-many-without-order-nested.input';
import { PaymentUncheckedUpdateManyWithoutOrderNestedInput } from '../payment/payment-unchecked-update-many-without-order-nested.input';

@InputType()
export class OrderUncheckedUpdateWithoutShippingInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => EnumTransactionStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumTransactionStatusFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    orderById?: StringFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    shippingId?: NullableIntFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isFullPaid?: BoolFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    cost?: FloatFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    platformFee?: FloatFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    total?: FloatFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ItemUncheckedUpdateManyWithoutOrderNestedInput, {nullable:true})
    items?: ItemUncheckedUpdateManyWithoutOrderNestedInput;

    @Field(() => PaymentUncheckedUpdateManyWithoutOrderNestedInput, {nullable:true})
    payments?: PaymentUncheckedUpdateManyWithoutOrderNestedInput;
}
