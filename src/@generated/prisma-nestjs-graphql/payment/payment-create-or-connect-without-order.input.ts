import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PaymentWhereUniqueInput } from './payment-where-unique.input';
import { Type } from 'class-transformer';
import { PaymentCreateWithoutOrderInput } from './payment-create-without-order.input';

@InputType()
export class PaymentCreateOrConnectWithoutOrderInput {

    @Field(() => PaymentWhereUniqueInput, {nullable:false})
    @Type(() => PaymentWhereUniqueInput)
    where!: Prisma.AtLeast<PaymentWhereUniqueInput, 'id' | 'transactionId'>;

    @Field(() => PaymentCreateWithoutOrderInput, {nullable:false})
    @Type(() => PaymentCreateWithoutOrderInput)
    create!: PaymentCreateWithoutOrderInput;
}
