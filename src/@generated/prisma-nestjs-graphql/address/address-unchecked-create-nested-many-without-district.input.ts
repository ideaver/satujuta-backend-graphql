import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressCreateWithoutDistrictInput } from './address-create-without-district.input';
import { Type } from 'class-transformer';
import { AddressCreateOrConnectWithoutDistrictInput } from './address-create-or-connect-without-district.input';
import { AddressCreateManyDistrictInputEnvelope } from './address-create-many-district-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';

@InputType()
export class AddressUncheckedCreateNestedManyWithoutDistrictInput {

    @Field(() => [AddressCreateWithoutDistrictInput], {nullable:true})
    @Type(() => AddressCreateWithoutDistrictInput)
    create?: Array<AddressCreateWithoutDistrictInput>;

    @Field(() => [AddressCreateOrConnectWithoutDistrictInput], {nullable:true})
    @Type(() => AddressCreateOrConnectWithoutDistrictInput)
    connectOrCreate?: Array<AddressCreateOrConnectWithoutDistrictInput>;

    @Field(() => AddressCreateManyDistrictInputEnvelope, {nullable:true})
    @Type(() => AddressCreateManyDistrictInputEnvelope)
    createMany?: AddressCreateManyDistrictInputEnvelope;

    @Field(() => [AddressWhereUniqueInput], {nullable:true})
    @Type(() => AddressWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;
}
