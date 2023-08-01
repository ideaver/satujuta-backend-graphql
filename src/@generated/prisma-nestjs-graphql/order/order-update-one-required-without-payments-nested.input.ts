import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateWithoutPaymentsInput } from './order-create-without-payments.input';
import { Type } from 'class-transformer';
import { OrderCreateOrConnectWithoutPaymentsInput } from './order-create-or-connect-without-payments.input';
import { OrderUpsertWithoutPaymentsInput } from './order-upsert-without-payments.input';
import { Prisma } from '@prisma/client';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { OrderUpdateToOneWithWhereWithoutPaymentsInput } from './order-update-to-one-with-where-without-payments.input';

@InputType()
export class OrderUpdateOneRequiredWithoutPaymentsNestedInput {

    @Field(() => OrderCreateWithoutPaymentsInput, {nullable:true})
    @Type(() => OrderCreateWithoutPaymentsInput)
    create?: OrderCreateWithoutPaymentsInput;

    @Field(() => OrderCreateOrConnectWithoutPaymentsInput, {nullable:true})
    @Type(() => OrderCreateOrConnectWithoutPaymentsInput)
    connectOrCreate?: OrderCreateOrConnectWithoutPaymentsInput;

    @Field(() => OrderUpsertWithoutPaymentsInput, {nullable:true})
    @Type(() => OrderUpsertWithoutPaymentsInput)
    upsert?: OrderUpsertWithoutPaymentsInput;

    @Field(() => OrderWhereUniqueInput, {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    connect?: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById'>;

    @Field(() => OrderUpdateToOneWithWhereWithoutPaymentsInput, {nullable:true})
    @Type(() => OrderUpdateToOneWithWhereWithoutPaymentsInput)
    update?: OrderUpdateToOneWithWhereWithoutPaymentsInput;
}
