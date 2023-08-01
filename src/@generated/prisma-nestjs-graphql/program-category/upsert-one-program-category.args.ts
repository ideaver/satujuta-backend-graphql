import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProgramCategoryWhereUniqueInput } from './program-category-where-unique.input';
import { Type } from 'class-transformer';
import { ProgramCategoryCreateInput } from './program-category-create.input';
import { ProgramCategoryUpdateInput } from './program-category-update.input';

@ArgsType()
export class UpsertOneProgramCategoryArgs {

    @Field(() => ProgramCategoryWhereUniqueInput, {nullable:false})
    @Type(() => ProgramCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<ProgramCategoryWhereUniqueInput, 'id'>;

    @Field(() => ProgramCategoryCreateInput, {nullable:false})
    @Type(() => ProgramCategoryCreateInput)
    create!: ProgramCategoryCreateInput;

    @Field(() => ProgramCategoryUpdateInput, {nullable:false})
    @Type(() => ProgramCategoryUpdateInput)
    update!: ProgramCategoryUpdateInput;
}
