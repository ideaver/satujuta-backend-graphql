import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class BankScalarWhereWithAggregatesInput {

    @Field(() => [BankScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<BankScalarWhereWithAggregatesInput>;

    @Field(() => [BankScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<BankScalarWhereWithAggregatesInput>;

    @Field(() => [BankScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<BankScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    logoUrl?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    accountNumber?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    accountId?: IntWithAggregatesFilter;
}
