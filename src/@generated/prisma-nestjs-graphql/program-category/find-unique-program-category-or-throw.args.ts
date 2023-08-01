import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProgramCategoryWhereUniqueInput } from './program-category-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueProgramCategoryOrThrowArgs {

    @Field(() => ProgramCategoryWhereUniqueInput, {nullable:false})
    @Type(() => ProgramCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<ProgramCategoryWhereUniqueInput, 'id'>;
}
