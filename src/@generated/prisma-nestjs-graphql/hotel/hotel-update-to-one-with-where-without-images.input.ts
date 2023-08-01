import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HotelWhereInput } from './hotel-where.input';
import { Type } from 'class-transformer';
import { HotelUpdateWithoutImagesInput } from './hotel-update-without-images.input';

@InputType()
export class HotelUpdateToOneWithWhereWithoutImagesInput {

    @Field(() => HotelWhereInput, {nullable:true})
    @Type(() => HotelWhereInput)
    where?: HotelWhereInput;

    @Field(() => HotelUpdateWithoutImagesInput, {nullable:false})
    @Type(() => HotelUpdateWithoutImagesInput)
    data!: HotelUpdateWithoutImagesInput;
}
