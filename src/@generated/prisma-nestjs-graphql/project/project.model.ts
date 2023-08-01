import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ProjectCategory } from '../prisma/project-category.enum';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Images } from '../images/images.model';
import { User } from '../user/user.model';
import { Account } from '../account/account.model';
import { ProjectCount } from './project-count.output';

@ObjectType()
export class Project {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => ProjectCategory, {nullable:false})
    projectCategory!: keyof typeof ProjectCategory;

    @Field(() => Date, {nullable:false})
    startDate!: Date;

    @Field(() => Date, {nullable:false})
    endDate!: Date;

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
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [Images], {nullable:true})
    images?: Array<Images>;

    @Field(() => [User], {nullable:true})
    investors?: Array<User>;

    @Field(() => Account, {nullable:false})
    account?: Account;

    @Field(() => ProjectCount, {nullable:false})
    _count?: ProjectCount;
}
