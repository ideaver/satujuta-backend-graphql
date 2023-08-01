import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class SchoolScalarWhereWithAggregatesInput {

    @Field(() => [SchoolScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<SchoolScalarWhereWithAggregatesInput>;

    @Field(() => [SchoolScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<SchoolScalarWhereWithAggregatesInput>;

    @Field(() => [SchoolScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<SchoolScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    addressId?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
