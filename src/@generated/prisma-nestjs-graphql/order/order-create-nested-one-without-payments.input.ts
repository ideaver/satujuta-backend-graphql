import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateWithoutPaymentsInput } from './order-create-without-payments.input';
import { Type } from 'class-transformer';
import { OrderCreateOrConnectWithoutPaymentsInput } from './order-create-or-connect-without-payments.input';
import { Prisma } from '@prisma/client';
import { OrderWhereUniqueInput } from './order-where-unique.input';

@InputType()
export class OrderCreateNestedOneWithoutPaymentsInput {

    @Field(() => OrderCreateWithoutPaymentsInput, {nullable:true})
    @Type(() => OrderCreateWithoutPaymentsInput)
    create?: OrderCreateWithoutPaymentsInput;

    @Field(() => OrderCreateOrConnectWithoutPaymentsInput, {nullable:true})
    @Type(() => OrderCreateOrConnectWithoutPaymentsInput)
    connectOrCreate?: OrderCreateOrConnectWithoutPaymentsInput;

    @Field(() => OrderWhereUniqueInput, {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    connect?: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById'>;
}
