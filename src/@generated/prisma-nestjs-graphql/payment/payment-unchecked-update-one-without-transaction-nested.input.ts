import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentCreateWithoutTransactionInput } from './payment-create-without-transaction.input';
import { Type } from 'class-transformer';
import { PaymentCreateOrConnectWithoutTransactionInput } from './payment-create-or-connect-without-transaction.input';
import { PaymentUpsertWithoutTransactionInput } from './payment-upsert-without-transaction.input';
import { PaymentWhereInput } from './payment-where.input';
import { Prisma } from '@prisma/client';
import { PaymentWhereUniqueInput } from './payment-where-unique.input';
import { PaymentUpdateToOneWithWhereWithoutTransactionInput } from './payment-update-to-one-with-where-without-transaction.input';

@InputType()
export class PaymentUncheckedUpdateOneWithoutTransactionNestedInput {

    @Field(() => PaymentCreateWithoutTransactionInput, {nullable:true})
    @Type(() => PaymentCreateWithoutTransactionInput)
    create?: PaymentCreateWithoutTransactionInput;

    @Field(() => PaymentCreateOrConnectWithoutTransactionInput, {nullable:true})
    @Type(() => PaymentCreateOrConnectWithoutTransactionInput)
    connectOrCreate?: PaymentCreateOrConnectWithoutTransactionInput;

    @Field(() => PaymentUpsertWithoutTransactionInput, {nullable:true})
    @Type(() => PaymentUpsertWithoutTransactionInput)
    upsert?: PaymentUpsertWithoutTransactionInput;

    @Field(() => PaymentWhereInput, {nullable:true})
    @Type(() => PaymentWhereInput)
    disconnect?: PaymentWhereInput;

    @Field(() => PaymentWhereInput, {nullable:true})
    @Type(() => PaymentWhereInput)
    delete?: PaymentWhereInput;

    @Field(() => PaymentWhereUniqueInput, {nullable:true})
    @Type(() => PaymentWhereUniqueInput)
    connect?: Prisma.AtLeast<PaymentWhereUniqueInput, 'id' | 'transactionId'>;

    @Field(() => PaymentUpdateToOneWithWhereWithoutTransactionInput, {nullable:true})
    @Type(() => PaymentUpdateToOneWithWhereWithoutTransactionInput)
    update?: PaymentUpdateToOneWithWhereWithoutTransactionInput;
}
