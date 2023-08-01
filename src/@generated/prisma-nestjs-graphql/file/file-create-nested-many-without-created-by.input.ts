import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateWithoutCreatedByInput } from './file-create-without-created-by.input';
import { Type } from 'class-transformer';
import { FileCreateOrConnectWithoutCreatedByInput } from './file-create-or-connect-without-created-by.input';
import { FileCreateManyCreatedByInputEnvelope } from './file-create-many-created-by-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FileWhereUniqueInput } from './file-where-unique.input';

@InputType()
export class FileCreateNestedManyWithoutCreatedByInput {

    @Field(() => [FileCreateWithoutCreatedByInput], {nullable:true})
    @Type(() => FileCreateWithoutCreatedByInput)
    create?: Array<FileCreateWithoutCreatedByInput>;

    @Field(() => [FileCreateOrConnectWithoutCreatedByInput], {nullable:true})
    @Type(() => FileCreateOrConnectWithoutCreatedByInput)
    connectOrCreate?: Array<FileCreateOrConnectWithoutCreatedByInput>;

    @Field(() => FileCreateManyCreatedByInputEnvelope, {nullable:true})
    @Type(() => FileCreateManyCreatedByInputEnvelope)
    createMany?: FileCreateManyCreatedByInputEnvelope;

    @Field(() => [FileWhereUniqueInput], {nullable:true})
    @Type(() => FileWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FileWhereUniqueInput, 'id' | 'createdById'>>;
}
