import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImagesCreateWithoutHotelImageInput } from './images-create-without-hotel-image.input';
import { Type } from 'class-transformer';
import { ImagesCreateOrConnectWithoutHotelImageInput } from './images-create-or-connect-without-hotel-image.input';
import { ImagesUpsertWithWhereUniqueWithoutHotelImageInput } from './images-upsert-with-where-unique-without-hotel-image.input';
import { ImagesCreateManyHotelImageInputEnvelope } from './images-create-many-hotel-image-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ImagesWhereUniqueInput } from './images-where-unique.input';
import { ImagesUpdateWithWhereUniqueWithoutHotelImageInput } from './images-update-with-where-unique-without-hotel-image.input';
import { ImagesUpdateManyWithWhereWithoutHotelImageInput } from './images-update-many-with-where-without-hotel-image.input';
import { ImagesScalarWhereInput } from './images-scalar-where.input';

@InputType()
export class ImagesUncheckedUpdateManyWithoutHotelImageNestedInput {

    @Field(() => [ImagesCreateWithoutHotelImageInput], {nullable:true})
    @Type(() => ImagesCreateWithoutHotelImageInput)
    create?: Array<ImagesCreateWithoutHotelImageInput>;

    @Field(() => [ImagesCreateOrConnectWithoutHotelImageInput], {nullable:true})
    @Type(() => ImagesCreateOrConnectWithoutHotelImageInput)
    connectOrCreate?: Array<ImagesCreateOrConnectWithoutHotelImageInput>;

    @Field(() => [ImagesUpsertWithWhereUniqueWithoutHotelImageInput], {nullable:true})
    @Type(() => ImagesUpsertWithWhereUniqueWithoutHotelImageInput)
    upsert?: Array<ImagesUpsertWithWhereUniqueWithoutHotelImageInput>;

    @Field(() => ImagesCreateManyHotelImageInputEnvelope, {nullable:true})
    @Type(() => ImagesCreateManyHotelImageInputEnvelope)
    createMany?: ImagesCreateManyHotelImageInputEnvelope;

    @Field(() => [ImagesWhereUniqueInput], {nullable:true})
    @Type(() => ImagesWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;

    @Field(() => [ImagesWhereUniqueInput], {nullable:true})
    @Type(() => ImagesWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;

    @Field(() => [ImagesWhereUniqueInput], {nullable:true})
    @Type(() => ImagesWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;

    @Field(() => [ImagesWhereUniqueInput], {nullable:true})
    @Type(() => ImagesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;

    @Field(() => [ImagesUpdateWithWhereUniqueWithoutHotelImageInput], {nullable:true})
    @Type(() => ImagesUpdateWithWhereUniqueWithoutHotelImageInput)
    update?: Array<ImagesUpdateWithWhereUniqueWithoutHotelImageInput>;

    @Field(() => [ImagesUpdateManyWithWhereWithoutHotelImageInput], {nullable:true})
    @Type(() => ImagesUpdateManyWithWhereWithoutHotelImageInput)
    updateMany?: Array<ImagesUpdateManyWithWhereWithoutHotelImageInput>;

    @Field(() => [ImagesScalarWhereInput], {nullable:true})
    @Type(() => ImagesScalarWhereInput)
    deleteMany?: Array<ImagesScalarWhereInput>;
}
