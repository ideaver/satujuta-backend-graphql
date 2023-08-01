import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ProgramCategoryCountAggregate } from './program-category-count-aggregate.output';
import { ProgramCategoryAvgAggregate } from './program-category-avg-aggregate.output';
import { ProgramCategorySumAggregate } from './program-category-sum-aggregate.output';
import { ProgramCategoryMinAggregate } from './program-category-min-aggregate.output';
import { ProgramCategoryMaxAggregate } from './program-category-max-aggregate.output';

@ObjectType()
export class ProgramCategoryGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => ProgramCategoryCountAggregate, {nullable:true})
    _count?: ProgramCategoryCountAggregate;

    @Field(() => ProgramCategoryAvgAggregate, {nullable:true})
    _avg?: ProgramCategoryAvgAggregate;

    @Field(() => ProgramCategorySumAggregate, {nullable:true})
    _sum?: ProgramCategorySumAggregate;

    @Field(() => ProgramCategoryMinAggregate, {nullable:true})
    _min?: ProgramCategoryMinAggregate;

    @Field(() => ProgramCategoryMaxAggregate, {nullable:true})
    _max?: ProgramCategoryMaxAggregate;
}
