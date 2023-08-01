import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ProjectCategory } from '../prisma/project-category.enum';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ProjectMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => ProjectCategory, {nullable:true})
    projectCategory?: keyof typeof ProjectCategory;

    @Field(() => Date, {nullable:true})
    startDate?: Date | string;

    @Field(() => Date, {nullable:true})
    endDate?: Date | string;

    @Field(() => Float, {nullable:true})
    returnRate?: number;

    @Field(() => Int, {nullable:true})
    goalAmount?: number;

    @Field(() => Float, {nullable:true})
    currentAmount?: number;

    @Field(() => Int, {nullable:true})
    minimumInvestment?: number;

    @Field(() => Int, {nullable:true})
    maxInvestor?: number;

    @Field(() => Int, {nullable:true})
    accountId?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
