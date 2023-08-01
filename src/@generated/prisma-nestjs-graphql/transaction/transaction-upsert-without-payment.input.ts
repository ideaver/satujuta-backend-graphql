import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionUpdateWithoutPaymentInput } from './transaction-update-without-payment.input';
import { Type } from 'class-transformer';
import { TransactionCreateWithoutPaymentInput } from './transaction-create-without-payment.input';
import { TransactionWhereInput } from './transaction-where.input';

@InputType()
export class TransactionUpsertWithoutPaymentInput {

    @Field(() => TransactionUpdateWithoutPaymentInput, {nullable:false})
    @Type(() => TransactionUpdateWithoutPaymentInput)
    update!: TransactionUpdateWithoutPaymentInput;

    @Field(() => TransactionCreateWithoutPaymentInput, {nullable:false})
    @Type(() => TransactionCreateWithoutPaymentInput)
    create!: TransactionCreateWithoutPaymentInput;

    @Field(() => TransactionWhereInput, {nullable:true})
    @Type(() => TransactionWhereInput)
    where?: TransactionWhereInput;
}
