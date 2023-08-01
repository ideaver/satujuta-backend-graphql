import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DistrictCountAggregate } from './district-count-aggregate.output';
import { DistrictAvgAggregate } from './district-avg-aggregate.output';
import { DistrictSumAggregate } from './district-sum-aggregate.output';
import { DistrictMinAggregate } from './district-min-aggregate.output';
import { DistrictMaxAggregate } from './district-max-aggregate.output';

@ObjectType()
export class DistrictGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => DistrictCountAggregate, {nullable:true})
    _count?: DistrictCountAggregate;

    @Field(() => DistrictAvgAggregate, {nullable:true})
    _avg?: DistrictAvgAggregate;

    @Field(() => DistrictSumAggregate, {nullable:true})
    _sum?: DistrictSumAggregate;

    @Field(() => DistrictMinAggregate, {nullable:true})
    _min?: DistrictMinAggregate;

    @Field(() => DistrictMaxAggregate, {nullable:true})
    _max?: DistrictMaxAggregate;
}
