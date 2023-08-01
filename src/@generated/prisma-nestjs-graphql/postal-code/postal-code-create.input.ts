import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { AddressCreateNestedManyWithoutPostalCodeInput } from '../address/address-create-nested-many-without-postal-code.input';

@InputType()
export class PostalCodeCreateInput {

    @Field(() => Int, {nullable:false})
    @Validator.MinLength(3)
    @Validator.IsPostalCode('ID')
    code!: number;

    @Field(() => AddressCreateNestedManyWithoutPostalCodeInput, {nullable:true})
    address?: AddressCreateNestedManyWithoutPostalCodeInput;
}
