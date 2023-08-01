import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderWhereInput } from './order-where.input';
import { Type } from 'class-transformer';
import { OrderUpdateWithoutPaymentsInput } from './order-update-without-payments.input';

@InputType()
export class OrderUpdateToOneWithWhereWithoutPaymentsInput {

    @Field(() => OrderWhereInput, {nullable:true})
    @Type(() => OrderWhereInput)
    where?: OrderWhereInput;

    @Field(() => OrderUpdateWithoutPaymentsInput, {nullable:false})
    @Type(() => OrderUpdateWithoutPaymentsInput)
    data!: OrderUpdateWithoutPaymentsInput;
}
