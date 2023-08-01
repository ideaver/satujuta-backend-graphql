import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressCreateWithoutCityInput } from './address-create-without-city.input';
import { Type } from 'class-transformer';
import { AddressCreateOrConnectWithoutCityInput } from './address-create-or-connect-without-city.input';
import { AddressUpsertWithWhereUniqueWithoutCityInput } from './address-upsert-with-where-unique-without-city.input';
import { AddressCreateManyCityInputEnvelope } from './address-create-many-city-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';
import { AddressUpdateWithWhereUniqueWithoutCityInput } from './address-update-with-where-unique-without-city.input';
import { AddressUpdateManyWithWhereWithoutCityInput } from './address-update-many-with-where-without-city.input';
import { AddressScalarWhereInput } from './address-scalar-where.input';

@InputType()
export class AddressUpdateManyWithoutCityNestedInput {

    @Field(() => [AddressCreateWithoutCityInput], {nullable:true})
    @Type(() => AddressCreateWithoutCityInput)
    create?: Array<AddressCreateWithoutCityInput>;

    @Field(() => [AddressCreateOrConnectWithoutCityInput], {nullable:true})
    @Type(() => AddressCreateOrConnectWithoutCityInput)
    connectOrCreate?: Array<AddressCreateOrConnectWithoutCityInput>;

    @Field(() => [AddressUpsertWithWhereUniqueWithoutCityInput], {nullable:true})
    @Type(() => AddressUpsertWithWhereUniqueWithoutCityInput)
    upsert?: Array<AddressUpsertWithWhereUniqueWithoutCityInput>;

    @Field(() => AddressCreateManyCityInputEnvelope, {nullable:true})
    @Type(() => AddressCreateManyCityInputEnvelope)
    createMany?: AddressCreateManyCityInputEnvelope;

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

    @Field(() => [AddressUpdateWithWhereUniqueWithoutCityInput], {nullable:true})
    @Type(() => AddressUpdateWithWhereUniqueWithoutCityInput)
    update?: Array<AddressUpdateWithWhereUniqueWithoutCityInput>;

    @Field(() => [AddressUpdateManyWithWhereWithoutCityInput], {nullable:true})
    @Type(() => AddressUpdateManyWithWhereWithoutCityInput)
    updateMany?: Array<AddressUpdateManyWithWhereWithoutCityInput>;

    @Field(() => [AddressScalarWhereInput], {nullable:true})
    @Type(() => AddressScalarWhereInput)
    deleteMany?: Array<AddressScalarWhereInput>;
}
