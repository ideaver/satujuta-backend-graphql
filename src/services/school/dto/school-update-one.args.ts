import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { SchoolUpdateInput, SchoolWhereUniqueInput } from 'src/@generated';

@InputType()
export class SchoolUpdateOneArgs {

    select?: Prisma.SchoolSelect;

    @Field(() => SchoolUpdateInput, {nullable:false})
    @Type(() => SchoolUpdateInput)
    data!: InstanceType<typeof SchoolUpdateInput>;
    @Field(() => SchoolWhereUniqueInput, {nullable:false})
    @Type(() => SchoolWhereUniqueInput)
    where!: Prisma.AtLeast<SchoolWhereUniqueInput, 'id'>;
}
