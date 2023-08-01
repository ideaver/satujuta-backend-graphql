import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentConfirmationCreateWithoutPaymentInput } from './payment-confirmation-create-without-payment.input';
import { Type } from 'class-transformer';
import { PaymentConfirmationCreateOrConnectWithoutPaymentInput } from './payment-confirmation-create-or-connect-without-payment.input';
import { Prisma } from '@prisma/client';
import { PaymentConfirmationWhereUniqueInput } from './payment-confirmation-where-unique.input';

@InputType()
export class PaymentConfirmationUncheckedCreateNestedOneWithoutPaymentInput {

    @Field(() => PaymentConfirmationCreateWithoutPaymentInput, {nullable:true})
    @Type(() => PaymentConfirmationCreateWithoutPaymentInput)
    create?: PaymentConfirmationCreateWithoutPaymentInput;

    @Field(() => PaymentConfirmationCreateOrConnectWithoutPaymentInput, {nullable:true})
    @Type(() => PaymentConfirmationCreateOrConnectWithoutPaymentInput)
    connectOrCreate?: PaymentConfirmationCreateOrConnectWithoutPaymentInput;

    @Field(() => PaymentConfirmationWhereUniqueInput, {nullable:true})
    @Type(() => PaymentConfirmationWhereUniqueInput)
    connect?: Prisma.AtLeast<PaymentConfirmationWhereUniqueInput, 'id' | 'paymentId'>;
}
