import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HotelCreateWithoutAddressInput } from './hotel-create-without-address.input';
import { Type } from 'class-transformer';
import { HotelCreateOrConnectWithoutAddressInput } from './hotel-create-or-connect-without-address.input';
import { Prisma } from '@prisma/client';
import { HotelWhereUniqueInput } from './hotel-where-unique.input';

@InputType()
export class HotelCreateNestedOneWithoutAddressInput {

    @Field(() => HotelCreateWithoutAddressInput, {nullable:true})
    @Type(() => HotelCreateWithoutAddressInput)
    create?: HotelCreateWithoutAddressInput;

    @Field(() => HotelCreateOrConnectWithoutAddressInput, {nullable:true})
    @Type(() => HotelCreateOrConnectWithoutAddressInput)
    connectOrCreate?: HotelCreateOrConnectWithoutAddressInput;

    @Field(() => HotelWhereUniqueInput, {nullable:true})
    @Type(() => HotelWhereUniqueInput)
    connect?: Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>;
}
