import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProgramCategoryCreateManyInput } from './program-category-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyProgramCategoryArgs {

    @Field(() => [ProgramCategoryCreateManyInput], {nullable:false})
    @Type(() => ProgramCategoryCreateManyInput)
    data!: Array<ProgramCategoryCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
