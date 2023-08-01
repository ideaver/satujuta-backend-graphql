import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Address } from '../address/address.model';
import { User } from '../user/user.model';
import { SchoolCount } from './school-count.output';

@ObjectType()
export class School {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:false})
    addressId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Address, {nullable:false})
    address?: Address;

    @Field(() => [User], {nullable:true})
    students?: Array<User>;

    @Field(() => SchoolCount, {nullable:false})
    _count?: SchoolCount;
}
