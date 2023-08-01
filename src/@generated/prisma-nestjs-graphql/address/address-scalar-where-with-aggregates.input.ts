import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class AddressScalarWhereWithAggregatesInput {

    @Field(() => [AddressScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AddressScalarWhereWithAggregatesInput>;

    @Field(() => [AddressScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AddressScalarWhereWithAggregatesInput>;

    @Field(() => [AddressScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AddressScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    cityId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    districtId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    postalCodeId?: IntWithAggregatesFilter;
}
