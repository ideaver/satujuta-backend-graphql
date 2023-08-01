import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressWhereInput } from './address-where.input';
import { Type } from 'class-transformer';
import { AddressUpdateWithoutHotelInput } from './address-update-without-hotel.input';

@InputType()
export class AddressUpdateToOneWithWhereWithoutHotelInput {

    @Field(() => AddressWhereInput, {nullable:true})
    @Type(() => AddressWhereInput)
    where?: AddressWhereInput;

    @Field(() => AddressUpdateWithoutHotelInput, {nullable:false})
    @Type(() => AddressUpdateWithoutHotelInput)
    data!: AddressUpdateWithoutHotelInput;
}
