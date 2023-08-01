import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HotelCreateWithoutImagesInput } from './hotel-create-without-images.input';
import { Type } from 'class-transformer';
import { HotelCreateOrConnectWithoutImagesInput } from './hotel-create-or-connect-without-images.input';
import { HotelUpsertWithoutImagesInput } from './hotel-upsert-without-images.input';
import { HotelWhereInput } from './hotel-where.input';
import { Prisma } from '@prisma/client';
import { HotelWhereUniqueInput } from './hotel-where-unique.input';
import { HotelUpdateToOneWithWhereWithoutImagesInput } from './hotel-update-to-one-with-where-without-images.input';

@InputType()
export class HotelUpdateOneWithoutImagesNestedInput {

    @Field(() => HotelCreateWithoutImagesInput, {nullable:true})
    @Type(() => HotelCreateWithoutImagesInput)
    create?: HotelCreateWithoutImagesInput;

    @Field(() => HotelCreateOrConnectWithoutImagesInput, {nullable:true})
    @Type(() => HotelCreateOrConnectWithoutImagesInput)
    connectOrCreate?: HotelCreateOrConnectWithoutImagesInput;

    @Field(() => HotelUpsertWithoutImagesInput, {nullable:true})
    @Type(() => HotelUpsertWithoutImagesInput)
    upsert?: HotelUpsertWithoutImagesInput;

    @Field(() => HotelWhereInput, {nullable:true})
    @Type(() => HotelWhereInput)
    disconnect?: HotelWhereInput;

    @Field(() => HotelWhereInput, {nullable:true})
    @Type(() => HotelWhereInput)
    delete?: HotelWhereInput;

    @Field(() => HotelWhereUniqueInput, {nullable:true})
    @Type(() => HotelWhereUniqueInput)
    connect?: Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>;

    @Field(() => HotelUpdateToOneWithWhereWithoutImagesInput, {nullable:true})
    @Type(() => HotelUpdateToOneWithWhereWithoutImagesInput)
    update?: HotelUpdateToOneWithWhereWithoutImagesInput;
}
