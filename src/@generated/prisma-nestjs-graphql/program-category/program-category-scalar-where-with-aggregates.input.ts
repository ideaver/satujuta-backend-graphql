import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class ProgramCategoryScalarWhereWithAggregatesInput {

    @Field(() => [ProgramCategoryScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ProgramCategoryScalarWhereWithAggregatesInput>;

    @Field(() => [ProgramCategoryScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ProgramCategoryScalarWhereWithAggregatesInput>;

    @Field(() => [ProgramCategoryScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ProgramCategoryScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
