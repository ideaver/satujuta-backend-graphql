import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ImagesWhereUniqueInput } from './images-where-unique.input';
import { Type } from 'class-transformer';
import { ImagesCreateWithoutProgramImageInput } from './images-create-without-program-image.input';

@InputType()
export class ImagesCreateOrConnectWithoutProgramImageInput {

    @Field(() => ImagesWhereUniqueInput, {nullable:false})
    @Type(() => ImagesWhereUniqueInput)
    where!: Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>;

    @Field(() => ImagesCreateWithoutProgramImageInput, {nullable:false})
    @Type(() => ImagesCreateWithoutProgramImageInput)
    create!: ImagesCreateWithoutProgramImageInput;
}
