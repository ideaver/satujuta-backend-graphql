import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentCreateWithoutOrderInput } from './payment-create-without-order.input';
import { Type } from 'class-transformer';
import { PaymentCreateOrConnectWithoutOrderInput } from './payment-create-or-connect-without-order.input';
import { PaymentUpsertWithWhereUniqueWithoutOrderInput } from './payment-upsert-with-where-unique-without-order.input';
import { PaymentCreateManyOrderInputEnvelope } from './payment-create-many-order-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PaymentWhereUniqueInput } from './payment-where-unique.input';
import { PaymentUpdateWithWhereUniqueWithoutOrderInput } from './payment-update-with-where-unique-without-order.input';
import { PaymentUpdateManyWithWhereWithoutOrderInput } from './payment-update-many-with-where-without-order.input';
import { PaymentScalarWhereInput } from './payment-scalar-where.input';

@InputType()
export class PaymentUncheckedUpdateManyWithoutOrderNestedInput {

    @Field(() => [PaymentCreateWithoutOrderInput], {nullable:true})
    @Type(() => PaymentCreateWithoutOrderInput)
    create?: Array<PaymentCreateWithoutOrderInput>;

    @Field(() => [PaymentCreateOrConnectWithoutOrderInput], {nullable:true})
    @Type(() => PaymentCreateOrConnectWithoutOrderInput)
    connectOrCreate?: Array<PaymentCreateOrConnectWithoutOrderInput>;

    @Field(() => [PaymentUpsertWithWhereUniqueWithoutOrderInput], {nullable:true})
    @Type(() => PaymentUpsertWithWhereUniqueWithoutOrderInput)
    upsert?: Array<PaymentUpsertWithWhereUniqueWithoutOrderInput>;

    @Field(() => PaymentCreateManyOrderInputEnvelope, {nullable:true})
    @Type(() => PaymentCreateManyOrderInputEnvelope)
    createMany?: PaymentCreateManyOrderInputEnvelope;

    @Field(() => [PaymentWhereUniqueInput], {nullable:true})
    @Type(() => PaymentWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PaymentWhereUniqueInput, 'id' | 'transactionId'>>;

    @Field(() => [PaymentWhereUniqueInput], {nullable:true})
    @Type(() => PaymentWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PaymentWhereUniqueInput, 'id' | 'transactionId'>>;

    @Field(() => [PaymentWhereUniqueInput], {nullable:true})
    @Type(() => PaymentWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PaymentWhereUniqueInput, 'id' | 'transactionId'>>;

    @Field(() => [PaymentWhereUniqueInput], {nullable:true})
    @Type(() => PaymentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PaymentWhereUniqueInput, 'id' | 'transactionId'>>;

    @Field(() => [PaymentUpdateWithWhereUniqueWithoutOrderInput], {nullable:true})
    @Type(() => PaymentUpdateWithWhereUniqueWithoutOrderInput)
    update?: Array<PaymentUpdateWithWhereUniqueWithoutOrderInput>;

    @Field(() => [PaymentUpdateManyWithWhereWithoutOrderInput], {nullable:true})
    @Type(() => PaymentUpdateManyWithWhereWithoutOrderInput)
    updateMany?: Array<PaymentUpdateManyWithWhereWithoutOrderInput>;

    @Field(() => [PaymentScalarWhereInput], {nullable:true})
    @Type(() => PaymentScalarWhereInput)
    deleteMany?: Array<PaymentScalarWhereInput>;
}
