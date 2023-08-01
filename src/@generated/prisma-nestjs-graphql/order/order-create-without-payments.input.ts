import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionStatus } from '../prisma/transaction-status.enum';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { UserCreateNestedOneWithoutOrdersInput } from '../user/user-create-nested-one-without-orders.input';
import { ItemCreateNestedManyWithoutOrderInput } from '../item/item-create-nested-many-without-order.input';
import { ShippingCreateNestedOneWithoutOrderInput } from '../shipping/shipping-create-nested-one-without-order.input';

@InputType()
export class OrderCreateWithoutPaymentsInput {

    @Field(() => TransactionStatus, {nullable:false})
    status!: keyof typeof TransactionStatus;

    @Field(() => Int, {nullable:true})
    shippingId?: number;

    @Field(() => Boolean, {nullable:false})
    isFullPaid!: boolean;

    @Field(() => Float, {nullable:false})
    @Validator.IsNumber()
    @Validator.IsNotEmpty()
    cost!: number;

    @Field(() => Float, {nullable:false})
    @Validator.IsNumber()
    @Validator.IsNotEmpty()
    platformFee!: number;

    @Field(() => Float, {nullable:false})
    @Validator.IsNumber()
    @Validator.IsNotEmpty()
    total!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutOrdersInput, {nullable:false})
    orderBy!: UserCreateNestedOneWithoutOrdersInput;

    @Field(() => ItemCreateNestedManyWithoutOrderInput, {nullable:true})
    items?: ItemCreateNestedManyWithoutOrderInput;

    @Field(() => ShippingCreateNestedOneWithoutOrderInput, {nullable:true})
    shipping?: ShippingCreateNestedOneWithoutOrderInput;
}
