import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PaymentConfirmationWhereUniqueInput } from './payment-confirmation-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquePaymentConfirmationArgs {

    @Field(() => PaymentConfirmationWhereUniqueInput, {nullable:false})
    @Type(() => PaymentConfirmationWhereUniqueInput)
    where!: Prisma.AtLeast<PaymentConfirmationWhereUniqueInput, 'id' | 'paymentId'>;
}
