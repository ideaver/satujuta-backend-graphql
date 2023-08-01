import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ProgramListRelationFilter } from '../program/program-list-relation-filter.input';

@InputType()
export class ProgramCategoryWhereInput {

    @Field(() => [ProgramCategoryWhereInput], {nullable:true})
    AND?: Array<ProgramCategoryWhereInput>;

    @Field(() => [ProgramCategoryWhereInput], {nullable:true})
    OR?: Array<ProgramCategoryWhereInput>;

    @Field(() => [ProgramCategoryWhereInput], {nullable:true})
    NOT?: Array<ProgramCategoryWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => ProgramListRelationFilter, {nullable:true})
    programs?: ProgramListRelationFilter;
}
