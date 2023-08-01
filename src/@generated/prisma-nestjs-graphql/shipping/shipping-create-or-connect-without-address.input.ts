import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ShippingWhereUniqueInput } from './shipping-where-unique.input';
import { Type } from 'class-transformer';
import { ShippingCreateWithoutAddressInput } from './shipping-create-without-address.input';

@InputType()
export class ShippingCreateOrConnectWithoutAddressInput {

    @Field(() => ShippingWhereUniqueInput, {nullable:false})
    @Type(() => ShippingWhereUniqueInput)
    where!: Prisma.AtLeast<ShippingWhereUniqueInput, 'id' | 'addressId' | 'orderId'>;

    @Field(() => ShippingCreateWithoutAddressInput, {nullable:false})
    @Type(() => ShippingCreateWithoutAddressInput)
    create!: ShippingCreateWithoutAddressInput;
}
