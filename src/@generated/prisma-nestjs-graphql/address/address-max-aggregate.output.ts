import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AddressMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Int, {nullable:true})
    cityId?: number;

    @Field(() => Int, {nullable:true})
    districtId?: number;

    @Field(() => Int, {nullable:true})
    postalCodeId?: number;
}
