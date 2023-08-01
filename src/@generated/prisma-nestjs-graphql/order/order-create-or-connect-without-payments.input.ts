import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { Type } from 'class-transformer';
import { OrderCreateWithoutPaymentsInput } from './order-create-without-payments.input';

@InputType()
export class OrderCreateOrConnectWithoutPaymentsInput {

    @Field(() => OrderWhereUniqueInput, {nullable:false})
    @Type(() => OrderWhereUniqueInput)
    where!: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById'>;

    @Field(() => OrderCreateWithoutPaymentsInput, {nullable:false})
    @Type(() => OrderCreateWithoutPaymentsInput)
    create!: OrderCreateWithoutPaymentsInput;
}
