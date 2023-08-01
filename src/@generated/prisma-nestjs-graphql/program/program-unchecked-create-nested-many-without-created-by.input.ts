import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProgramCreateWithoutCreatedByInput } from './program-create-without-created-by.input';
import { Type } from 'class-transformer';
import { ProgramCreateOrConnectWithoutCreatedByInput } from './program-create-or-connect-without-created-by.input';
import { ProgramCreateManyCreatedByInputEnvelope } from './program-create-many-created-by-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProgramWhereUniqueInput } from './program-where-unique.input';

@InputType()
export class ProgramUncheckedCreateNestedManyWithoutCreatedByInput {

    @Field(() => [ProgramCreateWithoutCreatedByInput], {nullable:true})
    @Type(() => ProgramCreateWithoutCreatedByInput)
    create?: Array<ProgramCreateWithoutCreatedByInput>;

    @Field(() => [ProgramCreateOrConnectWithoutCreatedByInput], {nullable:true})
    @Type(() => ProgramCreateOrConnectWithoutCreatedByInput)
    connectOrCreate?: Array<ProgramCreateOrConnectWithoutCreatedByInput>;

    @Field(() => ProgramCreateManyCreatedByInputEnvelope, {nullable:true})
    @Type(() => ProgramCreateManyCreatedByInputEnvelope)
    createMany?: ProgramCreateManyCreatedByInputEnvelope;

    @Field(() => [ProgramWhereUniqueInput], {nullable:true})
    @Type(() => ProgramWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>>;
}
