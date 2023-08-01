import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShippingUpdateWithoutOrderInput } from './shipping-update-without-order.input';
import { Type } from 'class-transformer';
import { ShippingCreateWithoutOrderInput } from './shipping-create-without-order.input';
import { ShippingWhereInput } from './shipping-where.input';

@InputType()
export class ShippingUpsertWithoutOrderInput {

    @Field(() => ShippingUpdateWithoutOrderInput, {nullable:false})
    @Type(() => ShippingUpdateWithoutOrderInput)
    update!: ShippingUpdateWithoutOrderInput;

    @Field(() => ShippingCreateWithoutOrderInput, {nullable:false})
    @Type(() => ShippingCreateWithoutOrderInput)
    create!: ShippingCreateWithoutOrderInput;

    @Field(() => ShippingWhereInput, {nullable:true})
    @Type(() => ShippingWhereInput)
    where?: ShippingWhereInput;
}
