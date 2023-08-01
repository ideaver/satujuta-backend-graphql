import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressUpdateWithoutHotelInput } from './address-update-without-hotel.input';
import { Type } from 'class-transformer';
import { AddressCreateWithoutHotelInput } from './address-create-without-hotel.input';
import { AddressWhereInput } from './address-where.input';

@InputType()
export class AddressUpsertWithoutHotelInput {

    @Field(() => AddressUpdateWithoutHotelInput, {nullable:false})
    @Type(() => AddressUpdateWithoutHotelInput)
    update!: AddressUpdateWithoutHotelInput;

    @Field(() => AddressCreateWithoutHotelInput, {nullable:false})
    @Type(() => AddressCreateWithoutHotelInput)
    create!: AddressCreateWithoutHotelInput;

    @Field(() => AddressWhereInput, {nullable:true})
    @Type(() => AddressWhereInput)
    where?: AddressWhereInput;
}
