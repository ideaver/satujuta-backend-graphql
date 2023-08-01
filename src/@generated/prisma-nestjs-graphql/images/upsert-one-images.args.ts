import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ImagesWhereUniqueInput } from './images-where-unique.input';
import { Type } from 'class-transformer';
import { ImagesCreateInput } from './images-create.input';
import { ImagesUpdateInput } from './images-update.input';

@ArgsType()
export class UpsertOneImagesArgs {

    @Field(() => ImagesWhereUniqueInput, {nullable:false})
    @Type(() => ImagesWhereUniqueInput)
    where!: Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>;

    @Field(() => ImagesCreateInput, {nullable:false})
    @Type(() => ImagesCreateInput)
    create!: ImagesCreateInput;

    @Field(() => ImagesUpdateInput, {nullable:false})
    @Type(() => ImagesUpdateInput)
    update!: ImagesUpdateInput;
}
