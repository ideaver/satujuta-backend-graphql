import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';
import { Type } from 'class-transformer';
import { AddressCreateWithoutHotelInput } from './address-create-without-hotel.input';

@InputType()
export class AddressCreateOrConnectWithoutHotelInput {

    @Field(() => AddressWhereUniqueInput, {nullable:false})
    @Type(() => AddressWhereUniqueInput)
    where!: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;

    @Field(() => AddressCreateWithoutHotelInput, {nullable:false})
    @Type(() => AddressCreateWithoutHotelInput)
    create!: AddressCreateWithoutHotelInput;
}
