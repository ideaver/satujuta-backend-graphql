import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ImagesUpdateInput } from './images-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ImagesWhereUniqueInput } from './images-where-unique.input';

@ArgsType()
export class UpdateOneImagesArgs {

    @Field(() => ImagesUpdateInput, {nullable:false})
    @Type(() => ImagesUpdateInput)
    data!: ImagesUpdateInput;

    @Field(() => ImagesWhereUniqueInput, {nullable:false})
    @Type(() => ImagesWhereUniqueInput)
    where!: Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>;
}
