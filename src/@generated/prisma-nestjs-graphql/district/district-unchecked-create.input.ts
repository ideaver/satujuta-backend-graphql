import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { AddressUncheckedCreateNestedManyWithoutDistrictInput } from '../address/address-unchecked-create-nested-many-without-district.input';

@InputType()
export class DistrictUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    @Validator.MinLength(2)
    @Validator.IsNotEmpty()
    name!: string;

    @Field(() => AddressUncheckedCreateNestedManyWithoutDistrictInput, {nullable:true})
    address?: AddressUncheckedCreateNestedManyWithoutDistrictInput;
}
