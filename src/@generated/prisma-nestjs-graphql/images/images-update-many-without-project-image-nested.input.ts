import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImagesCreateWithoutProjectImageInput } from './images-create-without-project-image.input';
import { Type } from 'class-transformer';
import { ImagesCreateOrConnectWithoutProjectImageInput } from './images-create-or-connect-without-project-image.input';
import { ImagesUpsertWithWhereUniqueWithoutProjectImageInput } from './images-upsert-with-where-unique-without-project-image.input';
import { ImagesCreateManyProjectImageInputEnvelope } from './images-create-many-project-image-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ImagesWhereUniqueInput } from './images-where-unique.input';
import { ImagesUpdateWithWhereUniqueWithoutProjectImageInput } from './images-update-with-where-unique-without-project-image.input';
import { ImagesUpdateManyWithWhereWithoutProjectImageInput } from './images-update-many-with-where-without-project-image.input';
import { ImagesScalarWhereInput } from './images-scalar-where.input';

@InputType()
export class ImagesUpdateManyWithoutProjectImageNestedInput {

    @Field(() => [ImagesCreateWithoutProjectImageInput], {nullable:true})
    @Type(() => ImagesCreateWithoutProjectImageInput)
    create?: Array<ImagesCreateWithoutProjectImageInput>;

    @Field(() => [ImagesCreateOrConnectWithoutProjectImageInput], {nullable:true})
    @Type(() => ImagesCreateOrConnectWithoutProjectImageInput)
    connectOrCreate?: Array<ImagesCreateOrConnectWithoutProjectImageInput>;

    @Field(() => [ImagesUpsertWithWhereUniqueWithoutProjectImageInput], {nullable:true})
    @Type(() => ImagesUpsertWithWhereUniqueWithoutProjectImageInput)
    upsert?: Array<ImagesUpsertWithWhereUniqueWithoutProjectImageInput>;

    @Field(() => ImagesCreateManyProjectImageInputEnvelope, {nullable:true})
    @Type(() => ImagesCreateManyProjectImageInputEnvelope)
    createMany?: ImagesCreateManyProjectImageInputEnvelope;

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

    @Field(() => [ImagesUpdateWithWhereUniqueWithoutProjectImageInput], {nullable:true})
    @Type(() => ImagesUpdateWithWhereUniqueWithoutProjectImageInput)
    update?: Array<ImagesUpdateWithWhereUniqueWithoutProjectImageInput>;

    @Field(() => [ImagesUpdateManyWithWhereWithoutProjectImageInput], {nullable:true})
    @Type(() => ImagesUpdateManyWithWhereWithoutProjectImageInput)
    updateMany?: Array<ImagesUpdateManyWithWhereWithoutProjectImageInput>;

    @Field(() => [ImagesScalarWhereInput], {nullable:true})
    @Type(() => ImagesScalarWhereInput)
    deleteMany?: Array<ImagesScalarWhereInput>;
}
