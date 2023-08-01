import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImagesCreateWithoutRewardImageInput } from './images-create-without-reward-image.input';
import { Type } from 'class-transformer';
import { ImagesCreateOrConnectWithoutRewardImageInput } from './images-create-or-connect-without-reward-image.input';
import { ImagesCreateManyRewardImageInputEnvelope } from './images-create-many-reward-image-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ImagesWhereUniqueInput } from './images-where-unique.input';

@InputType()
export class ImagesCreateNestedManyWithoutRewardImageInput {

    @Field(() => [ImagesCreateWithoutRewardImageInput], {nullable:true})
    @Type(() => ImagesCreateWithoutRewardImageInput)
    create?: Array<ImagesCreateWithoutRewardImageInput>;

    @Field(() => [ImagesCreateOrConnectWithoutRewardImageInput], {nullable:true})
    @Type(() => ImagesCreateOrConnectWithoutRewardImageInput)
    connectOrCreate?: Array<ImagesCreateOrConnectWithoutRewardImageInput>;

    @Field(() => ImagesCreateManyRewardImageInputEnvelope, {nullable:true})
    @Type(() => ImagesCreateManyRewardImageInputEnvelope)
    createMany?: ImagesCreateManyRewardImageInputEnvelope;

    @Field(() => [ImagesWhereUniqueInput], {nullable:true})
    @Type(() => ImagesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
}
