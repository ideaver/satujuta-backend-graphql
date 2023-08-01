import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentCreateWithoutOrderInput } from './payment-create-without-order.input';
import { Type } from 'class-transformer';
import { PaymentCreateOrConnectWithoutOrderInput } from './payment-create-or-connect-without-order.input';
import { PaymentCreateManyOrderInputEnvelope } from './payment-create-many-order-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PaymentWhereUniqueInput } from './payment-where-unique.input';

@InputType()
export class PaymentCreateNestedManyWithoutOrderInput {

    @Field(() => [PaymentCreateWithoutOrderInput], {nullable:true})
    @Type(() => PaymentCreateWithoutOrderInput)
    create?: Array<PaymentCreateWithoutOrderInput>;

    @Field(() => [PaymentCreateOrConnectWithoutOrderInput], {nullable:true})
    @Type(() => PaymentCreateOrConnectWithoutOrderInput)
    connectOrCreate?: Array<PaymentCreateOrConnectWithoutOrderInput>;

    @Field(() => PaymentCreateManyOrderInputEnvelope, {nullable:true})
    @Type(() => PaymentCreateManyOrderInputEnvelope)
    createMany?: PaymentCreateManyOrderInputEnvelope;

    @Field(() => [PaymentWhereUniqueInput], {nullable:true})
    @Type(() => PaymentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PaymentWhereUniqueInput, 'id' | 'transactionId'>>;
}
