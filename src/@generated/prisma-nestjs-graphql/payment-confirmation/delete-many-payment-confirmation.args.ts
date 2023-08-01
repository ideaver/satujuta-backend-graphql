import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PaymentConfirmationWhereInput } from './payment-confirmation-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyPaymentConfirmationArgs {

    @Field(() => PaymentConfirmationWhereInput, {nullable:true})
    @Type(() => PaymentConfirmationWhereInput)
    where?: PaymentConfirmationWhereInput;
}
