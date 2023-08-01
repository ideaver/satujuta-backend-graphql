import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HotelWhereInput } from './hotel-where.input';
import { Type } from 'class-transformer';
import { HotelUpdateWithoutAddressInput } from './hotel-update-without-address.input';

@InputType()
export class HotelUpdateToOneWithWhereWithoutAddressInput {

    @Field(() => HotelWhereInput, {nullable:true})
    @Type(() => HotelWhereInput)
    where?: HotelWhereInput;

    @Field(() => HotelUpdateWithoutAddressInput, {nullable:false})
    @Type(() => HotelUpdateWithoutAddressInput)
    data!: HotelUpdateWithoutAddressInput;
}
