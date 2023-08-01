import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SchoolWhereUniqueInput } from './school-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueSchoolArgs {

    @Field(() => SchoolWhereUniqueInput, {nullable:false})
    @Type(() => SchoolWhereUniqueInput)
    where!: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'addressId'>;
}
