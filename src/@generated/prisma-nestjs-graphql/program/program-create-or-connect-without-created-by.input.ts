import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProgramWhereUniqueInput } from './program-where-unique.input';
import { Type } from 'class-transformer';
import { ProgramCreateWithoutCreatedByInput } from './program-create-without-created-by.input';

@InputType()
export class ProgramCreateOrConnectWithoutCreatedByInput {

    @Field(() => ProgramWhereUniqueInput, {nullable:false})
    @Type(() => ProgramWhereUniqueInput)
    where!: Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>;

    @Field(() => ProgramCreateWithoutCreatedByInput, {nullable:false})
    @Type(() => ProgramCreateWithoutCreatedByInput)
    create!: ProgramCreateWithoutCreatedByInput;
}
