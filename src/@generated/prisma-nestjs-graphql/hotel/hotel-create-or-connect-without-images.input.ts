import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HotelWhereUniqueInput } from './hotel-where-unique.input';
import { Type } from 'class-transformer';
import { HotelCreateWithoutImagesInput } from './hotel-create-without-images.input';

@InputType()
export class HotelCreateOrConnectWithoutImagesInput {

    @Field(() => HotelWhereUniqueInput, {nullable:false})
    @Type(() => HotelWhereUniqueInput)
    where!: Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>;

    @Field(() => HotelCreateWithoutImagesInput, {nullable:false})
    @Type(() => HotelCreateWithoutImagesInput)
    create!: HotelCreateWithoutImagesInput;
}
