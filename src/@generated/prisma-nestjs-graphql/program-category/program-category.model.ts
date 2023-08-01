import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Program } from '../program/program.model';
import { ProgramCategoryCount } from './program-category-count.output';

@ObjectType()
export class ProgramCategory {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [Program], {nullable:true})
    programs?: Array<Program>;

    @Field(() => ProgramCategoryCount, {nullable:false})
    _count?: ProgramCategoryCount;
}
