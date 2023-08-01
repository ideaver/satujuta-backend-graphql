import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { AddressListRelationFilter } from '../address/address-list-relation-filter.input';

@InputType()
export class PostalCodeWhereInput {

    @Field(() => [PostalCodeWhereInput], {nullable:true})
    AND?: Array<PostalCodeWhereInput>;

    @Field(() => [PostalCodeWhereInput], {nullable:true})
    OR?: Array<PostalCodeWhereInput>;

    @Field(() => [PostalCodeWhereInput], {nullable:true})
    NOT?: Array<PostalCodeWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    code?: IntFilter;

    @Field(() => AddressListRelationFilter, {nullable:true})
    address?: AddressListRelationFilter;
}
