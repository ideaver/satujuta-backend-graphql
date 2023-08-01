import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentConfirmationWhereInput } from './payment-confirmation-where.input';
import { Type } from 'class-transformer';
import { PaymentConfirmationUpdateWithoutPaymentInput } from './payment-confirmation-update-without-payment.input';

@InputType()
export class PaymentConfirmationUpdateToOneWithWhereWithoutPaymentInput {

    @Field(() => PaymentConfirmationWhereInput, {nullable:true})
    @Type(() => PaymentConfirmationWhereInput)
    where?: PaymentConfirmationWhereInput;

    @Field(() => PaymentConfirmationUpdateWithoutPaymentInput, {nullable:false})
    @Type(() => PaymentConfirmationUpdateWithoutPaymentInput)
    data!: PaymentConfirmationUpdateWithoutPaymentInput;
}
