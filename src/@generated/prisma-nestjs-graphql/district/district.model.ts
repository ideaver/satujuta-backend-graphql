import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Address } from '../address/address.model';
import { DistrictCount } from './district-count.output';

@ObjectType()
export class District {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => [Address], {nullable:true})
    address?: Array<Address>;

    @Field(() => DistrictCount, {nullable:false})
    _count?: DistrictCount;
}
