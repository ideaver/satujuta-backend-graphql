import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProgramCategoryUpdateInput } from './program-category-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ProgramCategoryWhereUniqueInput } from './program-category-where-unique.input';

@ArgsType()
export class UpdateOneProgramCategoryArgs {

    @Field(() => ProgramCategoryUpdateInput, {nullable:false})
    @Type(() => ProgramCategoryUpdateInput)
    data!: ProgramCategoryUpdateInput;

    @Field(() => ProgramCategoryWhereUniqueInput, {nullable:false})
    @Type(() => ProgramCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<ProgramCategoryWhereUniqueInput, 'id'>;
}
