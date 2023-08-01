import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { AddressCreateNestedManyWithoutCityInput } from '../address/address-create-nested-many-without-city.input';

@InputType()
export class CityCreateInput {

    @Field(() => String, {nullable:false})
    @Validator.MinLength(2)
    @Validator.IsNotEmpty()
    name!: string;

    @Field(() => AddressCreateNestedManyWithoutCityInput, {nullable:true})
    address?: AddressCreateNestedManyWithoutCityInput;
}
