import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateWithoutShippingInput } from './order-create-without-shipping.input';
import { Type } from 'class-transformer';
import { OrderCreateOrConnectWithoutShippingInput } from './order-create-or-connect-without-shipping.input';
import { Prisma } from '@prisma/client';
import { OrderWhereUniqueInput } from './order-where-unique.input';

@InputType()
export class OrderCreateNestedOneWithoutShippingInput {

    @Field(() => OrderCreateWithoutShippingInput, {nullable:true})
    @Type(() => OrderCreateWithoutShippingInput)
    create?: OrderCreateWithoutShippingInput;

    @Field(() => OrderCreateOrConnectWithoutShippingInput, {nullable:true})
    @Type(() => OrderCreateOrConnectWithoutShippingInput)
    connectOrCreate?: OrderCreateOrConnectWithoutShippingInput;

    @Field(() => OrderWhereUniqueInput, {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    connect?: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById'>;
}
