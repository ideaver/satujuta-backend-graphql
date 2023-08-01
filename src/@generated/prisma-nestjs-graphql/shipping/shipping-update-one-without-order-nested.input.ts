import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShippingCreateWithoutOrderInput } from './shipping-create-without-order.input';
import { Type } from 'class-transformer';
import { ShippingCreateOrConnectWithoutOrderInput } from './shipping-create-or-connect-without-order.input';
import { ShippingUpsertWithoutOrderInput } from './shipping-upsert-without-order.input';
import { ShippingWhereInput } from './shipping-where.input';
import { Prisma } from '@prisma/client';
import { ShippingWhereUniqueInput } from './shipping-where-unique.input';
import { ShippingUpdateToOneWithWhereWithoutOrderInput } from './shipping-update-to-one-with-where-without-order.input';

@InputType()
export class ShippingUpdateOneWithoutOrderNestedInput {

    @Field(() => ShippingCreateWithoutOrderInput, {nullable:true})
    @Type(() => ShippingCreateWithoutOrderInput)
    create?: ShippingCreateWithoutOrderInput;

    @Field(() => ShippingCreateOrConnectWithoutOrderInput, {nullable:true})
    @Type(() => ShippingCreateOrConnectWithoutOrderInput)
    connectOrCreate?: ShippingCreateOrConnectWithoutOrderInput;

    @Field(() => ShippingUpsertWithoutOrderInput, {nullable:true})
    @Type(() => ShippingUpsertWithoutOrderInput)
    upsert?: ShippingUpsertWithoutOrderInput;

    @Field(() => ShippingWhereInput, {nullable:true})
    @Type(() => ShippingWhereInput)
    disconnect?: ShippingWhereInput;

    @Field(() => ShippingWhereInput, {nullable:true})
    @Type(() => ShippingWhereInput)
    delete?: ShippingWhereInput;

    @Field(() => ShippingWhereUniqueInput, {nullable:true})
    @Type(() => ShippingWhereUniqueInput)
    connect?: Prisma.AtLeast<ShippingWhereUniqueInput, 'id' | 'addressId' | 'orderId'>;

    @Field(() => ShippingUpdateToOneWithWhereWithoutOrderInput, {nullable:true})
    @Type(() => ShippingUpdateToOneWithWhereWithoutOrderInput)
    update?: ShippingUpdateToOneWithWhereWithoutOrderInput;
}
