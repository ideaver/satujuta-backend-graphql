import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HotelCreateWithoutImagesInput } from './hotel-create-without-images.input';
import { Type } from 'class-transformer';
import { HotelCreateOrConnectWithoutImagesInput } from './hotel-create-or-connect-without-images.input';
import { Prisma } from '@prisma/client';
import { HotelWhereUniqueInput } from './hotel-where-unique.input';

@InputType()
export class HotelCreateNestedOneWithoutImagesInput {

    @Field(() => HotelCreateWithoutImagesInput, {nullable:true})
    @Type(() => HotelCreateWithoutImagesInput)
    create?: HotelCreateWithoutImagesInput;

    @Field(() => HotelCreateOrConnectWithoutImagesInput, {nullable:true})
    @Type(() => HotelCreateOrConnectWithoutImagesInput)
    connectOrCreate?: HotelCreateOrConnectWithoutImagesInput;

    @Field(() => HotelWhereUniqueInput, {nullable:true})
    @Type(() => HotelWhereUniqueInput)
    connect?: Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>;
}
