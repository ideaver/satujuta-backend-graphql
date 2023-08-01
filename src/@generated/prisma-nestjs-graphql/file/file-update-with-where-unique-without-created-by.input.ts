import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { Type } from 'class-transformer';
import { FileUpdateWithoutCreatedByInput } from './file-update-without-created-by.input';

@InputType()
export class FileUpdateWithWhereUniqueWithoutCreatedByInput {

    @Field(() => FileWhereUniqueInput, {nullable:false})
    @Type(() => FileWhereUniqueInput)
    where!: Prisma.AtLeast<FileWhereUniqueInput, 'id' | 'createdById'>;

    @Field(() => FileUpdateWithoutCreatedByInput, {nullable:false})
    @Type(() => FileUpdateWithoutCreatedByInput)
    data!: FileUpdateWithoutCreatedByInput;
}
