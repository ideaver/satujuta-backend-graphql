import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProgramCategoryCreateWithoutProgramsInput } from './program-category-create-without-programs.input';
import { Type } from 'class-transformer';
import { ProgramCategoryCreateOrConnectWithoutProgramsInput } from './program-category-create-or-connect-without-programs.input';
import { ProgramCategoryUpsertWithoutProgramsInput } from './program-category-upsert-without-programs.input';
import { Prisma } from '@prisma/client';
import { ProgramCategoryWhereUniqueInput } from './program-category-where-unique.input';
import { ProgramCategoryUpdateToOneWithWhereWithoutProgramsInput } from './program-category-update-to-one-with-where-without-programs.input';

@InputType()
export class ProgramCategoryUpdateOneRequiredWithoutProgramsNestedInput {

    @Field(() => ProgramCategoryCreateWithoutProgramsInput, {nullable:true})
    @Type(() => ProgramCategoryCreateWithoutProgramsInput)
    create?: ProgramCategoryCreateWithoutProgramsInput;

    @Field(() => ProgramCategoryCreateOrConnectWithoutProgramsInput, {nullable:true})
    @Type(() => ProgramCategoryCreateOrConnectWithoutProgramsInput)
    connectOrCreate?: ProgramCategoryCreateOrConnectWithoutProgramsInput;

    @Field(() => ProgramCategoryUpsertWithoutProgramsInput, {nullable:true})
    @Type(() => ProgramCategoryUpsertWithoutProgramsInput)
    upsert?: ProgramCategoryUpsertWithoutProgramsInput;

    @Field(() => ProgramCategoryWhereUniqueInput, {nullable:true})
    @Type(() => ProgramCategoryWhereUniqueInput)
    connect?: Prisma.AtLeast<ProgramCategoryWhereUniqueInput, 'id'>;

    @Field(() => ProgramCategoryUpdateToOneWithWhereWithoutProgramsInput, {nullable:true})
    @Type(() => ProgramCategoryUpdateToOneWithWhereWithoutProgramsInput)
    update?: ProgramCategoryUpdateToOneWithWhereWithoutProgramsInput;
}
