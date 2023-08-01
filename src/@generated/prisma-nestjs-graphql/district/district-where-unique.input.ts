import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DistrictWhereInput } from './district-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { AddressListRelationFilter } from '../address/address-list-relation-filter.input';

@InputType()
export class DistrictWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [DistrictWhereInput], {nullable:true})
    AND?: Array<DistrictWhereInput>;

    @Field(() => [DistrictWhereInput], {nullable:true})
    OR?: Array<DistrictWhereInput>;

    @Field(() => [DistrictWhereInput], {nullable:true})
    NOT?: Array<DistrictWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => AddressListRelationFilter, {nullable:true})
    address?: AddressListRelationFilter;
}
