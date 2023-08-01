import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class PaymentAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    adminFee?: number;

    @Field(() => Float, {nullable:true})
    totalPayment?: number;

    @Field(() => Float, {nullable:true})
    orderId?: number;

    @Field(() => Float, {nullable:true})
    transactionId?: number;
}
