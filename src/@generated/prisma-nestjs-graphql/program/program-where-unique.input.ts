import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ProgramWhereInput } from './program-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { ImagesListRelationFilter } from '../images/images-list-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { UserListRelationFilter } from '../user/user-list-relation-filter.input';
import { ProgramCategoryRelationFilter } from '../program-category/program-category-relation-filter.input';

@InputType()
export class ProgramWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    createdById?: string;

    @Field(() => [ProgramWhereInput], {nullable:true})
    AND?: Array<ProgramWhereInput>;

    @Field(() => [ProgramWhereInput], {nullable:true})
    OR?: Array<ProgramWhereInput>;

    @Field(() => [ProgramWhereInput], {nullable:true})
    NOT?: Array<ProgramWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    startDate?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    dueDate?: DateTimeNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    categoryId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => ImagesListRelationFilter, {nullable:true})
    Images?: ImagesListRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    createdBy?: UserRelationFilter;

    @Field(() => UserListRelationFilter, {nullable:true})
    participant?: UserListRelationFilter;

    @Field(() => ProgramCategoryRelationFilter, {nullable:true})
    category?: ProgramCategoryRelationFilter;
}
