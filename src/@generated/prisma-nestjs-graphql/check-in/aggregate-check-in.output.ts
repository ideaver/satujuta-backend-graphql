import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CheckInCountAggregate } from './check-in-count-aggregate.output';
import { CheckInAvgAggregate } from './check-in-avg-aggregate.output';
import { CheckInSumAggregate } from './check-in-sum-aggregate.output';
import { CheckInMinAggregate } from './check-in-min-aggregate.output';
import { CheckInMaxAggregate } from './check-in-max-aggregate.output';

@ObjectType()
export class AggregateCheckIn {

    @Field(() => CheckInCountAggregate, {nullable:true})
    _count?: CheckInCountAggregate;

    @Field(() => CheckInAvgAggregate, {nullable:true})
    _avg?: CheckInAvgAggregate;

    @Field(() => CheckInSumAggregate, {nullable:true})
    _sum?: CheckInSumAggregate;

    @Field(() => CheckInMinAggregate, {nullable:true})
    _min?: CheckInMinAggregate;

    @Field(() => CheckInMaxAggregate, {nullable:true})
    _max?: CheckInMaxAggregate;
}
