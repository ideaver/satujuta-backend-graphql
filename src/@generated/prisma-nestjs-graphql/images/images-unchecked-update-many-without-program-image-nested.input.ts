import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImagesCreateWithoutProgramImageInput } from './images-create-without-program-image.input';
import { Type } from 'class-transformer';
import { ImagesCreateOrConnectWithoutProgramImageInput } from './images-create-or-connect-without-program-image.input';
import { ImagesUpsertWithWhereUniqueWithoutProgramImageInput } from './images-upsert-with-where-unique-without-program-image.input';
import { ImagesCreateManyProgramImageInputEnvelope } from './images-create-many-program-image-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ImagesWhereUniqueInput } from './images-where-unique.input';
import { ImagesUpdateWithWhereUniqueWithoutProgramImageInput } from './images-update-with-where-unique-without-program-image.input';
import { ImagesUpdateManyWithWhereWithoutProgramImageInput } from './images-update-many-with-where-without-program-image.input';
import { ImagesScalarWhereInput } from './images-scalar-where.input';

@InputType()
export class ImagesUncheckedUpdateManyWithoutProgramImageNestedInput {

    @Field(() => [ImagesCreateWithoutProgramImageInput], {nullable:true})
    @Type(() => ImagesCreateWithoutProgramImageInput)
    create?: Array<ImagesCreateWithoutProgramImageInput>;

    @Field(() => [ImagesCreateOrConnectWithoutProgramImageInput], {nullable:true})
    @Type(() => ImagesCreateOrConnectWithoutProgramImageInput)
    connectOrCreate?: Array<ImagesCreateOrConnectWithoutProgramImageInput>;

    @Field(() => [ImagesUpsertWithWhereUniqueWithoutProgramImageInput], {nullable:true})
    @Type(() => ImagesUpsertWithWhereUniqueWithoutProgramImageInput)
    upsert?: Array<ImagesUpsertWithWhereUniqueWithoutProgramImageInput>;

    @Field(() => ImagesCreateManyProgramImageInputEnvelope, {nullable:true})
    @Type(() => ImagesCreateManyProgramImageInputEnvelope)
    createMany?: ImagesCreateManyProgramImageInputEnvelope;

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

    @Field(() => [ImagesUpdateWithWhereUniqueWithoutProgramImageInput], {nullable:true})
    @Type(() => ImagesUpdateWithWhereUniqueWithoutProgramImageInput)
    update?: Array<ImagesUpdateWithWhereUniqueWithoutProgramImageInput>;

    @Field(() => [ImagesUpdateManyWithWhereWithoutProgramImageInput], {nullable:true})
    @Type(() => ImagesUpdateManyWithWhereWithoutProgramImageInput)
    updateMany?: Array<ImagesUpdateManyWithWhereWithoutProgramImageInput>;

    @Field(() => [ImagesScalarWhereInput], {nullable:true})
    @Type(() => ImagesScalarWhereInput)
    deleteMany?: Array<ImagesScalarWhereInput>;
}
