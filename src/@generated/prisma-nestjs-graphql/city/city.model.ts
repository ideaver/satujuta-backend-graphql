import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Address } from '../address/address.model';
import { CityCount } from './city-count.output';

@ObjectType()
export class City {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => [Address], {nullable:true})
    address?: Array<Address>;

    @Field(() => CityCount, {nullable:false})
    _count?: CityCount;
}
