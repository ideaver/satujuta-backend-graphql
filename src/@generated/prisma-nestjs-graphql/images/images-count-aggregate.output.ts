import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ImagesCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    fileType!: number;

    @Field(() => Int, {nullable:false})
    filesize!: number;

    @Field(() => Int, {nullable:false})
    url!: number;

    @Field(() => Int, {nullable:false})
    hotelImageId!: number;

    @Field(() => Int, {nullable:false})
    programImageId!: number;

    @Field(() => Int, {nullable:false})
    rewardImageId!: number;

    @Field(() => Int, {nullable:false})
    projectImageId!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
