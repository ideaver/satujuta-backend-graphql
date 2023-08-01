import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { Type } from 'class-transformer';
import { OrderUpdateWithoutOrderByInput } from './order-update-without-order-by.input';
import { OrderCreateWithoutOrderByInput } from './order-create-without-order-by.input';

@InputType()
export class OrderUpsertWithWhereUniqueWithoutOrderByInput {

    @Field(() => OrderWhereUniqueInput, {nullable:false})
    @Type(() => OrderWhereUniqueInput)
    where!: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById'>;

    @Field(() => OrderUpdateWithoutOrderByInput, {nullable:false})
    @Type(() => OrderUpdateWithoutOrderByInput)
    update!: OrderUpdateWithoutOrderByInput;

    @Field(() => OrderCreateWithoutOrderByInput, {nullable:false})
    @Type(() => OrderCreateWithoutOrderByInput)
    create!: OrderCreateWithoutOrderByInput;
}
