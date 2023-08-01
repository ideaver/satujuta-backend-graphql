import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProgramCategoryWhereInput } from './program-category-where.input';

@InputType()
export class ProgramCategoryRelationFilter {

    @Field(() => ProgramCategoryWhereInput, {nullable:true})
    is?: ProgramCategoryWhereInput;

    @Field(() => ProgramCategoryWhereInput, {nullable:true})
    isNot?: ProgramCategoryWhereInput;
}
