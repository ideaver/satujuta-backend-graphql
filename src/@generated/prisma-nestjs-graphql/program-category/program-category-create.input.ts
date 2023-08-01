import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { ProgramCreateNestedManyWithoutCategoryInput } from '../program/program-create-nested-many-without-category.input';

@InputType()
export class ProgramCategoryCreateInput {

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

    @Field(() => ProgramCreateNestedManyWithoutCategoryInput, {nullable:true})
    programs?: ProgramCreateNestedManyWithoutCategoryInput;
}
