import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ItemSumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    price?: number;

    @Field(() => Int, {nullable:true})
    qty?: number;

    @Field(() => Int, {nullable:true})
    orderId?: number;
}
