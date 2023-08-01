import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProgramCategoryCreateInput } from './program-category-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneProgramCategoryArgs {

    @Field(() => ProgramCategoryCreateInput, {nullable:false})
    @Type(() => ProgramCategoryCreateInput)
    data!: ProgramCategoryCreateInput;
}
