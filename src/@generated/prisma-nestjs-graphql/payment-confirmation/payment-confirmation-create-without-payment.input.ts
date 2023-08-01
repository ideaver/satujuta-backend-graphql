import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';

@InputType()
export class PaymentConfirmationCreateWithoutPaymentInput {

    @Field(() => String, {nullable:false})
    @Validator.IsUrl({ require_protocol: true })
    ProofUrl!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
