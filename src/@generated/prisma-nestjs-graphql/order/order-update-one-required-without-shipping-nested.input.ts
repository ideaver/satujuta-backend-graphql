import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateWithoutShippingInput } from './order-create-without-shipping.input';
import { Type } from 'class-transformer';
import { OrderCreateOrConnectWithoutShippingInput } from './order-create-or-connect-without-shipping.input';
import { OrderUpsertWithoutShippingInput } from './order-upsert-without-shipping.input';
import { Prisma } from '@prisma/client';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { OrderUpdateToOneWithWhereWithoutShippingInput } from './order-update-to-one-with-where-without-shipping.input';

@InputType()
export class OrderUpdateOneRequiredWithoutShippingNestedInput {

    @Field(() => OrderCreateWithoutShippingInput, {nullable:true})
    @Type(() => OrderCreateWithoutShippingInput)
    create?: OrderCreateWithoutShippingInput;

    @Field(() => OrderCreateOrConnectWithoutShippingInput, {nullable:true})
    @Type(() => OrderCreateOrConnectWithoutShippingInput)
    connectOrCreate?: OrderCreateOrConnectWithoutShippingInput;

    @Field(() => OrderUpsertWithoutShippingInput, {nullable:true})
    @Type(() => OrderUpsertWithoutShippingInput)
    upsert?: OrderUpsertWithoutShippingInput;

    @Field(() => OrderWhereUniqueInput, {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    connect?: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById'>;

    @Field(() => OrderUpdateToOneWithWhereWithoutShippingInput, {nullable:true})
    @Type(() => OrderUpdateToOneWithWhereWithoutShippingInput)
    update?: OrderUpdateToOneWithWhereWithoutShippingInput;
}
