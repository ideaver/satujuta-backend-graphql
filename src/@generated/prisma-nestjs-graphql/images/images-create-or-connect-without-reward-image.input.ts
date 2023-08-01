import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ImagesWhereUniqueInput } from './images-where-unique.input';
import { Type } from 'class-transformer';
import { ImagesCreateWithoutRewardImageInput } from './images-create-without-reward-image.input';

@InputType()
export class ImagesCreateOrConnectWithoutRewardImageInput {

    @Field(() => ImagesWhereUniqueInput, {nullable:false})
    @Type(() => ImagesWhereUniqueInput)
    where!: Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>;

    @Field(() => ImagesCreateWithoutRewardImageInput, {nullable:false})
    @Type(() => ImagesCreateWithoutRewardImageInput)
    create!: ImagesCreateWithoutRewardImageInput;
}
