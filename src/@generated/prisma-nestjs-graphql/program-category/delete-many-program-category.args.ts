import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProgramCategoryWhereInput } from './program-category-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyProgramCategoryArgs {

    @Field(() => ProgramCategoryWhereInput, {nullable:true})
    @Type(() => ProgramCategoryWhereInput)
    where?: ProgramCategoryWhereInput;
}
