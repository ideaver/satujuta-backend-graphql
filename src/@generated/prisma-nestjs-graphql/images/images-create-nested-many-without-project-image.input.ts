import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImagesCreateWithoutProjectImageInput } from './images-create-without-project-image.input';
import { Type } from 'class-transformer';
import { ImagesCreateOrConnectWithoutProjectImageInput } from './images-create-or-connect-without-project-image.input';
import { ImagesCreateManyProjectImageInputEnvelope } from './images-create-many-project-image-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ImagesWhereUniqueInput } from './images-where-unique.input';

@InputType()
export class ImagesCreateNestedManyWithoutProjectImageInput {

    @Field(() => [ImagesCreateWithoutProjectImageInput], {nullable:true})
    @Type(() => ImagesCreateWithoutProjectImageInput)
    create?: Array<ImagesCreateWithoutProjectImageInput>;

    @Field(() => [ImagesCreateOrConnectWithoutProjectImageInput], {nullable:true})
    @Type(() => ImagesCreateOrConnectWithoutProjectImageInput)
    connectOrCreate?: Array<ImagesCreateOrConnectWithoutProjectImageInput>;

    @Field(() => ImagesCreateManyProjectImageInputEnvelope, {nullable:true})
    @Type(() => ImagesCreateManyProjectImageInputEnvelope)
    createMany?: ImagesCreateManyProjectImageInputEnvelope;

    @Field(() => [ImagesWhereUniqueInput], {nullable:true})
    @Type(() => ImagesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
}
