import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentWhereInput } from './payment-where.input';
import { Type } from 'class-transformer';
import { PaymentUpdateWithoutTransactionInput } from './payment-update-without-transaction.input';

@InputType()
export class PaymentUpdateToOneWithWhereWithoutTransactionInput {

    @Field(() => PaymentWhereInput, {nullable:true})
    @Type(() => PaymentWhereInput)
    where?: PaymentWhereInput;

    @Field(() => PaymentUpdateWithoutTransactionInput, {nullable:false})
    @Type(() => PaymentUpdateWithoutTransactionInput)
    data!: PaymentUpdateWithoutTransactionInput;
}
