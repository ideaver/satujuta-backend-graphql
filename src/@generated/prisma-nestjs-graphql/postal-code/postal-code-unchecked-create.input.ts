import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { AddressUncheckedCreateNestedManyWithoutPostalCodeInput } from '../address/address-unchecked-create-nested-many-without-postal-code.input';

@InputType()
export class PostalCodeUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    @Validator.MinLength(3)
    @Validator.IsPostalCode('ID')
    code!: number;

    @Field(() => AddressUncheckedCreateNestedManyWithoutPostalCodeInput, {nullable:true})
    address?: AddressUncheckedCreateNestedManyWithoutPostalCodeInput;
}
