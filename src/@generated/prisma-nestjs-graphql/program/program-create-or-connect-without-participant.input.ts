import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProgramWhereUniqueInput } from './program-where-unique.input';
import { Type } from 'class-transformer';
import { ProgramCreateWithoutParticipantInput } from './program-create-without-participant.input';

@InputType()
export class ProgramCreateOrConnectWithoutParticipantInput {

    @Field(() => ProgramWhereUniqueInput, {nullable:false})
    @Type(() => ProgramWhereUniqueInput)
    where!: Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>;

    @Field(() => ProgramCreateWithoutParticipantInput, {nullable:false})
    @Type(() => ProgramCreateWithoutParticipantInput)
    create!: ProgramCreateWithoutParticipantInput;
}
