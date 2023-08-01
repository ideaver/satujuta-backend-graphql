import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ImagesWhereUniqueInput } from './images-where-unique.input';
import { Type } from 'class-transformer';
import { ImagesUpdateWithoutHotelImageInput } from './images-update-without-hotel-image.input';

@InputType()
export class ImagesUpdateWithWhereUniqueWithoutHotelImageInput {

    @Field(() => ImagesWhereUniqueInput, {nullable:false})
    @Type(() => ImagesWhereUniqueInput)
    where!: Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>;

    @Field(() => ImagesUpdateWithoutHotelImageInput, {nullable:false})
    @Type(() => ImagesUpdateWithoutHotelImageInput)
    data!: ImagesUpdateWithoutHotelImageInput;
}
