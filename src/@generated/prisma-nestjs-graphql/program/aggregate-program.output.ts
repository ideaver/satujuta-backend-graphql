import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ProgramCountAggregate } from './program-count-aggregate.output';
import { ProgramAvgAggregate } from './program-avg-aggregate.output';
import { ProgramSumAggregate } from './program-sum-aggregate.output';
import { ProgramMinAggregate } from './program-min-aggregate.output';
import { ProgramMaxAggregate } from './program-max-aggregate.output';

@ObjectType()
export class AggregateProgram {

    @Field(() => ProgramCountAggregate, {nullable:true})
    _count?: ProgramCountAggregate;

    @Field(() => ProgramAvgAggregate, {nullable:true})
    _avg?: ProgramAvgAggregate;

    @Field(() => ProgramSumAggregate, {nullable:true})
    _sum?: ProgramSumAggregate;

    @Field(() => ProgramMinAggregate, {nullable:true})
    _min?: ProgramMinAggregate;

    @Field(() => ProgramMaxAggregate, {nullable:true})
    _max?: ProgramMaxAggregate;
}
