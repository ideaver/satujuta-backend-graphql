import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SchoolCountAggregate } from './school-count-aggregate.output';
import { SchoolAvgAggregate } from './school-avg-aggregate.output';
import { SchoolSumAggregate } from './school-sum-aggregate.output';
import { SchoolMinAggregate } from './school-min-aggregate.output';
import { SchoolMaxAggregate } from './school-max-aggregate.output';

@ObjectType()
export class AggregateSchool {

    @Field(() => SchoolCountAggregate, {nullable:true})
    _count?: SchoolCountAggregate;

    @Field(() => SchoolAvgAggregate, {nullable:true})
    _avg?: SchoolAvgAggregate;

    @Field(() => SchoolSumAggregate, {nullable:true})
    _sum?: SchoolSumAggregate;

    @Field(() => SchoolMinAggregate, {nullable:true})
    _min?: SchoolMinAggregate;

    @Field(() => SchoolMaxAggregate, {nullable:true})
    _max?: SchoolMaxAggregate;
}
