import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProgramCategoryWhereUniqueInput } from './program-category-where-unique.input';
import { Type } from 'class-transformer';
import { ProgramCategoryCreateWithoutProgramsInput } from './program-category-create-without-programs.input';

@InputType()
export class ProgramCategoryCreateOrConnectWithoutProgramsInput {

    @Field(() => ProgramCategoryWhereUniqueInput, {nullable:false})
    @Type(() => ProgramCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<ProgramCategoryWhereUniqueInput, 'id'>;

    @Field(() => ProgramCategoryCreateWithoutProgramsInput, {nullable:false})
    @Type(() => ProgramCategoryCreateWithoutProgramsInput)
    create!: ProgramCategoryCreateWithoutProgramsInput;
}
