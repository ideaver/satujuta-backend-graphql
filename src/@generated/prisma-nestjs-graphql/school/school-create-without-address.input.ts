import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { UserCreateNestedManyWithoutSchoolInput } from '../user/user-create-nested-many-without-school.input';

@InputType()
export class SchoolCreateWithoutAddressInput {

    @Field(() => String, {nullable:false})
    @Validator.MinLength(5)
    @Validator.IsAlphanumeric()
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedManyWithoutSchoolInput, {nullable:true})
    students?: UserCreateNestedManyWithoutSchoolInput;
}
