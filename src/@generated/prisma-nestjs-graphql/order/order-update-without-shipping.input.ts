import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumTransactionStatusFieldUpdateOperationsInput } from '../prisma/enum-transaction-status-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutOrdersNestedInput } from '../user/user-update-one-required-without-orders-nested.input';
import { ItemUpdateManyWithoutOrderNestedInput } from '../item/item-update-many-without-order-nested.input';
import { PaymentUpdateManyWithoutOrderNestedInput } from '../payment/payment-update-many-without-order-nested.input';

@InputType()
export class OrderUpdateWithoutShippingInput {

    @Field(() => EnumTransactionStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumTransactionStatusFieldUpdateOperationsInput;

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

    @Field(() => UserUpdateOneRequiredWithoutOrdersNestedInput, {nullable:true})
    orderBy?: UserUpdateOneRequiredWithoutOrdersNestedInput;

    @Field(() => ItemUpdateManyWithoutOrderNestedInput, {nullable:true})
    items?: ItemUpdateManyWithoutOrderNestedInput;

    @Field(() => PaymentUpdateManyWithoutOrderNestedInput, {nullable:true})
    payments?: PaymentUpdateManyWithoutOrderNestedInput;
}
