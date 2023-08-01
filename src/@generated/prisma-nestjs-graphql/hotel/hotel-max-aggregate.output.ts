import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class HotelMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Int, {nullable:true})
    addressId?: number;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Float, {nullable:true})
    rating?: number;

    @Field(() => Date, {nullable:true})
    startDate?: Date | string;

    @Field(() => Int, {nullable:true})
    quota?: number;

    @Field(() => String, {nullable:true})
    createdById?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
