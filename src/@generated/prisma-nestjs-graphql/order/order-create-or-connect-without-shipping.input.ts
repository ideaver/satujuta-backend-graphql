import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { Type } from 'class-transformer';
import { OrderCreateWithoutShippingInput } from './order-create-without-shipping.input';

@InputType()
export class OrderCreateOrConnectWithoutShippingInput {

    @Field(() => OrderWhereUniqueInput, {nullable:false})
    @Type(() => OrderWhereUniqueInput)
    where!: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById'>;

    @Field(() => OrderCreateWithoutShippingInput, {nullable:false})
    @Type(() => OrderCreateWithoutShippingInput)
    create!: OrderCreateWithoutShippingInput;
}
