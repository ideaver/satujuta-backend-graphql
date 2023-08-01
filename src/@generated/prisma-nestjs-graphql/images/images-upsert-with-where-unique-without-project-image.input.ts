import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ImagesWhereUniqueInput } from './images-where-unique.input';
import { Type } from 'class-transformer';
import { ImagesUpdateWithoutProjectImageInput } from './images-update-without-project-image.input';
import { ImagesCreateWithoutProjectImageInput } from './images-create-without-project-image.input';

@InputType()
export class ImagesUpsertWithWhereUniqueWithoutProjectImageInput {

    @Field(() => ImagesWhereUniqueInput, {nullable:false})
    @Type(() => ImagesWhereUniqueInput)
    where!: Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>;

    @Field(() => ImagesUpdateWithoutProjectImageInput, {nullable:false})
    @Type(() => ImagesUpdateWithoutProjectImageInput)
    update!: ImagesUpdateWithoutProjectImageInput;

    @Field(() => ImagesCreateWithoutProjectImageInput, {nullable:false})
    @Type(() => ImagesCreateWithoutProjectImageInput)
    create!: ImagesCreateWithoutProjectImageInput;
}
