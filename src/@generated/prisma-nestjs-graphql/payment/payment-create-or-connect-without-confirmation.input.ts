import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PaymentWhereUniqueInput } from './payment-where-unique.input';
import { Type } from 'class-transformer';
import { PaymentCreateWithoutConfirmationInput } from './payment-create-without-confirmation.input';

@InputType()
export class PaymentCreateOrConnectWithoutConfirmationInput {

    @Field(() => PaymentWhereUniqueInput, {nullable:false})
    @Type(() => PaymentWhereUniqueInput)
    where!: Prisma.AtLeast<PaymentWhereUniqueInput, 'id' | 'transactionId'>;

    @Field(() => PaymentCreateWithoutConfirmationInput, {nullable:false})
    @Type(() => PaymentCreateWithoutConfirmationInput)
    create!: PaymentCreateWithoutConfirmationInput;
}
