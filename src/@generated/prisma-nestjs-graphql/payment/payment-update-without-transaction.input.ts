import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { OrderUpdateOneRequiredWithoutPaymentsNestedInput } from '../order/order-update-one-required-without-payments-nested.input';
import { PaymentConfirmationUpdateOneWithoutPaymentNestedInput } from '../payment-confirmation/payment-confirmation-update-one-without-payment-nested.input';

@InputType()
export class PaymentUpdateWithoutTransactionInput {

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    adminFee?: FloatFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    totalPayment?: FloatFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => OrderUpdateOneRequiredWithoutPaymentsNestedInput, {nullable:true})
    order?: OrderUpdateOneRequiredWithoutPaymentsNestedInput;

    @Field(() => PaymentConfirmationUpdateOneWithoutPaymentNestedInput, {nullable:true})
    confirmation?: PaymentConfirmationUpdateOneWithoutPaymentNestedInput;
}
