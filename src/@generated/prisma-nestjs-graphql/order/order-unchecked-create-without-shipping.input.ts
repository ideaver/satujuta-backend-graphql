import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TransactionStatus } from '../prisma/transaction-status.enum';
import { Float } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { ItemUncheckedCreateNestedManyWithoutOrderInput } from '../item/item-unchecked-create-nested-many-without-order.input';
import { PaymentUncheckedCreateNestedManyWithoutOrderInput } from '../payment/payment-unchecked-create-nested-many-without-order.input';

@InputType()
export class OrderUncheckedCreateWithoutShippingInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => TransactionStatus, {nullable:false})
    status!: keyof typeof TransactionStatus;

    @Field(() => String, {nullable:false})
    orderById!: string;

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

    @Field(() => ItemUncheckedCreateNestedManyWithoutOrderInput, {nullable:true})
    items?: ItemUncheckedCreateNestedManyWithoutOrderInput;

    @Field(() => PaymentUncheckedCreateNestedManyWithoutOrderInput, {nullable:true})
    payments?: PaymentUncheckedCreateNestedManyWithoutOrderInput;
}
