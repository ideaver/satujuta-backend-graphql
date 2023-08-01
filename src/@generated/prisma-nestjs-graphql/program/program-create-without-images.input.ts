import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { UserCreateNestedOneWithoutProgramsCreatedInput } from '../user/user-create-nested-one-without-programs-created.input';
import { UserCreateNestedManyWithoutProgramsParticipationInput } from '../user/user-create-nested-many-without-programs-participation.input';
import { ProgramCategoryCreateNestedOneWithoutProgramsInput } from '../program-category/program-category-create-nested-one-without-programs.input';

@InputType()
export class ProgramCreateWithoutImagesInput {

    @Field(() => String, {nullable:false})
    @Validator.MinLength(2)
    @Validator.MaxLength(20)
    @Validator.IsAlphanumeric()
    @Validator.IsNotEmpty()
    name!: string;

    @Field(() => Date, {nullable:false})
    startDate!: Date | string;

    @Field(() => Date, {nullable:true})
    dueDate?: Date | string;

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    description!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutProgramsCreatedInput, {nullable:false})
    createdBy!: UserCreateNestedOneWithoutProgramsCreatedInput;

    @Field(() => UserCreateNestedManyWithoutProgramsParticipationInput, {nullable:true})
    participant?: UserCreateNestedManyWithoutProgramsParticipationInput;

    @Field(() => ProgramCategoryCreateNestedOneWithoutProgramsInput, {nullable:false})
    category!: ProgramCategoryCreateNestedOneWithoutProgramsInput;
}
