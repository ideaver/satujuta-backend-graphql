import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { TransactionUpdateOneRequiredWithoutPaymentNestedInput } from '../transaction/transaction-update-one-required-without-payment-nested.input';
import { PaymentConfirmationUpdateOneWithoutPaymentNestedInput } from '../payment-confirmation/payment-confirmation-update-one-without-payment-nested.input';

@InputType()
export class PaymentUpdateWithoutOrderInput {

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    adminFee?: FloatFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    totalPayment?: FloatFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => TransactionUpdateOneRequiredWithoutPaymentNestedInput, {nullable:true})
    transaction?: TransactionUpdateOneRequiredWithoutPaymentNestedInput;

    @Field(() => PaymentConfirmationUpdateOneWithoutPaymentNestedInput, {nullable:true})
    confirmation?: PaymentConfirmationUpdateOneWithoutPaymentNestedInput;
}
