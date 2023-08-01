import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ProjectCategory } from '../prisma/project-category.enum';
import { Float } from '@nestjs/graphql';
import { ProjectCountAggregate } from './project-count-aggregate.output';
import { ProjectAvgAggregate } from './project-avg-aggregate.output';
import { ProjectSumAggregate } from './project-sum-aggregate.output';
import { ProjectMinAggregate } from './project-min-aggregate.output';
import { ProjectMaxAggregate } from './project-max-aggregate.output';

@ObjectType()
export class ProjectGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => ProjectCategory, {nullable:false})
    projectCategory!: keyof typeof ProjectCategory;

    @Field(() => Date, {nullable:false})
    startDate!: Date | string;

    @Field(() => Date, {nullable:false})
    endDate!: Date | string;

    @Field(() => Float, {nullable:false})
    returnRate!: number;

    @Field(() => Int, {nullable:false})
    goalAmount!: number;

    @Field(() => Float, {nullable:false})
    currentAmount!: number;

    @Field(() => Int, {nullable:false})
    minimumInvestment!: number;

    @Field(() => Int, {nullable:false})
    maxInvestor!: number;

    @Field(() => Int, {nullable:false})
    accountId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => ProjectCountAggregate, {nullable:true})
    _count?: ProjectCountAggregate;

    @Field(() => ProjectAvgAggregate, {nullable:true})
    _avg?: ProjectAvgAggregate;

    @Field(() => ProjectSumAggregate, {nullable:true})
    _sum?: ProjectSumAggregate;

    @Field(() => ProjectMinAggregate, {nullable:true})
    _min?: ProjectMinAggregate;

    @Field(() => ProjectMaxAggregate, {nullable:true})
    _max?: ProjectMaxAggregate;
}
