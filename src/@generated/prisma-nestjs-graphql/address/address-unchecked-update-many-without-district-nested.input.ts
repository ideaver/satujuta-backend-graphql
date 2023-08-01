import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressCreateWithoutDistrictInput } from './address-create-without-district.input';
import { Type } from 'class-transformer';
import { AddressCreateOrConnectWithoutDistrictInput } from './address-create-or-connect-without-district.input';
import { AddressUpsertWithWhereUniqueWithoutDistrictInput } from './address-upsert-with-where-unique-without-district.input';
import { AddressCreateManyDistrictInputEnvelope } from './address-create-many-district-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';
import { AddressUpdateWithWhereUniqueWithoutDistrictInput } from './address-update-with-where-unique-without-district.input';
import { AddressUpdateManyWithWhereWithoutDistrictInput } from './address-update-many-with-where-without-district.input';
import { AddressScalarWhereInput } from './address-scalar-where.input';

@InputType()
export class AddressUncheckedUpdateManyWithoutDistrictNestedInput {

    @Field(() => [AddressCreateWithoutDistrictInput], {nullable:true})
    @Type(() => AddressCreateWithoutDistrictInput)
    create?: Array<AddressCreateWithoutDistrictInput>;

    @Field(() => [AddressCreateOrConnectWithoutDistrictInput], {nullable:true})
    @Type(() => AddressCreateOrConnectWithoutDistrictInput)
    connectOrCreate?: Array<AddressCreateOrConnectWithoutDistrictInput>;

    @Field(() => [AddressUpsertWithWhereUniqueWithoutDistrictInput], {nullable:true})
    @Type(() => AddressUpsertWithWhereUniqueWithoutDistrictInput)
    upsert?: Array<AddressUpsertWithWhereUniqueWithoutDistrictInput>;

    @Field(() => AddressCreateManyDistrictInputEnvelope, {nullable:true})
    @Type(() => AddressCreateManyDistrictInputEnvelope)
    createMany?: AddressCreateManyDistrictInputEnvelope;

    @Field(() => [AddressWhereUniqueInput], {nullable:true})
    @Type(() => AddressWhereUniqueInput)
    set?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;

    @Field(() => [AddressWhereUniqueInput], {nullable:true})
    @Type(() => AddressWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;

    @Field(() => [AddressWhereUniqueInput], {nullable:true})
    @Type(() => AddressWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;

    @Field(() => [AddressWhereUniqueInput], {nullable:true})
    @Type(() => AddressWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;

    @Field(() => [AddressUpdateWithWhereUniqueWithoutDistrictInput], {nullable:true})
    @Type(() => AddressUpdateWithWhereUniqueWithoutDistrictInput)
    update?: Array<AddressUpdateWithWhereUniqueWithoutDistrictInput>;

    @Field(() => [AddressUpdateManyWithWhereWithoutDistrictInput], {nullable:true})
    @Type(() => AddressUpdateManyWithWhereWithoutDistrictInput)
    updateMany?: Array<AddressUpdateManyWithWhereWithoutDistrictInput>;

    @Field(() => [AddressScalarWhereInput], {nullable:true})
    @Type(() => AddressScalarWhereInput)
    deleteMany?: Array<AddressScalarWhereInput>;
}
