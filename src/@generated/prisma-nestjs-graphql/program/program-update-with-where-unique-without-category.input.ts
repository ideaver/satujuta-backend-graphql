import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProgramWhereUniqueInput } from './program-where-unique.input';
import { Type } from 'class-transformer';
import { ProgramUpdateWithoutCategoryInput } from './program-update-without-category.input';

@InputType()
export class ProgramUpdateWithWhereUniqueWithoutCategoryInput {

    @Field(() => ProgramWhereUniqueInput, {nullable:false})
    @Type(() => ProgramWhereUniqueInput)
    where!: Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>;

    @Field(() => ProgramUpdateWithoutCategoryInput, {nullable:false})
    @Type(() => ProgramUpdateWithoutCategoryInput)
    data!: ProgramUpdateWithoutCategoryInput;
}
