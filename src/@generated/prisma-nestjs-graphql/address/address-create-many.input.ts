import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';

@InputType()
export class AddressCreateManyInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    @Validator.MinLength(5)
    @Validator.IsNotEmpty()
    name!: string;

    @Field(() => Int, {nullable:false})
    cityId!: number;

    @Field(() => Int, {nullable:false})
    districtId!: number;

    @Field(() => Int, {nullable:false})
    postalCodeId!: number;
}
