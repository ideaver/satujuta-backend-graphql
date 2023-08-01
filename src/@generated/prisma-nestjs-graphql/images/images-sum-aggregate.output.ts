import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ImagesSumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    filesize?: number;

    @Field(() => Int, {nullable:true})
    hotelImageId?: number;

    @Field(() => Int, {nullable:true})
    programImageId?: number;

    @Field(() => Int, {nullable:true})
    rewardImageId?: number;

    @Field(() => Int, {nullable:true})
    projectImageId?: number;
}
