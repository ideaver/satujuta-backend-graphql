import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { ProgramCategoryWhereUniqueInput } from 'src/@generated';

@InputType()
export class ProgramCategoryFindUniqueArgs {
  select?: Prisma.ProgramCategorySelect;

    @Field(() => ProgramCategoryWhereUniqueInput, {nullable:false})
    @Type(() => ProgramCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<ProgramCategoryWhereUniqueInput, 'id'>;
}
