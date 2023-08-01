import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProgramWhereUniqueInput } from './program-where-unique.input';
import { Type } from 'class-transformer';
import { ProgramUpdateWithoutCreatedByInput } from './program-update-without-created-by.input';

@InputType()
export class ProgramUpdateWithWhereUniqueWithoutCreatedByInput {

    @Field(() => ProgramWhereUniqueInput, {nullable:false})
    @Type(() => ProgramWhereUniqueInput)
    where!: Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>;

    @Field(() => ProgramUpdateWithoutCreatedByInput, {nullable:false})
    @Type(() => ProgramUpdateWithoutCreatedByInput)
    data!: ProgramUpdateWithoutCreatedByInput;
}
