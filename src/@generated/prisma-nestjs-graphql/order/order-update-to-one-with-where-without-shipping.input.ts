import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderWhereInput } from './order-where.input';
import { Type } from 'class-transformer';
import { OrderUpdateWithoutShippingInput } from './order-update-without-shipping.input';

@InputType()
export class OrderUpdateToOneWithWhereWithoutShippingInput {

    @Field(() => OrderWhereInput, {nullable:true})
    @Type(() => OrderWhereInput)
    where?: OrderWhereInput;

    @Field(() => OrderUpdateWithoutShippingInput, {nullable:false})
    @Type(() => OrderUpdateWithoutShippingInput)
    data!: OrderUpdateWithoutShippingInput;
}
