import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ImagesWhereUniqueInput } from './images-where-unique.input';
import { Type } from 'class-transformer';
import { ImagesUpdateWithoutProgramImageInput } from './images-update-without-program-image.input';
import { ImagesCreateWithoutProgramImageInput } from './images-create-without-program-image.input';

@InputType()
export class ImagesUpsertWithWhereUniqueWithoutProgramImageInput {

    @Field(() => ImagesWhereUniqueInput, {nullable:false})
    @Type(() => ImagesWhereUniqueInput)
    where!: Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>;

    @Field(() => ImagesUpdateWithoutProgramImageInput, {nullable:false})
    @Type(() => ImagesUpdateWithoutProgramImageInput)
    update!: ImagesUpdateWithoutProgramImageInput;

    @Field(() => ImagesCreateWithoutProgramImageInput, {nullable:false})
    @Type(() => ImagesCreateWithoutProgramImageInput)
    create!: ImagesCreateWithoutProgramImageInput;
}
