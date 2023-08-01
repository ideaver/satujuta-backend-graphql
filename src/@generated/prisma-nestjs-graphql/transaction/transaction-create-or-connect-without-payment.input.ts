import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';
import { Type } from 'class-transformer';
import { TransactionCreateWithoutPaymentInput } from './transaction-create-without-payment.input';

@InputType()
export class TransactionCreateOrConnectWithoutPaymentInput {

    @Field(() => TransactionWhereUniqueInput, {nullable:false})
    @Type(() => TransactionWhereUniqueInput)
    where!: Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'userId' | 'accountId'>;

    @Field(() => TransactionCreateWithoutPaymentInput, {nullable:false})
    @Type(() => TransactionCreateWithoutPaymentInput)
    create!: TransactionCreateWithoutPaymentInput;
}
