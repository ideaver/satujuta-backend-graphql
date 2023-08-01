import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { HotelCountAggregate } from './hotel-count-aggregate.output';
import { HotelAvgAggregate } from './hotel-avg-aggregate.output';
import { HotelSumAggregate } from './hotel-sum-aggregate.output';
import { HotelMinAggregate } from './hotel-min-aggregate.output';
import { HotelMaxAggregate } from './hotel-max-aggregate.output';

@ObjectType()
export class AggregateHotel {

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
