import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { PaymentConfirmationUncheckedCreateNestedOneWithoutPaymentInput } from '../payment-confirmation/payment-confirmation-unchecked-create-nested-one-without-payment.input';

@InputType()
export class PaymentUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsNumber()
    adminFee!: number;

    @Field(() => Float, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsNumber()
    totalPayment!: number;

    @Field(() => Int, {nullable:false})
    orderId!: number;

    @Field(() => Int, {nullable:false})
    transactionId!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => PaymentConfirmationUncheckedCreateNestedOneWithoutPaymentInput, {nullable:true})
    confirmation?: PaymentConfirmationUncheckedCreateNestedOneWithoutPaymentInput;
}
