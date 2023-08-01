import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { Type } from 'class-transformer';
import { OrderCreateWithoutOrderByInput } from './order-create-without-order-by.input';

@InputType()
export class OrderCreateOrConnectWithoutOrderByInput {

    @Field(() => OrderWhereUniqueInput, {nullable:false})
    @Type(() => OrderWhereUniqueInput)
    where!: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById'>;

    @Field(() => OrderCreateWithoutOrderByInput, {nullable:false})
    @Type(() => OrderCreateWithoutOrderByInput)
    create!: OrderCreateWithoutOrderByInput;
}
