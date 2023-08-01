import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DistrictWhereUniqueInput } from './district-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueDistrictArgs {

    @Field(() => DistrictWhereUniqueInput, {nullable:false})
    @Type(() => DistrictWhereUniqueInput)
    where!: Prisma.AtLeast<DistrictWhereUniqueInput, 'id'>;
}
