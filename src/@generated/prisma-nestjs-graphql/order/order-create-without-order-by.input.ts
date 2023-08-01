import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionStatus } from '../prisma/transaction-status.enum';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { ItemCreateNestedManyWithoutOrderInput } from '../item/item-create-nested-many-without-order.input';
import { ShippingCreateNestedOneWithoutOrderInput } from '../shipping/shipping-create-nested-one-without-order.input';
import { PaymentCreateNestedManyWithoutOrderInput } from '../payment/payment-create-nested-many-without-order.input';

@InputType()
export class OrderCreateWithoutOrderByInput {

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

    @Field(() => ItemCreateNestedManyWithoutOrderInput, {nullable:true})
    items?: ItemCreateNestedManyWithoutOrderInput;

    @Field(() => ShippingCreateNestedOneWithoutOrderInput, {nullable:true})
    shipping?: ShippingCreateNestedOneWithoutOrderInput;

    @Field(() => PaymentCreateNestedManyWithoutOrderInput, {nullable:true})
    payments?: PaymentCreateNestedManyWithoutOrderInput;
}
