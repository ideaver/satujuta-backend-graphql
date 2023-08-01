import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { FaqCountAggregate } from './faq-count-aggregate.output';
import { FaqAvgAggregate } from './faq-avg-aggregate.output';
import { FaqSumAggregate } from './faq-sum-aggregate.output';
import { FaqMinAggregate } from './faq-min-aggregate.output';
import { FaqMaxAggregate } from './faq-max-aggregate.output';

@ObjectType()
export class FaqGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

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
