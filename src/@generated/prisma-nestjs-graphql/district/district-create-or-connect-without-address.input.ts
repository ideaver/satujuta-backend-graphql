import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DistrictWhereUniqueInput } from './district-where-unique.input';
import { Type } from 'class-transformer';
import { DistrictCreateWithoutAddressInput } from './district-create-without-address.input';

@InputType()
export class DistrictCreateOrConnectWithoutAddressInput {

    @Field(() => DistrictWhereUniqueInput, {nullable:false})
    @Type(() => DistrictWhereUniqueInput)
    where!: Prisma.AtLeast<DistrictWhereUniqueInput, 'id'>;

    @Field(() => DistrictCreateWithoutAddressInput, {nullable:false})
    @Type(() => DistrictCreateWithoutAddressInput)
    create!: DistrictCreateWithoutAddressInput;
}
