import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class OrderSumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    shippingId?: number;

    @Field(() => Float, {nullable:true})
    cost?: number;

    @Field(() => Float, {nullable:true})
    platformFee?: number;

    @Field(() => Float, {nullable:true})
    total?: number;
}
