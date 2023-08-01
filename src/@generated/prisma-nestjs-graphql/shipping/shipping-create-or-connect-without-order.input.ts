import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ShippingWhereUniqueInput } from './shipping-where-unique.input';
import { Type } from 'class-transformer';
import { ShippingCreateWithoutOrderInput } from './shipping-create-without-order.input';

@InputType()
export class ShippingCreateOrConnectWithoutOrderInput {

    @Field(() => ShippingWhereUniqueInput, {nullable:false})
    @Type(() => ShippingWhereUniqueInput)
    where!: Prisma.AtLeast<ShippingWhereUniqueInput, 'id' | 'addressId' | 'orderId'>;

    @Field(() => ShippingCreateWithoutOrderInput, {nullable:false})
    @Type(() => ShippingCreateWithoutOrderInput)
    create!: ShippingCreateWithoutOrderInput;
}
