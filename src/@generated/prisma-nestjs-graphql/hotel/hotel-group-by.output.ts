import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { HotelCountAggregate } from './hotel-count-aggregate.output';
import { HotelAvgAggregate } from './hotel-avg-aggregate.output';
import { HotelSumAggregate } from './hotel-sum-aggregate.output';
import { HotelMinAggregate } from './hotel-min-aggregate.output';
import { HotelMaxAggregate } from './hotel-max-aggregate.output';

@ObjectType()
export class HotelGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:false})
    addressId!: number;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Float, {nullable:false})
    rating!: number;

    @Field(() => Date, {nullable:false})
    startDate!: Date | string;

    @Field(() => Int, {nullable:false})
    quota!: number;

    @Field(() => String, {nullable:false})
    createdById!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => HotelCountAggregate, {nullable:true})
    _count?: HotelCountAggregate;

    @Field(() => HotelAvgAggregate, {nullable:true})
    _avg?: HotelAvgAggregate;

    @Field(() => HotelSumAggregate, {nullable:true})
    _sum?: HotelSumAggregate;

    @Field(() => HotelMinAggregate, {nullable:true})
    _min?: HotelMinAggregate;

    @Field(() => HotelMaxAggregate, {nullable:true})
    _max?: HotelMaxAggregate;
}
