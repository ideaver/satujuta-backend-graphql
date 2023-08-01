import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class PaymentMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    adminFee?: number;

    @Field(() => Float, {nullable:true})
    totalPayment?: number;

    @Field(() => Int, {nullable:true})
    orderId?: number;

    @Field(() => Int, {nullable:true})
    transactionId?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
