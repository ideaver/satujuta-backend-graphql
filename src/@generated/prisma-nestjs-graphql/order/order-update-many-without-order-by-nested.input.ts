import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateWithoutOrderByInput } from './order-create-without-order-by.input';
import { Type } from 'class-transformer';
import { OrderCreateOrConnectWithoutOrderByInput } from './order-create-or-connect-without-order-by.input';
import { OrderUpsertWithWhereUniqueWithoutOrderByInput } from './order-upsert-with-where-unique-without-order-by.input';
import { OrderCreateManyOrderByInputEnvelope } from './order-create-many-order-by-input-envelope.input';
import { Prisma } from '@prisma/client';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { OrderUpdateWithWhereUniqueWithoutOrderByInput } from './order-update-with-where-unique-without-order-by.input';
import { OrderUpdateManyWithWhereWithoutOrderByInput } from './order-update-many-with-where-without-order-by.input';
import { OrderScalarWhereInput } from './order-scalar-where.input';

@InputType()
export class OrderUpdateManyWithoutOrderByNestedInput {

    @Field(() => [OrderCreateWithoutOrderByInput], {nullable:true})
    @Type(() => OrderCreateWithoutOrderByInput)
    create?: Array<OrderCreateWithoutOrderByInput>;

    @Field(() => [OrderCreateOrConnectWithoutOrderByInput], {nullable:true})
    @Type(() => OrderCreateOrConnectWithoutOrderByInput)
    connectOrCreate?: Array<OrderCreateOrConnectWithoutOrderByInput>;

    @Field(() => [OrderUpsertWithWhereUniqueWithoutOrderByInput], {nullable:true})
    @Type(() => OrderUpsertWithWhereUniqueWithoutOrderByInput)
    upsert?: Array<OrderUpsertWithWhereUniqueWithoutOrderByInput>;

    @Field(() => OrderCreateManyOrderByInputEnvelope, {nullable:true})
    @Type(() => OrderCreateManyOrderByInputEnvelope)
    createMany?: OrderCreateManyOrderByInputEnvelope;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    set?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById'>>;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById'>>;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById'>>;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById'>>;

    @Field(() => [OrderUpdateWithWhereUniqueWithoutOrderByInput], {nullable:true})
    @Type(() => OrderUpdateWithWhereUniqueWithoutOrderByInput)
    update?: Array<OrderUpdateWithWhereUniqueWithoutOrderByInput>;

    @Field(() => [OrderUpdateManyWithWhereWithoutOrderByInput], {nullable:true})
    @Type(() => OrderUpdateManyWithWhereWithoutOrderByInput)
    updateMany?: Array<OrderUpdateManyWithWhereWithoutOrderByInput>;

    @Field(() => [OrderScalarWhereInput], {nullable:true})
    @Type(() => OrderScalarWhereInput)
    deleteMany?: Array<OrderScalarWhereInput>;
}
