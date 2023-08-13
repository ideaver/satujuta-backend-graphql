import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { FileWhereUniqueInput } from 'src/@generated';

@InputType()
export class FileFindUniqueArgs {
  select?: Prisma.FileSelect;

    @Field(() => FileWhereUniqueInput, {nullable:false})
    @Type(() => FileWhereUniqueInput)
    where!: Prisma.AtLeast<FileWhereUniqueInput, 'id'>;
}
