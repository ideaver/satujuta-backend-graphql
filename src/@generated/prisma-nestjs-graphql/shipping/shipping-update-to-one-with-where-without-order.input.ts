import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShippingWhereInput } from './shipping-where.input';
import { Type } from 'class-transformer';
import { ShippingUpdateWithoutOrderInput } from './shipping-update-without-order.input';

@InputType()
export class ShippingUpdateToOneWithWhereWithoutOrderInput {

    @Field(() => ShippingWhereInput, {nullable:true})
    @Type(() => ShippingWhereInput)
    where?: ShippingWhereInput;

    @Field(() => ShippingUpdateWithoutOrderInput, {nullable:false})
    @Type(() => ShippingUpdateWithoutOrderInput)
    data!: ShippingUpdateWithoutOrderInput;
}
