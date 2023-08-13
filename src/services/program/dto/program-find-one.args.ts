import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { ProgramWhereUniqueInput } from 'src/@generated';

@InputType()
export class ProgramFindUniqueArgs {
  select?: Prisma.ProgramSelect;

    @Field(() => ProgramWhereUniqueInput, {nullable:false})
    @Type(() => ProgramWhereUniqueInput)
    where!: Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>;
}
