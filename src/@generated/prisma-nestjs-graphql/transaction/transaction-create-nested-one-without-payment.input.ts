import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionCreateWithoutPaymentInput } from './transaction-create-without-payment.input';
import { Type } from 'class-transformer';
import { TransactionCreateOrConnectWithoutPaymentInput } from './transaction-create-or-connect-without-payment.input';
import { Prisma } from '@prisma/client';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';

@InputType()
export class TransactionCreateNestedOneWithoutPaymentInput {

    @Field(() => TransactionCreateWithoutPaymentInput, {nullable:true})
    @Type(() => TransactionCreateWithoutPaymentInput)
    create?: TransactionCreateWithoutPaymentInput;

    @Field(() => TransactionCreateOrConnectWithoutPaymentInput, {nullable:true})
    @Type(() => TransactionCreateOrConnectWithoutPaymentInput)
    connectOrCreate?: TransactionCreateOrConnectWithoutPaymentInput;

    @Field(() => TransactionWhereUniqueInput, {nullable:true})
    @Type(() => TransactionWhereUniqueInput)
    connect?: Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'userId' | 'accountId'>;
}
