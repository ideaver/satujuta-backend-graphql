import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HotelWhereUniqueInput } from './hotel-where-unique.input';
import { Type } from 'class-transformer';
import { HotelCreateWithoutAddressInput } from './hotel-create-without-address.input';

@InputType()
export class HotelCreateOrConnectWithoutAddressInput {

    @Field(() => HotelWhereUniqueInput, {nullable:false})
    @Type(() => HotelWhereUniqueInput)
    where!: Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>;

    @Field(() => HotelCreateWithoutAddressInput, {nullable:false})
    @Type(() => HotelCreateWithoutAddressInput)
    create!: HotelCreateWithoutAddressInput;
}
