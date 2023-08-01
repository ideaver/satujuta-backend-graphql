import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class HotelAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    addressId?: number;

    @Field(() => Float, {nullable:true})
    rating?: number;

    @Field(() => Float, {nullable:true})
    quota?: number;
}
