import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressCreateWithoutCityInput } from './address-create-without-city.input';
import { Type } from 'class-transformer';
import { AddressCreateOrConnectWithoutCityInput } from './address-create-or-connect-without-city.input';
import { AddressCreateManyCityInputEnvelope } from './address-create-many-city-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';

@InputType()
export class AddressCreateNestedManyWithoutCityInput {

    @Field(() => [AddressCreateWithoutCityInput], {nullable:true})
    @Type(() => AddressCreateWithoutCityInput)
    create?: Array<AddressCreateWithoutCityInput>;

    @Field(() => [AddressCreateOrConnectWithoutCityInput], {nullable:true})
    @Type(() => AddressCreateOrConnectWithoutCityInput)
    connectOrCreate?: Array<AddressCreateOrConnectWithoutCityInput>;

    @Field(() => AddressCreateManyCityInputEnvelope, {nullable:true})
    @Type(() => AddressCreateManyCityInputEnvelope)
    createMany?: AddressCreateManyCityInputEnvelope;

    @Field(() => [AddressWhereUniqueInput], {nullable:true})
    @Type(() => AddressWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;
}
