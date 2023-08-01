import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { Type } from 'class-transformer';
import { OrderUpdateWithoutOrderByInput } from './order-update-without-order-by.input';

@InputType()
export class OrderUpdateWithWhereUniqueWithoutOrderByInput {

    @Field(() => OrderWhereUniqueInput, {nullable:false})
    @Type(() => OrderWhereUniqueInput)
    where!: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById'>;

    @Field(() => OrderUpdateWithoutOrderByInput, {nullable:false})
    @Type(() => OrderUpdateWithoutOrderByInput)
    data!: OrderUpdateWithoutOrderByInput;
}
