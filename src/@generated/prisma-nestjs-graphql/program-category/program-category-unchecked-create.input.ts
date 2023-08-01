import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { ProgramUncheckedCreateNestedManyWithoutCategoryInput } from '../program/program-unchecked-create-nested-many-without-category.input';

@InputType()
export class ProgramCategoryUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    @Validator.MinLength(2)
    @Validator.MaxLength(20)
    @Validator.IsNotEmpty()
    @Validator.IsAlphanumeric()
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ProgramUncheckedCreateNestedManyWithoutCategoryInput, {nullable:true})
    programs?: ProgramUncheckedCreateNestedManyWithoutCategoryInput;
}
