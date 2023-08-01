import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShippingCreateWithoutAddressInput } from './shipping-create-without-address.input';
import { Type } from 'class-transformer';
import { ShippingCreateOrConnectWithoutAddressInput } from './shipping-create-or-connect-without-address.input';
import { ShippingUpsertWithoutAddressInput } from './shipping-upsert-without-address.input';
import { ShippingWhereInput } from './shipping-where.input';
import { Prisma } from '@prisma/client';
import { ShippingWhereUniqueInput } from './shipping-where-unique.input';
import { ShippingUpdateToOneWithWhereWithoutAddressInput } from './shipping-update-to-one-with-where-without-address.input';

@InputType()
export class ShippingUncheckedUpdateOneWithoutAddressNestedInput {

    @Field(() => ShippingCreateWithoutAddressInput, {nullable:true})
    @Type(() => ShippingCreateWithoutAddressInput)
    create?: ShippingCreateWithoutAddressInput;

    @Field(() => ShippingCreateOrConnectWithoutAddressInput, {nullable:true})
    @Type(() => ShippingCreateOrConnectWithoutAddressInput)
    connectOrCreate?: ShippingCreateOrConnectWithoutAddressInput;

    @Field(() => ShippingUpsertWithoutAddressInput, {nullable:true})
    @Type(() => ShippingUpsertWithoutAddressInput)
    upsert?: ShippingUpsertWithoutAddressInput;

    @Field(() => ShippingWhereInput, {nullable:true})
    @Type(() => ShippingWhereInput)
    disconnect?: ShippingWhereInput;

    @Field(() => ShippingWhereInput, {nullable:true})
    @Type(() => ShippingWhereInput)
    delete?: ShippingWhereInput;

    @Field(() => ShippingWhereUniqueInput, {nullable:true})
    @Type(() => ShippingWhereUniqueInput)
    connect?: Prisma.AtLeast<ShippingWhereUniqueInput, 'id' | 'addressId' | 'orderId'>;

    @Field(() => ShippingUpdateToOneWithWhereWithoutAddressInput, {nullable:true})
    @Type(() => ShippingUpdateToOneWithWhereWithoutAddressInput)
    update?: ShippingUpdateToOneWithWhereWithoutAddressInput;
}
