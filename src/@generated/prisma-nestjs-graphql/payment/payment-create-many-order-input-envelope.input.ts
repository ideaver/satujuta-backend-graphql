import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentCreateManyOrderInput } from './payment-create-many-order.input';
import { Type } from 'class-transformer';

@InputType()
export class PaymentCreateManyOrderInputEnvelope {

    @Field(() => [PaymentCreateManyOrderInput], {nullable:false})
    @Type(() => PaymentCreateManyOrderInput)
    data!: Array<PaymentCreateManyOrderInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
