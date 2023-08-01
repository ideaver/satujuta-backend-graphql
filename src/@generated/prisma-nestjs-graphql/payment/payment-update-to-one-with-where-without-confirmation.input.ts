import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentWhereInput } from './payment-where.input';
import { Type } from 'class-transformer';
import { PaymentUpdateWithoutConfirmationInput } from './payment-update-without-confirmation.input';

@InputType()
export class PaymentUpdateToOneWithWhereWithoutConfirmationInput {

    @Field(() => PaymentWhereInput, {nullable:true})
    @Type(() => PaymentWhereInput)
    where?: PaymentWhereInput;

    @Field(() => PaymentUpdateWithoutConfirmationInput, {nullable:false})
    @Type(() => PaymentUpdateWithoutConfirmationInput)
    data!: PaymentUpdateWithoutConfirmationInput;
}
