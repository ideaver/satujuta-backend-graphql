import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProgramCreateWithoutCreatedByInput } from './program-create-without-created-by.input';
import { Type } from 'class-transformer';
import { ProgramCreateOrConnectWithoutCreatedByInput } from './program-create-or-connect-without-created-by.input';
import { ProgramUpsertWithWhereUniqueWithoutCreatedByInput } from './program-upsert-with-where-unique-without-created-by.input';
import { ProgramCreateManyCreatedByInputEnvelope } from './program-create-many-created-by-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProgramWhereUniqueInput } from './program-where-unique.input';
import { ProgramUpdateWithWhereUniqueWithoutCreatedByInput } from './program-update-with-where-unique-without-created-by.input';
import { ProgramUpdateManyWithWhereWithoutCreatedByInput } from './program-update-many-with-where-without-created-by.input';
import { ProgramScalarWhereInput } from './program-scalar-where.input';

@InputType()
export class ProgramUncheckedUpdateManyWithoutCreatedByNestedInput {

    @Field(() => [ProgramCreateWithoutCreatedByInput], {nullable:true})
    @Type(() => ProgramCreateWithoutCreatedByInput)
    create?: Array<ProgramCreateWithoutCreatedByInput>;

    @Field(() => [ProgramCreateOrConnectWithoutCreatedByInput], {nullable:true})
    @Type(() => ProgramCreateOrConnectWithoutCreatedByInput)
    connectOrCreate?: Array<ProgramCreateOrConnectWithoutCreatedByInput>;

    @Field(() => [ProgramUpsertWithWhereUniqueWithoutCreatedByInput], {nullable:true})
    @Type(() => ProgramUpsertWithWhereUniqueWithoutCreatedByInput)
    upsert?: Array<ProgramUpsertWithWhereUniqueWithoutCreatedByInput>;

    @Field(() => ProgramCreateManyCreatedByInputEnvelope, {nullable:true})
    @Type(() => ProgramCreateManyCreatedByInputEnvelope)
    createMany?: ProgramCreateManyCreatedByInputEnvelope;

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

    @Field(() => [ProgramUpdateWithWhereUniqueWithoutCreatedByInput], {nullable:true})
    @Type(() => ProgramUpdateWithWhereUniqueWithoutCreatedByInput)
    update?: Array<ProgramUpdateWithWhereUniqueWithoutCreatedByInput>;

    @Field(() => [ProgramUpdateManyWithWhereWithoutCreatedByInput], {nullable:true})
    @Type(() => ProgramUpdateManyWithWhereWithoutCreatedByInput)
    updateMany?: Array<ProgramUpdateManyWithWhereWithoutCreatedByInput>;

    @Field(() => [ProgramScalarWhereInput], {nullable:true})
    @Type(() => ProgramScalarWhereInput)
    deleteMany?: Array<ProgramScalarWhereInput>;
}
