import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { TransactionStatus } from '../prisma/transaction-status.enum';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Item } from '../item/item.model';
import { Shipping } from '../shipping/shipping.model';
import { Payment } from '../payment/payment.model';
import { OrderCount } from './order-count.output';

@ObjectType()
export class Order {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => TransactionStatus, {nullable:false})
    status!: keyof typeof TransactionStatus;

    @Field(() => String, {nullable:false})
    orderById!: string;

    @Field(() => Int, {nullable:true})
    shippingId!: number | null;

    @Field(() => Boolean, {nullable:false})
    isFullPaid!: boolean;

    @Field(() => Float, {nullable:false})
    cost!: number;

    @Field(() => Float, {nullable:false})
    platformFee!: number;

    @Field(() => Float, {nullable:false})
    total!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => User, {nullable:false})
    orderBy?: User;

    @Field(() => [Item], {nullable:true})
    items?: Array<Item>;

    @Field(() => Shipping, {nullable:true})
    shipping?: Shipping | null;

    @Field(() => [Payment], {nullable:true})
    payments?: Array<Payment>;

    @Field(() => OrderCount, {nullable:false})
    _count?: OrderCount;
}
