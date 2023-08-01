import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionCreateWithoutPaymentInput } from './transaction-create-without-payment.input';
import { Type } from 'class-transformer';
import { TransactionCreateOrConnectWithoutPaymentInput } from './transaction-create-or-connect-without-payment.input';
import { TransactionUpsertWithoutPaymentInput } from './transaction-upsert-without-payment.input';
import { Prisma } from '@prisma/client';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';
import { TransactionUpdateToOneWithWhereWithoutPaymentInput } from './transaction-update-to-one-with-where-without-payment.input';

@InputType()
export class TransactionUpdateOneRequiredWithoutPaymentNestedInput {

    @Field(() => TransactionCreateWithoutPaymentInput, {nullable:true})
    @Type(() => TransactionCreateWithoutPaymentInput)
    create?: TransactionCreateWithoutPaymentInput;

    @Field(() => TransactionCreateOrConnectWithoutPaymentInput, {nullable:true})
    @Type(() => TransactionCreateOrConnectWithoutPaymentInput)
    connectOrCreate?: TransactionCreateOrConnectWithoutPaymentInput;

    @Field(() => TransactionUpsertWithoutPaymentInput, {nullable:true})
    @Type(() => TransactionUpsertWithoutPaymentInput)
    upsert?: TransactionUpsertWithoutPaymentInput;

    @Field(() => TransactionWhereUniqueInput, {nullable:true})
    @Type(() => TransactionWhereUniqueInput)
    connect?: Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'userId' | 'accountId'>;

    @Field(() => TransactionUpdateToOneWithWhereWithoutPaymentInput, {nullable:true})
    @Type(() => TransactionUpdateToOneWithWhereWithoutPaymentInput)
    update?: TransactionUpdateToOneWithWhereWithoutPaymentInput;
}
