import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DistrictUpdateInput } from './district-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { DistrictWhereUniqueInput } from './district-where-unique.input';

@ArgsType()
export class UpdateOneDistrictArgs {

    @Field(() => DistrictUpdateInput, {nullable:false})
    @Type(() => DistrictUpdateInput)
    data!: DistrictUpdateInput;

    @Field(() => DistrictWhereUniqueInput, {nullable:false})
    @Type(() => DistrictWhereUniqueInput)
    where!: Prisma.AtLeast<DistrictWhereUniqueInput, 'id'>;
}
