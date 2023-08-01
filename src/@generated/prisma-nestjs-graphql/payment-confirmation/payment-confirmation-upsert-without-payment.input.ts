import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentConfirmationUpdateWithoutPaymentInput } from './payment-confirmation-update-without-payment.input';
import { Type } from 'class-transformer';
import { PaymentConfirmationCreateWithoutPaymentInput } from './payment-confirmation-create-without-payment.input';
import { PaymentConfirmationWhereInput } from './payment-confirmation-where.input';

@InputType()
export class PaymentConfirmationUpsertWithoutPaymentInput {

    @Field(() => PaymentConfirmationUpdateWithoutPaymentInput, {nullable:false})
    @Type(() => PaymentConfirmationUpdateWithoutPaymentInput)
    update!: PaymentConfirmationUpdateWithoutPaymentInput;

    @Field(() => PaymentConfirmationCreateWithoutPaymentInput, {nullable:false})
    @Type(() => PaymentConfirmationCreateWithoutPaymentInput)
    create!: PaymentConfirmationCreateWithoutPaymentInput;

    @Field(() => PaymentConfirmationWhereInput, {nullable:true})
    @Type(() => PaymentConfirmationWhereInput)
    where?: PaymentConfirmationWhereInput;
}
