import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PaymentConfirmationUpdateManyMutationInput } from './payment-confirmation-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PaymentConfirmationWhereInput } from './payment-confirmation-where.input';

@ArgsType()
export class UpdateManyPaymentConfirmationArgs {

    @Field(() => PaymentConfirmationUpdateManyMutationInput, {nullable:false})
    @Type(() => PaymentConfirmationUpdateManyMutationInput)
    data!: PaymentConfirmationUpdateManyMutationInput;

    @Field(() => PaymentConfirmationWhereInput, {nullable:true})
    @Type(() => PaymentConfirmationWhereInput)
    where?: PaymentConfirmationWhereInput;
}
