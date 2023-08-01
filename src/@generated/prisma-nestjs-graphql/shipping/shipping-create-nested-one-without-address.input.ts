import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShippingCreateWithoutAddressInput } from './shipping-create-without-address.input';
import { Type } from 'class-transformer';
import { ShippingCreateOrConnectWithoutAddressInput } from './shipping-create-or-connect-without-address.input';
import { Prisma } from '@prisma/client';
import { ShippingWhereUniqueInput } from './shipping-where-unique.input';

@InputType()
export class ShippingCreateNestedOneWithoutAddressInput {

    @Field(() => ShippingCreateWithoutAddressInput, {nullable:true})
    @Type(() => ShippingCreateWithoutAddressInput)
    create?: ShippingCreateWithoutAddressInput;

    @Field(() => ShippingCreateOrConnectWithoutAddressInput, {nullable:true})
    @Type(() => ShippingCreateOrConnectWithoutAddressInput)
    connectOrCreate?: ShippingCreateOrConnectWithoutAddressInput;

    @Field(() => ShippingWhereUniqueInput, {nullable:true})
    @Type(() => ShippingWhereUniqueInput)
    connect?: Prisma.AtLeast<ShippingWhereUniqueInput, 'id' | 'addressId' | 'orderId'>;
}
