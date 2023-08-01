import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class HotelSumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    addressId?: number;

    @Field(() => Float, {nullable:true})
    rating?: number;

    @Field(() => Int, {nullable:true})
    quota?: number;
}
