import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressCreateWithoutHotelInput } from './address-create-without-hotel.input';
import { Type } from 'class-transformer';
import { AddressCreateOrConnectWithoutHotelInput } from './address-create-or-connect-without-hotel.input';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';

@InputType()
export class AddressCreateNestedOneWithoutHotelInput {

    @Field(() => AddressCreateWithoutHotelInput, {nullable:true})
    @Type(() => AddressCreateWithoutHotelInput)
    create?: AddressCreateWithoutHotelInput;

    @Field(() => AddressCreateOrConnectWithoutHotelInput, {nullable:true})
    @Type(() => AddressCreateOrConnectWithoutHotelInput)
    connectOrCreate?: AddressCreateOrConnectWithoutHotelInput;

    @Field(() => AddressWhereUniqueInput, {nullable:true})
    @Type(() => AddressWhereUniqueInput)
    connect?: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
}
