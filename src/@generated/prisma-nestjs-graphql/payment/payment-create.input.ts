import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { OrderCreateNestedOneWithoutPaymentsInput } from '../order/order-create-nested-one-without-payments.input';
import { TransactionCreateNestedOneWithoutPaymentInput } from '../transaction/transaction-create-nested-one-without-payment.input';
import { PaymentConfirmationCreateNestedOneWithoutPaymentInput } from '../payment-confirmation/payment-confirmation-create-nested-one-without-payment.input';

@InputType()
export class PaymentCreateInput {

    @Field(() => Float, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsNumber()
    adminFee!: number;

    @Field(() => Float, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsNumber()
    totalPayment!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => OrderCreateNestedOneWithoutPaymentsInput, {nullable:false})
    order!: OrderCreateNestedOneWithoutPaymentsInput;

    @Field(() => TransactionCreateNestedOneWithoutPaymentInput, {nullable:false})
    transaction!: TransactionCreateNestedOneWithoutPaymentInput;

    @Field(() => PaymentConfirmationCreateNestedOneWithoutPaymentInput, {nullable:true})
    confirmation?: PaymentConfirmationCreateNestedOneWithoutPaymentInput;
}
