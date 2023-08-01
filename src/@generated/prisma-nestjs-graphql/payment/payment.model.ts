import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Order } from '../order/order.model';
import { Transaction } from '../transaction/transaction.model';
import { PaymentConfirmation } from '../payment-confirmation/payment-confirmation.model';

@ObjectType()
export class Payment {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Float, {nullable:false})
    adminFee!: number;

    @Field(() => Float, {nullable:false})
    totalPayment!: number;

    @Field(() => Int, {nullable:false})
    orderId!: number;

    @Field(() => Int, {nullable:false})
    transactionId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Order, {nullable:false})
    order?: Order;

    @Field(() => Transaction, {nullable:false})
    transaction?: Transaction;

    @Field(() => PaymentConfirmation, {nullable:true})
    confirmation?: PaymentConfirmation | null;
}
