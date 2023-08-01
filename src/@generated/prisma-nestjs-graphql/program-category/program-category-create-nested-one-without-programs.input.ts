import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProgramCategoryCreateWithoutProgramsInput } from './program-category-create-without-programs.input';
import { Type } from 'class-transformer';
import { ProgramCategoryCreateOrConnectWithoutProgramsInput } from './program-category-create-or-connect-without-programs.input';
import { Prisma } from '@prisma/client';
import { ProgramCategoryWhereUniqueInput } from './program-category-where-unique.input';

@InputType()
export class ProgramCategoryCreateNestedOneWithoutProgramsInput {

    @Field(() => ProgramCategoryCreateWithoutProgramsInput, {nullable:true})
    @Type(() => ProgramCategoryCreateWithoutProgramsInput)
    create?: ProgramCategoryCreateWithoutProgramsInput;

    @Field(() => ProgramCategoryCreateOrConnectWithoutProgramsInput, {nullable:true})
    @Type(() => ProgramCategoryCreateOrConnectWithoutProgramsInput)
    connectOrCreate?: ProgramCategoryCreateOrConnectWithoutProgramsInput;

    @Field(() => ProgramCategoryWhereUniqueInput, {nullable:true})
    @Type(() => ProgramCategoryWhereUniqueInput)
    connect?: Prisma.AtLeast<ProgramCategoryWhereUniqueInput, 'id'>;
}
