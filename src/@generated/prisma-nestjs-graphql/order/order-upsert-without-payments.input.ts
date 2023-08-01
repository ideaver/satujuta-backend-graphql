import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderUpdateWithoutPaymentsInput } from './order-update-without-payments.input';
import { Type } from 'class-transformer';
import { OrderCreateWithoutPaymentsInput } from './order-create-without-payments.input';
import { OrderWhereInput } from './order-where.input';

@InputType()
export class OrderUpsertWithoutPaymentsInput {

    @Field(() => OrderUpdateWithoutPaymentsInput, {nullable:false})
    @Type(() => OrderUpdateWithoutPaymentsInput)
    update!: OrderUpdateWithoutPaymentsInput;

    @Field(() => OrderCreateWithoutPaymentsInput, {nullable:false})
    @Type(() => OrderCreateWithoutPaymentsInput)
    create!: OrderCreateWithoutPaymentsInput;

    @Field(() => OrderWhereInput, {nullable:true})
    @Type(() => OrderWhereInput)
    where?: OrderWhereInput;
}
