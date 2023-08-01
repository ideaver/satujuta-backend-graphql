import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { ProjectCategory } from '../prisma/project-category.enum';
import { Float } from '@nestjs/graphql';

@InputType()
export class ProjectCreateManyInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    @Validator.MinLength(2)
    @Validator.MaxLength(20)
    @Validator.IsNotEmpty()
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => ProjectCategory, {nullable:false})
    @Validator.MinLength(10)
    @Validator.IsNotEmpty()
    projectCategory!: keyof typeof ProjectCategory;

    @Field(() => Date, {nullable:false})
    startDate!: Date | string;

    @Field(() => Date, {nullable:false})
    endDate!: Date | string;

    @Field(() => Float, {nullable:false})
    @Validator.IsNumber()
    @Validator.IsNotEmpty()
    returnRate!: number;

    @Field(() => Int, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsNumber()
    goalAmount!: number;

    @Field(() => Float, {nullable:false})
    @Validator.IsNumber()
    @Validator.IsNotEmpty()
    currentAmount!: number;

    @Field(() => Int, {nullable:false})
    @Validator.IsNumber()
    @Validator.IsNotEmpty()
    minimumInvestment!: number;

    @Field(() => Int, {nullable:false})
    @Validator.IsNumber()
    @Validator.IsNotEmpty()
    maxInvestor!: number;

    @Field(() => Int, {nullable:false})
    accountId!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
