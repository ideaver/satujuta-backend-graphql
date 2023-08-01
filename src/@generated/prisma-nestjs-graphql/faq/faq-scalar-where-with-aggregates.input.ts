import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class FaqScalarWhereWithAggregatesInput {

    @Field(() => [FaqScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<FaqScalarWhereWithAggregatesInput>;

    @Field(() => [FaqScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<FaqScalarWhereWithAggregatesInput>;

    @Field(() => [FaqScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<FaqScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
