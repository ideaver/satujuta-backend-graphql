import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Images } from '../images/images.model';
import { User } from '../user/user.model';
import { ProgramCategory } from '../program-category/program-category.model';
import { ProgramCount } from './program-count.output';

@ObjectType()
export class Program {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:false})
    startDate!: Date;

    @Field(() => Date, {nullable:true})
    dueDate!: Date | null;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    createdById!: string;

    @Field(() => Int, {nullable:false})
    categoryId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [Images], {nullable:true})
    Images?: Array<Images>;

    @Field(() => User, {nullable:false})
    createdBy?: User;

    @Field(() => [User], {nullable:true})
    participant?: Array<User>;

    @Field(() => ProgramCategory, {nullable:false})
    category?: ProgramCategory;

    @Field(() => ProgramCount, {nullable:false})
    _count?: ProgramCount;
}
