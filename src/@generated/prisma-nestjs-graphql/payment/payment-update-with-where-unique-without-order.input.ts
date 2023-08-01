import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PaymentWhereUniqueInput } from './payment-where-unique.input';
import { Type } from 'class-transformer';
import { PaymentUpdateWithoutOrderInput } from './payment-update-without-order.input';

@InputType()
export class PaymentUpdateWithWhereUniqueWithoutOrderInput {

    @Field(() => PaymentWhereUniqueInput, {nullable:false})
    @Type(() => PaymentWhereUniqueInput)
    where!: Prisma.AtLeast<PaymentWhereUniqueInput, 'id' | 'transactionId'>;

    @Field(() => PaymentUpdateWithoutOrderInput, {nullable:false})
    @Type(() => PaymentUpdateWithoutOrderInput)
    data!: PaymentUpdateWithoutOrderInput;
}
