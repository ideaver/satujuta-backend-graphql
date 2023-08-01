import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentUpdateWithoutTransactionInput } from './payment-update-without-transaction.input';
import { Type } from 'class-transformer';
import { PaymentCreateWithoutTransactionInput } from './payment-create-without-transaction.input';
import { PaymentWhereInput } from './payment-where.input';

@InputType()
export class PaymentUpsertWithoutTransactionInput {

    @Field(() => PaymentUpdateWithoutTransactionInput, {nullable:false})
    @Type(() => PaymentUpdateWithoutTransactionInput)
    update!: PaymentUpdateWithoutTransactionInput;

    @Field(() => PaymentCreateWithoutTransactionInput, {nullable:false})
    @Type(() => PaymentCreateWithoutTransactionInput)
    create!: PaymentCreateWithoutTransactionInput;

    @Field(() => PaymentWhereInput, {nullable:true})
    @Type(() => PaymentWhereInput)
    where?: PaymentWhereInput;
}
