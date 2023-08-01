import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateWithoutOrderByInput } from './order-create-without-order-by.input';
import { Type } from 'class-transformer';
import { OrderCreateOrConnectWithoutOrderByInput } from './order-create-or-connect-without-order-by.input';
import { OrderCreateManyOrderByInputEnvelope } from './order-create-many-order-by-input-envelope.input';
import { Prisma } from '@prisma/client';
import { OrderWhereUniqueInput } from './order-where-unique.input';

@InputType()
export class OrderUncheckedCreateNestedManyWithoutOrderByInput {

    @Field(() => [OrderCreateWithoutOrderByInput], {nullable:true})
    @Type(() => OrderCreateWithoutOrderByInput)
    create?: Array<OrderCreateWithoutOrderByInput>;

    @Field(() => [OrderCreateOrConnectWithoutOrderByInput], {nullable:true})
    @Type(() => OrderCreateOrConnectWithoutOrderByInput)
    connectOrCreate?: Array<OrderCreateOrConnectWithoutOrderByInput>;

    @Field(() => OrderCreateManyOrderByInputEnvelope, {nullable:true})
    @Type(() => OrderCreateManyOrderByInputEnvelope)
    createMany?: OrderCreateManyOrderByInputEnvelope;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById'>>;
}
