import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { PaymentUpdateOneRequiredWithoutConfirmationNestedInput } from '../payment/payment-update-one-required-without-confirmation-nested.input';

@InputType()
export class PaymentConfirmationUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    ProofUrl?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => PaymentUpdateOneRequiredWithoutConfirmationNestedInput, {nullable:true})
    payment?: PaymentUpdateOneRequiredWithoutConfirmationNestedInput;
}
