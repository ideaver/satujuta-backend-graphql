import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PaymentConfirmationWhereUniqueInput } from './payment-confirmation-where-unique.input';
import { Type } from 'class-transformer';
import { PaymentConfirmationCreateInput } from './payment-confirmation-create.input';
import { PaymentConfirmationUpdateInput } from './payment-confirmation-update.input';

@ArgsType()
export class UpsertOnePaymentConfirmationArgs {

    @Field(() => PaymentConfirmationWhereUniqueInput, {nullable:false})
    @Type(() => PaymentConfirmationWhereUniqueInput)
    where!: Prisma.AtLeast<PaymentConfirmationWhereUniqueInput, 'id' | 'paymentId'>;

    @Field(() => PaymentConfirmationCreateInput, {nullable:false})
    @Type(() => PaymentConfirmationCreateInput)
    create!: PaymentConfirmationCreateInput;

    @Field(() => PaymentConfirmationUpdateInput, {nullable:false})
    @Type(() => PaymentConfirmationUpdateInput)
    update!: PaymentConfirmationUpdateInput;
}
