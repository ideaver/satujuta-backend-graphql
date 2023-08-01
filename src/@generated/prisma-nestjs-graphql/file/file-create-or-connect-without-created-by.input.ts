import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { Type } from 'class-transformer';
import { FileCreateWithoutCreatedByInput } from './file-create-without-created-by.input';

@InputType()
export class FileCreateOrConnectWithoutCreatedByInput {

    @Field(() => FileWhereUniqueInput, {nullable:false})
    @Type(() => FileWhereUniqueInput)
    where!: Prisma.AtLeast<FileWhereUniqueInput, 'id' | 'createdById'>;

    @Field(() => FileCreateWithoutCreatedByInput, {nullable:false})
    @Type(() => FileCreateWithoutCreatedByInput)
    create!: FileCreateWithoutCreatedByInput;
}
