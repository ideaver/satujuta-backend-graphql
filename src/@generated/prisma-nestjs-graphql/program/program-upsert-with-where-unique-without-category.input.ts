import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProgramWhereUniqueInput } from './program-where-unique.input';
import { Type } from 'class-transformer';
import { ProgramUpdateWithoutCategoryInput } from './program-update-without-category.input';
import { ProgramCreateWithoutCategoryInput } from './program-create-without-category.input';

@InputType()
export class ProgramUpsertWithWhereUniqueWithoutCategoryInput {

    @Field(() => ProgramWhereUniqueInput, {nullable:false})
    @Type(() => ProgramWhereUniqueInput)
    where!: Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>;

    @Field(() => ProgramUpdateWithoutCategoryInput, {nullable:false})
    @Type(() => ProgramUpdateWithoutCategoryInput)
    update!: ProgramUpdateWithoutCategoryInput;

    @Field(() => ProgramCreateWithoutCategoryInput, {nullable:false})
    @Type(() => ProgramCreateWithoutCategoryInput)
    create!: ProgramCreateWithoutCategoryInput;
}
