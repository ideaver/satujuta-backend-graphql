import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TransactionStatus } from '../prisma/transaction-status.enum';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class OrderMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => TransactionStatus, {nullable:true})
    status?: keyof typeof TransactionStatus;

    @Field(() => String, {nullable:true})
    orderById?: string;

    @Field(() => Int, {nullable:true})
    shippingId?: number;

    @Field(() => Boolean, {nullable:true})
    isFullPaid?: boolean;

    @Field(() => Float, {nullable:true})
    cost?: number;

    @Field(() => Float, {nullable:true})
    platformFee?: number;

    @Field(() => Float, {nullable:true})
    total?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
