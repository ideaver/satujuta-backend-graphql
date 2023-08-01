import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { FileType } from '../prisma/file-type.enum';
import { Float } from '@nestjs/graphql';
import { ImagesCountAggregate } from './images-count-aggregate.output';
import { ImagesAvgAggregate } from './images-avg-aggregate.output';
import { ImagesSumAggregate } from './images-sum-aggregate.output';
import { ImagesMinAggregate } from './images-min-aggregate.output';
import { ImagesMaxAggregate } from './images-max-aggregate.output';

@ObjectType()
export class ImagesGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => FileType, {nullable:false})
    fileType!: keyof typeof FileType;

    @Field(() => Float, {nullable:false})
    filesize!: number;

    @Field(() => String, {nullable:false})
    url!: string;

    @Field(() => Int, {nullable:true})
    hotelImageId?: number;

    @Field(() => Int, {nullable:true})
    programImageId?: number;

    @Field(() => Int, {nullable:true})
    rewardImageId?: number;

    @Field(() => Int, {nullable:true})
    projectImageId?: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => ImagesCountAggregate, {nullable:true})
    _count?: ImagesCountAggregate;

    @Field(() => ImagesAvgAggregate, {nullable:true})
    _avg?: ImagesAvgAggregate;

    @Field(() => ImagesSumAggregate, {nullable:true})
    _sum?: ImagesSumAggregate;

    @Field(() => ImagesMinAggregate, {nullable:true})
    _min?: ImagesMinAggregate;

    @Field(() => ImagesMaxAggregate, {nullable:true})
    _max?: ImagesMaxAggregate;
}
