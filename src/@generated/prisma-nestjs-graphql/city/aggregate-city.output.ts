import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CityCountAggregate } from './city-count-aggregate.output';
import { CityAvgAggregate } from './city-avg-aggregate.output';
import { CitySumAggregate } from './city-sum-aggregate.output';
import { CityMinAggregate } from './city-min-aggregate.output';
import { CityMaxAggregate } from './city-max-aggregate.output';

@ObjectType()
export class AggregateCity {

    @Field(() => CityCountAggregate, {nullable:true})
    _count?: CityCountAggregate;

    @Field(() => CityAvgAggregate, {nullable:true})
    _avg?: CityAvgAggregate;

    @Field(() => CitySumAggregate, {nullable:true})
    _sum?: CitySumAggregate;

    @Field(() => CityMinAggregate, {nullable:true})
    _min?: CityMinAggregate;

    @Field(() => CityMaxAggregate, {nullable:true})
    _max?: CityMaxAggregate;
}
