import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateWithoutCreatedByInput } from './file-create-without-created-by.input';
import { Type } from 'class-transformer';
import { FileCreateOrConnectWithoutCreatedByInput } from './file-create-or-connect-without-created-by.input';
import { FileUpsertWithWhereUniqueWithoutCreatedByInput } from './file-upsert-with-where-unique-without-created-by.input';
import { FileCreateManyCreatedByInputEnvelope } from './file-create-many-created-by-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { FileUpdateWithWhereUniqueWithoutCreatedByInput } from './file-update-with-where-unique-without-created-by.input';
import { FileUpdateManyWithWhereWithoutCreatedByInput } from './file-update-many-with-where-without-created-by.input';
import { FileScalarWhereInput } from './file-scalar-where.input';

@InputType()
export class FileUpdateManyWithoutCreatedByNestedInput {

    @Field(() => [FileCreateWithoutCreatedByInput], {nullable:true})
    @Type(() => FileCreateWithoutCreatedByInput)
    create?: Array<FileCreateWithoutCreatedByInput>;

    @Field(() => [FileCreateOrConnectWithoutCreatedByInput], {nullable:true})
    @Type(() => FileCreateOrConnectWithoutCreatedByInput)
    connectOrCreate?: Array<FileCreateOrConnectWithoutCreatedByInput>;

    @Field(() => [FileUpsertWithWhereUniqueWithoutCreatedByInput], {nullable:true})
    @Type(() => FileUpsertWithWhereUniqueWithoutCreatedByInput)
    upsert?: Array<FileUpsertWithWhereUniqueWithoutCreatedByInput>;

    @Field(() => FileCreateManyCreatedByInputEnvelope, {nullable:true})
    @Type(() => FileCreateManyCreatedByInputEnvelope)
    createMany?: FileCreateManyCreatedByInputEnvelope;

    @Field(() => [FileWhereUniqueInput], {nullable:true})
    @Type(() => FileWhereUniqueInput)
    set?: Array<Prisma.AtLeast<FileWhereUniqueInput, 'id' | 'createdById'>>;

    @Field(() => [FileWhereUniqueInput], {nullable:true})
    @Type(() => FileWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<FileWhereUniqueInput, 'id' | 'createdById'>>;

    @Field(() => [FileWhereUniqueInput], {nullable:true})
    @Type(() => FileWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<FileWhereUniqueInput, 'id' | 'createdById'>>;

    @Field(() => [FileWhereUniqueInput], {nullable:true})
    @Type(() => FileWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FileWhereUniqueInput, 'id' | 'createdById'>>;

    @Field(() => [FileUpdateWithWhereUniqueWithoutCreatedByInput], {nullable:true})
    @Type(() => FileUpdateWithWhereUniqueWithoutCreatedByInput)
    update?: Array<FileUpdateWithWhereUniqueWithoutCreatedByInput>;

    @Field(() => [FileUpdateManyWithWhereWithoutCreatedByInput], {nullable:true})
    @Type(() => FileUpdateManyWithWhereWithoutCreatedByInput)
    updateMany?: Array<FileUpdateManyWithWhereWithoutCreatedByInput>;

    @Field(() => [FileScalarWhereInput], {nullable:true})
    @Type(() => FileScalarWhereInput)
    deleteMany?: Array<FileScalarWhereInput>;
}
