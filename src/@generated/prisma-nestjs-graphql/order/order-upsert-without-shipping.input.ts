import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderUpdateWithoutShippingInput } from './order-update-without-shipping.input';
import { Type } from 'class-transformer';
import { OrderCreateWithoutShippingInput } from './order-create-without-shipping.input';
import { OrderWhereInput } from './order-where.input';

@InputType()
export class OrderUpsertWithoutShippingInput {

    @Field(() => OrderUpdateWithoutShippingInput, {nullable:false})
    @Type(() => OrderUpdateWithoutShippingInput)
    update!: OrderUpdateWithoutShippingInput;

    @Field(() => OrderCreateWithoutShippingInput, {nullable:false})
    @Type(() => OrderCreateWithoutShippingInput)
    create!: OrderCreateWithoutShippingInput;

    @Field(() => OrderWhereInput, {nullable:true})
    @Type(() => OrderWhereInput)
    where?: OrderWhereInput;
}
