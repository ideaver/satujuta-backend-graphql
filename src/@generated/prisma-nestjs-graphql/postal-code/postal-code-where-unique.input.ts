import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { PostalCodeWhereInput } from './postal-code-where.input';
import { AddressListRelationFilter } from '../address/address-list-relation-filter.input';

@InputType()
export class PostalCodeWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    @Validator.MinLength(3)
    @Validator.IsPostalCode('ID')
    code?: number;

    @Field(() => [PostalCodeWhereInput], {nullable:true})
    AND?: Array<PostalCodeWhereInput>;

    @Field(() => [PostalCodeWhereInput], {nullable:true})
    OR?: Array<PostalCodeWhereInput>;

    @Field(() => [PostalCodeWhereInput], {nullable:true})
    NOT?: Array<PostalCodeWhereInput>;

    @Field(() => AddressListRelationFilter, {nullable:true})
    address?: AddressListRelationFilter;
}
