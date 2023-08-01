import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ImagesWhereUniqueInput } from './images-where-unique.input';
import { Type } from 'class-transformer';
import { ImagesUpdateWithoutRewardImageInput } from './images-update-without-reward-image.input';
import { ImagesCreateWithoutRewardImageInput } from './images-create-without-reward-image.input';

@InputType()
export class ImagesUpsertWithWhereUniqueWithoutRewardImageInput {

    @Field(() => ImagesWhereUniqueInput, {nullable:false})
    @Type(() => ImagesWhereUniqueInput)
    where!: Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>;

    @Field(() => ImagesUpdateWithoutRewardImageInput, {nullable:false})
    @Type(() => ImagesUpdateWithoutRewardImageInput)
    update!: ImagesUpdateWithoutRewardImageInput;

    @Field(() => ImagesCreateWithoutRewardImageInput, {nullable:false})
    @Type(() => ImagesCreateWithoutRewardImageInput)
    create!: ImagesCreateWithoutRewardImageInput;
}
