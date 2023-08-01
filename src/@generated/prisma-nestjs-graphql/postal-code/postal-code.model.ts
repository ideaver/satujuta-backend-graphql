import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Address } from '../address/address.model';
import { PostalCodeCount } from './postal-code-count.output';

@ObjectType()
export class PostalCode {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    code!: number;

    @Field(() => [Address], {nullable:true})
    address?: Array<Address>;

    @Field(() => PostalCodeCount, {nullable:false})
    _count?: PostalCodeCount;
}
