import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { AddressListRelationFilter } from '../address/address-list-relation-filter.input';

@InputType()
export class CityWhereInput {

    @Field(() => [CityWhereInput], {nullable:true})
    AND?: Array<CityWhereInput>;

    @Field(() => [CityWhereInput], {nullable:true})
    OR?: Array<CityWhereInput>;

    @Field(() => [CityWhereInput], {nullable:true})
    NOT?: Array<CityWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => AddressListRelationFilter, {nullable:true})
    address?: AddressListRelationFilter;
}
