import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PaymentConfirmationCreateManyInput } from './payment-confirmation-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPaymentConfirmationArgs {

    @Field(() => [PaymentConfirmationCreateManyInput], {nullable:false})
    @Type(() => PaymentConfirmationCreateManyInput)
    data!: Array<PaymentConfirmationCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
