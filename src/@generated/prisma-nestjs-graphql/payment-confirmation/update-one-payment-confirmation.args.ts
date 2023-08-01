import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PaymentConfirmationUpdateInput } from './payment-confirmation-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { PaymentConfirmationWhereUniqueInput } from './payment-confirmation-where-unique.input';

@ArgsType()
export class UpdateOnePaymentConfirmationArgs {

    @Field(() => PaymentConfirmationUpdateInput, {nullable:false})
    @Type(() => PaymentConfirmationUpdateInput)
    data!: PaymentConfirmationUpdateInput;

    @Field(() => PaymentConfirmationWhereUniqueInput, {nullable:false})
    @Type(() => PaymentConfirmationWhereUniqueInput)
    where!: Prisma.AtLeast<PaymentConfirmationWhereUniqueInput, 'id' | 'paymentId'>;
}
