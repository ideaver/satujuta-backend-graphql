import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProgramWhereUniqueInput } from './program-where-unique.input';
import { Type } from 'class-transformer';
import { ProgramUpdateWithoutParticipantInput } from './program-update-without-participant.input';

@InputType()
export class ProgramUpdateWithWhereUniqueWithoutParticipantInput {

    @Field(() => ProgramWhereUniqueInput, {nullable:false})
    @Type(() => ProgramWhereUniqueInput)
    where!: Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>;

    @Field(() => ProgramUpdateWithoutParticipantInput, {nullable:false})
    @Type(() => ProgramUpdateWithoutParticipantInput)
    data!: ProgramUpdateWithoutParticipantInput;
}
