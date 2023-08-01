import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { AddressCreateNestedOneWithoutSchoolInput } from '../address/address-create-nested-one-without-school.input';
import { UserCreateNestedManyWithoutSchoolInput } from '../user/user-create-nested-many-without-school.input';

@InputType()
export class SchoolCreateInput {

    @Field(() => String, {nullable:false})
    @Validator.MinLength(5)
    @Validator.IsAlphanumeric()
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => AddressCreateNestedOneWithoutSchoolInput, {nullable:false})
    address!: AddressCreateNestedOneWithoutSchoolInput;

    @Field(() => UserCreateNestedManyWithoutSchoolInput, {nullable:true})
    students?: UserCreateNestedManyWithoutSchoolInput;
}
