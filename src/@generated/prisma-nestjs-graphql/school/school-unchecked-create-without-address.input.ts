import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { UserUncheckedCreateNestedManyWithoutSchoolInput } from '../user/user-unchecked-create-nested-many-without-school.input';

@InputType()
export class SchoolUncheckedCreateWithoutAddressInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    @Validator.MinLength(5)
    @Validator.IsAlphanumeric()
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserUncheckedCreateNestedManyWithoutSchoolInput, {nullable:true})
    students?: UserUncheckedCreateNestedManyWithoutSchoolInput;
}
