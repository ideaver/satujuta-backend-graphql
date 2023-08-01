import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProgramUpdateInput } from './program-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ProgramWhereUniqueInput } from './program-where-unique.input';

@ArgsType()
export class UpdateOneProgramArgs {

    @Field(() => ProgramUpdateInput, {nullable:false})
    @Type(() => ProgramUpdateInput)
    data!: ProgramUpdateInput;

    @Field(() => ProgramWhereUniqueInput, {nullable:false})
    @Type(() => ProgramWhereUniqueInput)
    where!: Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>;
}
