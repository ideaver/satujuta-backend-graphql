import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ProgramCategoryUpdateInput, ProgramCategoryWhereUniqueInput } from 'src/@generated';

@InputType()
export class ProgramCategoryUpdateOneArgs {

    select?: Prisma.ProgramCategorySelect;

    @Field(() => ProgramCategoryUpdateInput, {nullable:false})
    @Type(() => ProgramCategoryUpdateInput)
    data!: InstanceType<typeof ProgramCategoryUpdateInput>;
    @Field(() => ProgramCategoryWhereUniqueInput, {nullable:false})
    @Type(() => ProgramCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<ProgramCategoryWhereUniqueInput, 'id'>;
}
