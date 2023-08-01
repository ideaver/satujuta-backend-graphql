import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HotelWhereUniqueInput } from './hotel-where-unique.input';
import { Type } from 'class-transformer';
import { HotelUpdateWithoutCreatedByInput } from './hotel-update-without-created-by.input';

@InputType()
export class HotelUpdateWithWhereUniqueWithoutCreatedByInput {

    @Field(() => HotelWhereUniqueInput, {nullable:false})
    @Type(() => HotelWhereUniqueInput)
    where!: Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>;

    @Field(() => HotelUpdateWithoutCreatedByInput, {nullable:false})
    @Type(() => HotelUpdateWithoutCreatedByInput)
    data!: HotelUpdateWithoutCreatedByInput;
}
