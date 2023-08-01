import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentUpdateWithoutConfirmationInput } from './payment-update-without-confirmation.input';
import { Type } from 'class-transformer';
import { PaymentCreateWithoutConfirmationInput } from './payment-create-without-confirmation.input';
import { PaymentWhereInput } from './payment-where.input';

@InputType()
export class PaymentUpsertWithoutConfirmationInput {

    @Field(() => PaymentUpdateWithoutConfirmationInput, {nullable:false})
    @Type(() => PaymentUpdateWithoutConfirmationInput)
    update!: PaymentUpdateWithoutConfirmationInput;

    @Field(() => PaymentCreateWithoutConfirmationInput, {nullable:false})
    @Type(() => PaymentCreateWithoutConfirmationInput)
    create!: PaymentCreateWithoutConfirmationInput;

    @Field(() => PaymentWhereInput, {nullable:true})
    @Type(() => PaymentWhereInput)
    where?: PaymentWhereInput;
}
