import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentCreateWithoutConfirmationInput } from './payment-create-without-confirmation.input';
import { Type } from 'class-transformer';
import { PaymentCreateOrConnectWithoutConfirmationInput } from './payment-create-or-connect-without-confirmation.input';
import { PaymentUpsertWithoutConfirmationInput } from './payment-upsert-without-confirmation.input';
import { Prisma } from '@prisma/client';
import { PaymentWhereUniqueInput } from './payment-where-unique.input';
import { PaymentUpdateToOneWithWhereWithoutConfirmationInput } from './payment-update-to-one-with-where-without-confirmation.input';

@InputType()
export class PaymentUpdateOneRequiredWithoutConfirmationNestedInput {

    @Field(() => PaymentCreateWithoutConfirmationInput, {nullable:true})
    @Type(() => PaymentCreateWithoutConfirmationInput)
    create?: PaymentCreateWithoutConfirmationInput;

    @Field(() => PaymentCreateOrConnectWithoutConfirmationInput, {nullable:true})
    @Type(() => PaymentCreateOrConnectWithoutConfirmationInput)
    connectOrCreate?: PaymentCreateOrConnectWithoutConfirmationInput;

    @Field(() => PaymentUpsertWithoutConfirmationInput, {nullable:true})
    @Type(() => PaymentUpsertWithoutConfirmationInput)
    upsert?: PaymentUpsertWithoutConfirmationInput;

    @Field(() => PaymentWhereUniqueInput, {nullable:true})
    @Type(() => PaymentWhereUniqueInput)
    connect?: Prisma.AtLeast<PaymentWhereUniqueInput, 'id' | 'transactionId'>;

    @Field(() => PaymentUpdateToOneWithWhereWithoutConfirmationInput, {nullable:true})
    @Type(() => PaymentUpdateToOneWithWhereWithoutConfirmationInput)
    update?: PaymentUpdateToOneWithWhereWithoutConfirmationInput;
}
