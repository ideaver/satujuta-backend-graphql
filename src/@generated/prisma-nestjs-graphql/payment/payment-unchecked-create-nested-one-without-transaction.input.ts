import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentCreateWithoutTransactionInput } from './payment-create-without-transaction.input';
import { Type } from 'class-transformer';
import { PaymentCreateOrConnectWithoutTransactionInput } from './payment-create-or-connect-without-transaction.input';
import { Prisma } from '@prisma/client';
import { PaymentWhereUniqueInput } from './payment-where-unique.input';

@InputType()
export class PaymentUncheckedCreateNestedOneWithoutTransactionInput {

    @Field(() => PaymentCreateWithoutTransactionInput, {nullable:true})
    @Type(() => PaymentCreateWithoutTransactionInput)
    create?: PaymentCreateWithoutTransactionInput;

    @Field(() => PaymentCreateOrConnectWithoutTransactionInput, {nullable:true})
    @Type(() => PaymentCreateOrConnectWithoutTransactionInput)
    connectOrCreate?: PaymentCreateOrConnectWithoutTransactionInput;

    @Field(() => PaymentWhereUniqueInput, {nullable:true})
    @Type(() => PaymentWhereUniqueInput)
    connect?: Prisma.AtLeast<PaymentWhereUniqueInput, 'id' | 'transactionId'>;
}
