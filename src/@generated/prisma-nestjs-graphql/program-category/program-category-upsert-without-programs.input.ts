import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProgramCategoryUpdateWithoutProgramsInput } from './program-category-update-without-programs.input';
import { Type } from 'class-transformer';
import { ProgramCategoryCreateWithoutProgramsInput } from './program-category-create-without-programs.input';
import { ProgramCategoryWhereInput } from './program-category-where.input';

@InputType()
export class ProgramCategoryUpsertWithoutProgramsInput {

    @Field(() => ProgramCategoryUpdateWithoutProgramsInput, {nullable:false})
    @Type(() => ProgramCategoryUpdateWithoutProgramsInput)
    update!: ProgramCategoryUpdateWithoutProgramsInput;

    @Field(() => ProgramCategoryCreateWithoutProgramsInput, {nullable:false})
    @Type(() => ProgramCategoryCreateWithoutProgramsInput)
    create!: ProgramCategoryCreateWithoutProgramsInput;

    @Field(() => ProgramCategoryWhereInput, {nullable:true})
    @Type(() => ProgramCategoryWhereInput)
    where?: ProgramCategoryWhereInput;
}
