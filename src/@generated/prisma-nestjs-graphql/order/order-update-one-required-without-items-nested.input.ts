import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateWithoutItemsInput } from './order-create-without-items.input';
import { Type } from 'class-transformer';
import { OrderCreateOrConnectWithoutItemsInput } from './order-create-or-connect-without-items.input';
import { OrderUpsertWithoutItemsInput } from './order-upsert-without-items.input';
import { Prisma } from '@prisma/client';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { OrderUpdateToOneWithWhereWithoutItemsInput } from './order-update-to-one-with-where-without-items.input';

@InputType()
export class OrderUpdateOneRequiredWithoutItemsNestedInput {

    @Field(() => OrderCreateWithoutItemsInput, {nullable:true})
    @Type(() => OrderCreateWithoutItemsInput)
    create?: OrderCreateWithoutItemsInput;

    @Field(() => OrderCreateOrConnectWithoutItemsInput, {nullable:true})
    @Type(() => OrderCreateOrConnectWithoutItemsInput)
    connectOrCreate?: OrderCreateOrConnectWithoutItemsInput;

    @Field(() => OrderUpsertWithoutItemsInput, {nullable:true})
    @Type(() => OrderUpsertWithoutItemsInput)
    upsert?: OrderUpsertWithoutItemsInput;

    @Field(() => OrderWhereUniqueInput, {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    connect?: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById'>;

    @Field(() => OrderUpdateToOneWithWhereWithoutItemsInput, {nullable:true})
    @Type(() => OrderUpdateToOneWithWhereWithoutItemsInput)
    update?: OrderUpdateToOneWithWhereWithoutItemsInput;
}
