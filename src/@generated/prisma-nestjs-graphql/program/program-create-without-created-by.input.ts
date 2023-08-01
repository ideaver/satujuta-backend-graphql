import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { ImagesCreateNestedManyWithoutProgramImageInput } from '../images/images-create-nested-many-without-program-image.input';
import { UserCreateNestedManyWithoutProgramsParticipationInput } from '../user/user-create-nested-many-without-programs-participation.input';
import { ProgramCategoryCreateNestedOneWithoutProgramsInput } from '../program-category/program-category-create-nested-one-without-programs.input';

@InputType()
export class ProgramCreateWithoutCreatedByInput {

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

    @Field(() => ImagesCreateNestedManyWithoutProgramImageInput, {nullable:true})
    Images?: ImagesCreateNestedManyWithoutProgramImageInput;

    @Field(() => UserCreateNestedManyWithoutProgramsParticipationInput, {nullable:true})
    participant?: UserCreateNestedManyWithoutProgramsParticipationInput;

    @Field(() => ProgramCategoryCreateNestedOneWithoutProgramsInput, {nullable:false})
    category!: ProgramCategoryCreateNestedOneWithoutProgramsInput;
}
