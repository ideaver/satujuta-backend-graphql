import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentConfirmationCreateWithoutPaymentInput } from './payment-confirmation-create-without-payment.input';
import { Type } from 'class-transformer';
import { PaymentConfirmationCreateOrConnectWithoutPaymentInput } from './payment-confirmation-create-or-connect-without-payment.input';
import { PaymentConfirmationUpsertWithoutPaymentInput } from './payment-confirmation-upsert-without-payment.input';
import { PaymentConfirmationWhereInput } from './payment-confirmation-where.input';
import { Prisma } from '@prisma/client';
import { PaymentConfirmationWhereUniqueInput } from './payment-confirmation-where-unique.input';
import { PaymentConfirmationUpdateToOneWithWhereWithoutPaymentInput } from './payment-confirmation-update-to-one-with-where-without-payment.input';

@InputType()
export class PaymentConfirmationUncheckedUpdateOneWithoutPaymentNestedInput {

    @Field(() => PaymentConfirmationCreateWithoutPaymentInput, {nullable:true})
    @Type(() => PaymentConfirmationCreateWithoutPaymentInput)
    create?: PaymentConfirmationCreateWithoutPaymentInput;

    @Field(() => PaymentConfirmationCreateOrConnectWithoutPaymentInput, {nullable:true})
    @Type(() => PaymentConfirmationCreateOrConnectWithoutPaymentInput)
    connectOrCreate?: PaymentConfirmationCreateOrConnectWithoutPaymentInput;

    @Field(() => PaymentConfirmationUpsertWithoutPaymentInput, {nullable:true})
    @Type(() => PaymentConfirmationUpsertWithoutPaymentInput)
    upsert?: PaymentConfirmationUpsertWithoutPaymentInput;

    @Field(() => PaymentConfirmationWhereInput, {nullable:true})
    @Type(() => PaymentConfirmationWhereInput)
    disconnect?: PaymentConfirmationWhereInput;

    @Field(() => PaymentConfirmationWhereInput, {nullable:true})
    @Type(() => PaymentConfirmationWhereInput)
    delete?: PaymentConfirmationWhereInput;

    @Field(() => PaymentConfirmationWhereUniqueInput, {nullable:true})
    @Type(() => PaymentConfirmationWhereUniqueInput)
    connect?: Prisma.AtLeast<PaymentConfirmationWhereUniqueInput, 'id' | 'paymentId'>;

    @Field(() => PaymentConfirmationUpdateToOneWithWhereWithoutPaymentInput, {nullable:true})
    @Type(() => PaymentConfirmationUpdateToOneWithWhereWithoutPaymentInput)
    update?: PaymentConfirmationUpdateToOneWithWhereWithoutPaymentInput;
}
