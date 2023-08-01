import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShippingCreateWithoutOrderInput } from './shipping-create-without-order.input';
import { Type } from 'class-transformer';
import { ShippingCreateOrConnectWithoutOrderInput } from './shipping-create-or-connect-without-order.input';
import { Prisma } from '@prisma/client';
import { ShippingWhereUniqueInput } from './shipping-where-unique.input';

@InputType()
export class ShippingCreateNestedOneWithoutOrderInput {

    @Field(() => ShippingCreateWithoutOrderInput, {nullable:true})
    @Type(() => ShippingCreateWithoutOrderInput)
    create?: ShippingCreateWithoutOrderInput;

    @Field(() => ShippingCreateOrConnectWithoutOrderInput, {nullable:true})
    @Type(() => ShippingCreateOrConnectWithoutOrderInput)
    connectOrCreate?: ShippingCreateOrConnectWithoutOrderInput;

    @Field(() => ShippingWhereUniqueInput, {nullable:true})
    @Type(() => ShippingWhereUniqueInput)
    connect?: Prisma.AtLeast<ShippingWhereUniqueInput, 'id' | 'addressId' | 'orderId'>;
}
