import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ImagesWhereUniqueInput } from './images-where-unique.input';
import { Type } from 'class-transformer';
import { ImagesUpdateWithoutHotelImageInput } from './images-update-without-hotel-image.input';
import { ImagesCreateWithoutHotelImageInput } from './images-create-without-hotel-image.input';

@InputType()
export class ImagesUpsertWithWhereUniqueWithoutHotelImageInput {

    @Field(() => ImagesWhereUniqueInput, {nullable:false})
    @Type(() => ImagesWhereUniqueInput)
    where!: Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>;

    @Field(() => ImagesUpdateWithoutHotelImageInput, {nullable:false})
    @Type(() => ImagesUpdateWithoutHotelImageInput)
    update!: ImagesUpdateWithoutHotelImageInput;

    @Field(() => ImagesCreateWithoutHotelImageInput, {nullable:false})
    @Type(() => ImagesCreateWithoutHotelImageInput)
    create!: ImagesCreateWithoutHotelImageInput;
}
