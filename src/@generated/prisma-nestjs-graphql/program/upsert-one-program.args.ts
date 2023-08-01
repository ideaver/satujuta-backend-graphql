import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProgramWhereUniqueInput } from './program-where-unique.input';
import { Type } from 'class-transformer';
import { ProgramCreateInput } from './program-create.input';
import { ProgramUpdateInput } from './program-update.input';

@ArgsType()
export class UpsertOneProgramArgs {

    @Field(() => ProgramWhereUniqueInput, {nullable:false})
    @Type(() => ProgramWhereUniqueInput)
    where!: Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>;

    @Field(() => ProgramCreateInput, {nullable:false})
    @Type(() => ProgramCreateInput)
    create!: ProgramCreateInput;

    @Field(() => ProgramUpdateInput, {nullable:false})
    @Type(() => ProgramUpdateInput)
    update!: ProgramUpdateInput;
}
