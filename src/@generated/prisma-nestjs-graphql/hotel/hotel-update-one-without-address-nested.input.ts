import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HotelCreateWithoutAddressInput } from './hotel-create-without-address.input';
import { Type } from 'class-transformer';
import { HotelCreateOrConnectWithoutAddressInput } from './hotel-create-or-connect-without-address.input';
import { HotelUpsertWithoutAddressInput } from './hotel-upsert-without-address.input';
import { HotelWhereInput } from './hotel-where.input';
import { Prisma } from '@prisma/client';
import { HotelWhereUniqueInput } from './hotel-where-unique.input';
import { HotelUpdateToOneWithWhereWithoutAddressInput } from './hotel-update-to-one-with-where-without-address.input';

@InputType()
export class HotelUpdateOneWithoutAddressNestedInput {

    @Field(() => HotelCreateWithoutAddressInput, {nullable:true})
    @Type(() => HotelCreateWithoutAddressInput)
    create?: HotelCreateWithoutAddressInput;

    @Field(() => HotelCreateOrConnectWithoutAddressInput, {nullable:true})
    @Type(() => HotelCreateOrConnectWithoutAddressInput)
    connectOrCreate?: HotelCreateOrConnectWithoutAddressInput;

    @Field(() => HotelUpsertWithoutAddressInput, {nullable:true})
    @Type(() => HotelUpsertWithoutAddressInput)
    upsert?: HotelUpsertWithoutAddressInput;

    @Field(() => HotelWhereInput, {nullable:true})
    @Type(() => HotelWhereInput)
    disconnect?: HotelWhereInput;

    @Field(() => HotelWhereInput, {nullable:true})
    @Type(() => HotelWhereInput)
    delete?: HotelWhereInput;

    @Field(() => HotelWhereUniqueInput, {nullable:true})
    @Type(() => HotelWhereUniqueInput)
    connect?: Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>;

    @Field(() => HotelUpdateToOneWithWhereWithoutAddressInput, {nullable:true})
    @Type(() => HotelUpdateToOneWithWhereWithoutAddressInput)
    update?: HotelUpdateToOneWithWhereWithoutAddressInput;
}
