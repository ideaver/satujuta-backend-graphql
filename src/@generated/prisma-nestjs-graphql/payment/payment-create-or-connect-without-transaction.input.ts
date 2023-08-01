import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PaymentWhereUniqueInput } from './payment-where-unique.input';
import { Type } from 'class-transformer';
import { PaymentCreateWithoutTransactionInput } from './payment-create-without-transaction.input';

@InputType()
export class PaymentCreateOrConnectWithoutTransactionInput {

    @Field(() => PaymentWhereUniqueInput, {nullable:false})
    @Type(() => PaymentWhereUniqueInput)
    where!: Prisma.AtLeast<PaymentWhereUniqueInput, 'id' | 'transactionId'>;

    @Field(() => PaymentCreateWithoutTransactionInput, {nullable:false})
    @Type(() => PaymentCreateWithoutTransactionInput)
    create!: PaymentCreateWithoutTransactionInput;
}
