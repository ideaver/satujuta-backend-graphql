import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HotelWhereUniqueInput } from './hotel-where-unique.input';
import { Type } from 'class-transformer';
import { HotelCreateWithoutCreatedByInput } from './hotel-create-without-created-by.input';

@InputType()
export class HotelCreateOrConnectWithoutCreatedByInput {

    @Field(() => HotelWhereUniqueInput, {nullable:false})
    @Type(() => HotelWhereUniqueInput)
    where!: Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>;

    @Field(() => HotelCreateWithoutCreatedByInput, {nullable:false})
    @Type(() => HotelCreateWithoutCreatedByInput)
    create!: HotelCreateWithoutCreatedByInput;
}
