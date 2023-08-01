import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentConfirmationWhereInput } from './payment-confirmation-where.input';

@InputType()
export class PaymentConfirmationNullableRelationFilter {

    @Field(() => PaymentConfirmationWhereInput, {nullable:true})
    is?: PaymentConfirmationWhereInput;

    @Field(() => PaymentConfirmationWhereInput, {nullable:true})
    isNot?: PaymentConfirmationWhereInput;
}
