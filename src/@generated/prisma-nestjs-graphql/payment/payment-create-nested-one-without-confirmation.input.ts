import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentCreateWithoutConfirmationInput } from './payment-create-without-confirmation.input';
import { Type } from 'class-transformer';
import { PaymentCreateOrConnectWithoutConfirmationInput } from './payment-create-or-connect-without-confirmation.input';
import { Prisma } from '@prisma/client';
import { PaymentWhereUniqueInput } from './payment-where-unique.input';

@InputType()
export class PaymentCreateNestedOneWithoutConfirmationInput {

    @Field(() => PaymentCreateWithoutConfirmationInput, {nullable:true})
    @Type(() => PaymentCreateWithoutConfirmationInput)
    create?: PaymentCreateWithoutConfirmationInput;

    @Field(() => PaymentCreateOrConnectWithoutConfirmationInput, {nullable:true})
    @Type(() => PaymentCreateOrConnectWithoutConfirmationInput)
    connectOrCreate?: PaymentCreateOrConnectWithoutConfirmationInput;

    @Field(() => PaymentWhereUniqueInput, {nullable:true})
    @Type(() => PaymentWhereUniqueInput)
    connect?: Prisma.AtLeast<PaymentWhereUniqueInput, 'id' | 'transactionId'>;
}
