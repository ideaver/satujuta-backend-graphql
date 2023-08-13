import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { SchoolWhereUniqueInput } from 'src/@generated';

@InputType()
export class SchoolFindUniqueArgs {
  select?: Prisma.SchoolSelect;

    @Field(() => SchoolWhereUniqueInput, {nullable:false})
    @Type(() => SchoolWhereUniqueInput)
    where!: Prisma.AtLeast<SchoolWhereUniqueInput, 'id'>;
}
