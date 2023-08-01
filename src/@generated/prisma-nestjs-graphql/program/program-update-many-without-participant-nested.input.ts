import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProgramCreateWithoutParticipantInput } from './program-create-without-participant.input';
import { Type } from 'class-transformer';
import { ProgramCreateOrConnectWithoutParticipantInput } from './program-create-or-connect-without-participant.input';
import { ProgramUpsertWithWhereUniqueWithoutParticipantInput } from './program-upsert-with-where-unique-without-participant.input';
import { Prisma } from '@prisma/client';
import { ProgramWhereUniqueInput } from './program-where-unique.input';
import { ProgramUpdateWithWhereUniqueWithoutParticipantInput } from './program-update-with-where-unique-without-participant.input';
import { ProgramUpdateManyWithWhereWithoutParticipantInput } from './program-update-many-with-where-without-participant.input';
import { ProgramScalarWhereInput } from './program-scalar-where.input';

@InputType()
export class ProgramUpdateManyWithoutParticipantNestedInput {

    @Field(() => [ProgramCreateWithoutParticipantInput], {nullable:true})
    @Type(() => ProgramCreateWithoutParticipantInput)
    create?: Array<ProgramCreateWithoutParticipantInput>;

    @Field(() => [ProgramCreateOrConnectWithoutParticipantInput], {nullable:true})
    @Type(() => ProgramCreateOrConnectWithoutParticipantInput)
    connectOrCreate?: Array<ProgramCreateOrConnectWithoutParticipantInput>;

    @Field(() => [ProgramUpsertWithWhereUniqueWithoutParticipantInput], {nullable:true})
    @Type(() => ProgramUpsertWithWhereUniqueWithoutParticipantInput)
    upsert?: Array<ProgramUpsertWithWhereUniqueWithoutParticipantInput>;

    @Field(() => [ProgramWhereUniqueInput], {nullable:true})
    @Type(() => ProgramWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>>;

    @Field(() => [ProgramWhereUniqueInput], {nullable:true})
    @Type(() => ProgramWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>>;

    @Field(() => [ProgramWhereUniqueInput], {nullable:true})
    @Type(() => ProgramWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>>;

    @Field(() => [ProgramWhereUniqueInput], {nullable:true})
    @Type(() => ProgramWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>>;

    @Field(() => [ProgramUpdateWithWhereUniqueWithoutParticipantInput], {nullable:true})
    @Type(() => ProgramUpdateWithWhereUniqueWithoutParticipantInput)
    update?: Array<ProgramUpdateWithWhereUniqueWithoutParticipantInput>;

    @Field(() => [ProgramUpdateManyWithWhereWithoutParticipantInput], {nullable:true})
    @Type(() => ProgramUpdateManyWithWhereWithoutParticipantInput)
    updateMany?: Array<ProgramUpdateManyWithWhereWithoutParticipantInput>;

    @Field(() => [ProgramScalarWhereInput], {nullable:true})
    @Type(() => ProgramScalarWhereInput)
    deleteMany?: Array<ProgramScalarWhereInput>;
}
