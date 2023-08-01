import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProgramCategoryWhereInput } from './program-category-where.input';
import { Type } from 'class-transformer';
import { ProgramCategoryUpdateWithoutProgramsInput } from './program-category-update-without-programs.input';

@InputType()
export class ProgramCategoryUpdateToOneWithWhereWithoutProgramsInput {

    @Field(() => ProgramCategoryWhereInput, {nullable:true})
    @Type(() => ProgramCategoryWhereInput)
    where?: ProgramCategoryWhereInput;

    @Field(() => ProgramCategoryUpdateWithoutProgramsInput, {nullable:false})
    @Type(() => ProgramCategoryUpdateWithoutProgramsInput)
    data!: ProgramCategoryUpdateWithoutProgramsInput;
}
