import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ProgramCategoryWhereInput } from './program-category-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ProgramListRelationFilter } from '../program/program-list-relation-filter.input';

@InputType()
export class ProgramCategoryWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [ProgramCategoryWhereInput], {nullable:true})
    AND?: Array<ProgramCategoryWhereInput>;

    @Field(() => [ProgramCategoryWhereInput], {nullable:true})
    OR?: Array<ProgramCategoryWhereInput>;

    @Field(() => [ProgramCategoryWhereInput], {nullable:true})
    NOT?: Array<ProgramCategoryWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => ProgramListRelationFilter, {nullable:true})
    programs?: ProgramListRelationFilter;
}
