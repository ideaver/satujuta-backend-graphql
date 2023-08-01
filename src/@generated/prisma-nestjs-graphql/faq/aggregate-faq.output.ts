import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { FaqCountAggregate } from './faq-count-aggregate.output';
import { FaqAvgAggregate } from './faq-avg-aggregate.output';
import { FaqSumAggregate } from './faq-sum-aggregate.output';
import { FaqMinAggregate } from './faq-min-aggregate.output';
import { FaqMaxAggregate } from './faq-max-aggregate.output';

@ObjectType()
export class AggregateFaq {

    @Field(() => FaqCountAggregate, {nullable:true})
    _count?: FaqCountAggregate;

    @Field(() => FaqAvgAggregate, {nullable:true})
    _avg?: FaqAvgAggregate;

    @Field(() => FaqSumAggregate, {nullable:true})
    _sum?: FaqSumAggregate;

    @Field(() => FaqMinAggregate, {nullable:true})
    _min?: FaqMinAggregate;

    @Field(() => FaqMaxAggregate, {nullable:true})
    _max?: FaqMaxAggregate;
}
