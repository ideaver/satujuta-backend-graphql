import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DistrictWhereUniqueInput } from './district-where-unique.input';
import { Type } from 'class-transformer';
import { DistrictCreateInput } from './district-create.input';
import { DistrictUpdateInput } from './district-update.input';

@ArgsType()
export class UpsertOneDistrictArgs {

    @Field(() => DistrictWhereUniqueInput, {nullable:false})
    @Type(() => DistrictWhereUniqueInput)
    where!: Prisma.AtLeast<DistrictWhereUniqueInput, 'id'>;

    @Field(() => DistrictCreateInput, {nullable:false})
    @Type(() => DistrictCreateInput)
    create!: DistrictCreateInput;

    @Field(() => DistrictUpdateInput, {nullable:false})
    @Type(() => DistrictUpdateInput)
    update!: DistrictUpdateInput;
}
