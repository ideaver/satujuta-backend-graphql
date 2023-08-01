import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HotelUpdateWithoutImagesInput } from './hotel-update-without-images.input';
import { Type } from 'class-transformer';
import { HotelCreateWithoutImagesInput } from './hotel-create-without-images.input';
import { HotelWhereInput } from './hotel-where.input';

@InputType()
export class HotelUpsertWithoutImagesInput {

    @Field(() => HotelUpdateWithoutImagesInput, {nullable:false})
    @Type(() => HotelUpdateWithoutImagesInput)
    update!: HotelUpdateWithoutImagesInput;

    @Field(() => HotelCreateWithoutImagesInput, {nullable:false})
    @Type(() => HotelCreateWithoutImagesInput)
    create!: HotelCreateWithoutImagesInput;

    @Field(() => HotelWhereInput, {nullable:true})
    @Type(() => HotelWhereInput)
    where?: HotelWhereInput;
}
