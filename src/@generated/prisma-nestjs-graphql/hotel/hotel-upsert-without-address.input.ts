import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HotelUpdateWithoutAddressInput } from './hotel-update-without-address.input';
import { Type } from 'class-transformer';
import { HotelCreateWithoutAddressInput } from './hotel-create-without-address.input';
import { HotelWhereInput } from './hotel-where.input';

@InputType()
export class HotelUpsertWithoutAddressInput {

    @Field(() => HotelUpdateWithoutAddressInput, {nullable:false})
    @Type(() => HotelUpdateWithoutAddressInput)
    update!: HotelUpdateWithoutAddressInput;

    @Field(() => HotelCreateWithoutAddressInput, {nullable:false})
    @Type(() => HotelCreateWithoutAddressInput)
    create!: HotelCreateWithoutAddressInput;

    @Field(() => HotelWhereInput, {nullable:true})
    @Type(() => HotelWhereInput)
    where?: HotelWhereInput;
}
