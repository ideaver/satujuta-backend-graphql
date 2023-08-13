import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { FileUpdateInput, FileWhereUniqueInput } from 'src/@generated';

@InputType()
export class FileUpdateOneArgs {

    select?: Prisma.FileSelect;

    @Field(() => FileUpdateInput, {nullable:false})
    @Type(() => FileUpdateInput)
    data!: InstanceType<typeof FileUpdateInput>;
    @Field(() => FileWhereUniqueInput, {nullable:false})
    @Type(() => FileWhereUniqueInput)
    where!: Prisma.AtLeast<FileWhereUniqueInput, 'id'>;
}
