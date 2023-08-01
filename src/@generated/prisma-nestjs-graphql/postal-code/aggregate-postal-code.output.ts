import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PostalCodeCountAggregate } from './postal-code-count-aggregate.output';
import { PostalCodeAvgAggregate } from './postal-code-avg-aggregate.output';
import { PostalCodeSumAggregate } from './postal-code-sum-aggregate.output';
import { PostalCodeMinAggregate } from './postal-code-min-aggregate.output';
import { PostalCodeMaxAggregate } from './postal-code-max-aggregate.output';

@ObjectType()
export class AggregatePostalCode {

    @Field(() => PostalCodeCountAggregate, {nullable:true})
    _count?: PostalCodeCountAggregate;

    @Field(() => PostalCodeAvgAggregate, {nullable:true})
    _avg?: PostalCodeAvgAggregate;

    @Field(() => PostalCodeSumAggregate, {nullable:true})
    _sum?: PostalCodeSumAggregate;

    @Field(() => PostalCodeMinAggregate, {nullable:true})
    _min?: PostalCodeMinAggregate;

    @Field(() => PostalCodeMaxAggregate, {nullable:true})
    _max?: PostalCodeMaxAggregate;
}
