import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { AddressCreateNestedManyWithoutDistrictInput } from '../address/address-create-nested-many-without-district.input';

@InputType()
export class DistrictCreateInput {

    @Field(() => String, {nullable:false})
    @Validator.MinLength(2)
    @Validator.IsNotEmpty()
    name!: string;

    @Field(() => AddressCreateNestedManyWithoutDistrictInput, {nullable:true})
    address?: AddressCreateNestedManyWithoutDistrictInput;
}
