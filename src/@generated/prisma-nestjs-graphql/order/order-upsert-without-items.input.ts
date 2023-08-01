import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderUpdateWithoutItemsInput } from './order-update-without-items.input';
import { Type } from 'class-transformer';
import { OrderCreateWithoutItemsInput } from './order-create-without-items.input';
import { OrderWhereInput } from './order-where.input';

@InputType()
export class OrderUpsertWithoutItemsInput {

    @Field(() => OrderUpdateWithoutItemsInput, {nullable:false})
    @Type(() => OrderUpdateWithoutItemsInput)
    update!: OrderUpdateWithoutItemsInput;

    @Field(() => OrderCreateWithoutItemsInput, {nullable:false})
    @Type(() => OrderCreateWithoutItemsInput)
    create!: OrderCreateWithoutItemsInput;

    @Field(() => OrderWhereInput, {nullable:true})
    @Type(() => OrderWhereInput)
    where?: OrderWhereInput;
}
