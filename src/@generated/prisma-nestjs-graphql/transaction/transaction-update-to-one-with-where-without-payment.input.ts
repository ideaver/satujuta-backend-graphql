import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionWhereInput } from './transaction-where.input';
import { Type } from 'class-transformer';
import { TransactionUpdateWithoutPaymentInput } from './transaction-update-without-payment.input';

@InputType()
export class TransactionUpdateToOneWithWhereWithoutPaymentInput {

    @Field(() => TransactionWhereInput, {nullable:true})
    @Type(() => TransactionWhereInput)
    where?: TransactionWhereInput;

    @Field(() => TransactionUpdateWithoutPaymentInput, {nullable:false})
    @Type(() => TransactionUpdateWithoutPaymentInput)
    data!: TransactionUpdateWithoutPaymentInput;
}
