import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProgramCreateWithoutParticipantInput } from './program-create-without-participant.input';
import { Type } from 'class-transformer';
import { ProgramCreateOrConnectWithoutParticipantInput } from './program-create-or-connect-without-participant.input';
import { Prisma } from '@prisma/client';
import { ProgramWhereUniqueInput } from './program-where-unique.input';

@InputType()
export class ProgramUncheckedCreateNestedManyWithoutParticipantInput {

    @Field(() => [ProgramCreateWithoutParticipantInput], {nullable:true})
    @Type(() => ProgramCreateWithoutParticipantInput)
    create?: Array<ProgramCreateWithoutParticipantInput>;

    @Field(() => [ProgramCreateOrConnectWithoutParticipantInput], {nullable:true})
    @Type(() => ProgramCreateOrConnectWithoutParticipantInput)
    connectOrCreate?: Array<ProgramCreateOrConnectWithoutParticipantInput>;

    @Field(() => [ProgramWhereUniqueInput], {nullable:true})
    @Type(() => ProgramWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>>;
}
