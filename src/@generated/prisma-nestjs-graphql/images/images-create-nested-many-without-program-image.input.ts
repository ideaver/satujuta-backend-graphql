import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImagesCreateWithoutProgramImageInput } from './images-create-without-program-image.input';
import { Type } from 'class-transformer';
import { ImagesCreateOrConnectWithoutProgramImageInput } from './images-create-or-connect-without-program-image.input';
import { ImagesCreateManyProgramImageInputEnvelope } from './images-create-many-program-image-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ImagesWhereUniqueInput } from './images-where-unique.input';

@InputType()
export class ImagesCreateNestedManyWithoutProgramImageInput {

    @Field(() => [ImagesCreateWithoutProgramImageInput], {nullable:true})
    @Type(() => ImagesCreateWithoutProgramImageInput)
    create?: Array<ImagesCreateWithoutProgramImageInput>;

    @Field(() => [ImagesCreateOrConnectWithoutProgramImageInput], {nullable:true})
    @Type(() => ImagesCreateOrConnectWithoutProgramImageInput)
    connectOrCreate?: Array<ImagesCreateOrConnectWithoutProgramImageInput>;

    @Field(() => ImagesCreateManyProgramImageInputEnvelope, {nullable:true})
    @Type(() => ImagesCreateManyProgramImageInputEnvelope)
    createMany?: ImagesCreateManyProgramImageInputEnvelope;

    @Field(() => [ImagesWhereUniqueInput], {nullable:true})
    @Type(() => ImagesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
}
