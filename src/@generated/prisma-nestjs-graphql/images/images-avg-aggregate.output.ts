import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ImagesAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    filesize?: number;

    @Field(() => Float, {nullable:true})
    hotelImageId?: number;

    @Field(() => Float, {nullable:true})
    programImageId?: number;

    @Field(() => Float, {nullable:true})
    rewardImageId?: number;

    @Field(() => Float, {nullable:true})
    projectImageId?: number;
}
