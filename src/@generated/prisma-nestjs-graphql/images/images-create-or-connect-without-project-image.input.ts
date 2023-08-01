import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ImagesWhereUniqueInput } from './images-where-unique.input';
import { Type } from 'class-transformer';
import { ImagesCreateWithoutProjectImageInput } from './images-create-without-project-image.input';

@InputType()
export class ImagesCreateOrConnectWithoutProjectImageInput {

    @Field(() => ImagesWhereUniqueInput, {nullable:false})
    @Type(() => ImagesWhereUniqueInput)
    where!: Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>;

    @Field(() => ImagesCreateWithoutProjectImageInput, {nullable:false})
    @Type(() => ImagesCreateWithoutProjectImageInput)
    create!: ImagesCreateWithoutProjectImageInput;
}
