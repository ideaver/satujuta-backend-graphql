import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { PaymentCreateNestedOneWithoutConfirmationInput } from '../payment/payment-create-nested-one-without-confirmation.input';

@InputType()
export class PaymentConfirmationCreateInput {

    @Field(() => String, {nullable:false})
    @Validator.IsUrl({ require_protocol: true })
    ProofUrl!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => PaymentCreateNestedOneWithoutConfirmationInput, {nullable:false})
    payment!: PaymentCreateNestedOneWithoutConfirmationInput;
}
