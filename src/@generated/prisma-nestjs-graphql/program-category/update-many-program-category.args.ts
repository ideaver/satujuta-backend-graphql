import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProgramCategoryUpdateManyMutationInput } from './program-category-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ProgramCategoryWhereInput } from './program-category-where.input';

@ArgsType()
export class UpdateManyProgramCategoryArgs {

    @Field(() => ProgramCategoryUpdateManyMutationInput, {nullable:false})
    @Type(() => ProgramCategoryUpdateManyMutationInput)
    data!: ProgramCategoryUpdateManyMutationInput;

    @Field(() => ProgramCategoryWhereInput, {nullable:true})
    @Type(() => ProgramCategoryWhereInput)
    where?: ProgramCategoryWhereInput;
}
