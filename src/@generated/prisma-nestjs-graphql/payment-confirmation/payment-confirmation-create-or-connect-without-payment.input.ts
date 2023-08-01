import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PaymentConfirmationWhereUniqueInput } from './payment-confirmation-where-unique.input';
import { Type } from 'class-transformer';
import { PaymentConfirmationCreateWithoutPaymentInput } from './payment-confirmation-create-without-payment.input';

@InputType()
export class PaymentConfirmationCreateOrConnectWithoutPaymentInput {

    @Field(() => PaymentConfirmationWhereUniqueInput, {nullable:false})
    @Type(() => PaymentConfirmationWhereUniqueInput)
    where!: Prisma.AtLeast<PaymentConfirmationWhereUniqueInput, 'id' | 'paymentId'>;

    @Field(() => PaymentConfirmationCreateWithoutPaymentInput, {nullable:false})
    @Type(() => PaymentConfirmationCreateWithoutPaymentInput)
    create!: PaymentConfirmationCreateWithoutPaymentInput;
}
