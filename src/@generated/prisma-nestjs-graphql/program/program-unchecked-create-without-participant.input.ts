import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { ImagesUncheckedCreateNestedManyWithoutProgramImageInput } from '../images/images-unchecked-create-nested-many-without-program-image.input';

@InputType()
export class ProgramUncheckedCreateWithoutParticipantInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => String, {nullable:false})
    createdById!: string;

    @Field(() => Int, {nullable:false})
    categoryId!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ImagesUncheckedCreateNestedManyWithoutProgramImageInput, {nullable:true})
    Images?: ImagesUncheckedCreateNestedManyWithoutProgramImageInput;
}
