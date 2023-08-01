import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImagesCreateWithoutHotelImageInput } from './images-create-without-hotel-image.input';
import { Type } from 'class-transformer';
import { ImagesCreateOrConnectWithoutHotelImageInput } from './images-create-or-connect-without-hotel-image.input';
import { ImagesCreateManyHotelImageInputEnvelope } from './images-create-many-hotel-image-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ImagesWhereUniqueInput } from './images-where-unique.input';

@InputType()
export class ImagesUncheckedCreateNestedManyWithoutHotelImageInput {

    @Field(() => [ImagesCreateWithoutHotelImageInput], {nullable:true})
    @Type(() => ImagesCreateWithoutHotelImageInput)
    create?: Array<ImagesCreateWithoutHotelImageInput>;

    @Field(() => [ImagesCreateOrConnectWithoutHotelImageInput], {nullable:true})
    @Type(() => ImagesCreateOrConnectWithoutHotelImageInput)
    connectOrCreate?: Array<ImagesCreateOrConnectWithoutHotelImageInput>;

    @Field(() => ImagesCreateManyHotelImageInputEnvelope, {nullable:true})
    @Type(() => ImagesCreateManyHotelImageInputEnvelope)
    createMany?: ImagesCreateManyHotelImageInputEnvelope;

    @Field(() => [ImagesWhereUniqueInput], {nullable:true})
    @Type(() => ImagesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
}
