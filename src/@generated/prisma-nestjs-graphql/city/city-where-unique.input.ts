import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CityWhereInput } from './city-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { AddressListRelationFilter } from '../address/address-list-relation-filter.input';

@InputType()
export class CityWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [CityWhereInput], {nullable:true})
    AND?: Array<CityWhereInput>;

    @Field(() => [CityWhereInput], {nullable:true})
    OR?: Array<CityWhereInput>;

    @Field(() => [CityWhereInput], {nullable:true})
    NOT?: Array<CityWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => AddressListRelationFilter, {nullable:true})
    address?: AddressListRelationFilter;
}
