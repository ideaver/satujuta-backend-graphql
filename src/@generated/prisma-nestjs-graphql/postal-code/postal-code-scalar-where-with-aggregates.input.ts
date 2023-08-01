import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class PostalCodeScalarWhereWithAggregatesInput {

    @Field(() => [PostalCodeScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PostalCodeScalarWhereWithAggregatesInput>;

    @Field(() => [PostalCodeScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PostalCodeScalarWhereWithAggregatesInput>;

    @Field(() => [PostalCodeScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PostalCodeScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    code?: IntWithAggregatesFilter;
}
