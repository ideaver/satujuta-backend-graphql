import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { SchoolWhereInput } from './school-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { AddressRelationFilter } from '../address/address-relation-filter.input';
import { UserListRelationFilter } from '../user/user-list-relation-filter.input';

@InputType()
export class SchoolWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    addressId?: number;

    @Field(() => [SchoolWhereInput], {nullable:true})
    AND?: Array<SchoolWhereInput>;

    @Field(() => [SchoolWhereInput], {nullable:true})
    OR?: Array<SchoolWhereInput>;

    @Field(() => [SchoolWhereInput], {nullable:true})
    NOT?: Array<SchoolWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => AddressRelationFilter, {nullable:true})
    address?: AddressRelationFilter;

    @Field(() => UserListRelationFilter, {nullable:true})
    students?: UserListRelationFilter;
}
