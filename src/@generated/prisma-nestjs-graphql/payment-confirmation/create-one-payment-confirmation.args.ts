import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PaymentConfirmationCreateInput } from './payment-confirmation-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePaymentConfirmationArgs {

    @Field(() => PaymentConfirmationCreateInput, {nullable:false})
    @Type(() => PaymentConfirmationCreateInput)
    data!: PaymentConfirmationCreateInput;
}
