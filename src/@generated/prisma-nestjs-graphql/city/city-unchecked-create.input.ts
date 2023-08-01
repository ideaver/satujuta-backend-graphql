import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { AddressUncheckedCreateNestedManyWithoutCityInput } from '../address/address-unchecked-create-nested-many-without-city.input';

@InputType()
export class CityUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    @Validator.MinLength(2)
    @Validator.IsNotEmpty()
    name!: string;

    @Field(() => AddressUncheckedCreateNestedManyWithoutCityInput, {nullable:true})
    address?: AddressUncheckedCreateNestedManyWithoutCityInput;
}
