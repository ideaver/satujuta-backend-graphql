import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DistrictCreateWithoutAddressInput } from './district-create-without-address.input';
import { Type } from 'class-transformer';
import { DistrictCreateOrConnectWithoutAddressInput } from './district-create-or-connect-without-address.input';
import { Prisma } from '@prisma/client';
import { DistrictWhereUniqueInput } from './district-where-unique.input';

@InputType()
export class DistrictCreateNestedOneWithoutAddressInput {

    @Field(() => DistrictCreateWithoutAddressInput, {nullable:true})
    @Type(() => DistrictCreateWithoutAddressInput)
    create?: DistrictCreateWithoutAddressInput;

    @Field(() => DistrictCreateOrConnectWithoutAddressInput, {nullable:true})
    @Type(() => DistrictCreateOrConnectWithoutAddressInput)
    connectOrCreate?: DistrictCreateOrConnectWithoutAddressInput;

    @Field(() => DistrictWhereUniqueInput, {nullable:true})
    @Type(() => DistrictWhereUniqueInput)
    connect?: Prisma.AtLeast<DistrictWhereUniqueInput, 'id'>;
}
