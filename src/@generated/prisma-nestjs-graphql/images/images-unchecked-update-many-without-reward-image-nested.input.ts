import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImagesCreateWithoutRewardImageInput } from './images-create-without-reward-image.input';
import { Type } from 'class-transformer';
import { ImagesCreateOrConnectWithoutRewardImageInput } from './images-create-or-connect-without-reward-image.input';
import { ImagesUpsertWithWhereUniqueWithoutRewardImageInput } from './images-upsert-with-where-unique-without-reward-image.input';
import { ImagesCreateManyRewardImageInputEnvelope } from './images-create-many-reward-image-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ImagesWhereUniqueInput } from './images-where-unique.input';
import { ImagesUpdateWithWhereUniqueWithoutRewardImageInput } from './images-update-with-where-unique-without-reward-image.input';
import { ImagesUpdateManyWithWhereWithoutRewardImageInput } from './images-update-many-with-where-without-reward-image.input';
import { ImagesScalarWhereInput } from './images-scalar-where.input';

@InputType()
export class ImagesUncheckedUpdateManyWithoutRewardImageNestedInput {

    @Field(() => [ImagesCreateWithoutRewardImageInput], {nullable:true})
    @Type(() => ImagesCreateWithoutRewardImageInput)
    create?: Array<ImagesCreateWithoutRewardImageInput>;

    @Field(() => [ImagesCreateOrConnectWithoutRewardImageInput], {nullable:true})
    @Type(() => ImagesCreateOrConnectWithoutRewardImageInput)
    connectOrCreate?: Array<ImagesCreateOrConnectWithoutRewardImageInput>;

    @Field(() => [ImagesUpsertWithWhereUniqueWithoutRewardImageInput], {nullable:true})
    @Type(() => ImagesUpsertWithWhereUniqueWithoutRewardImageInput)
    upsert?: Array<ImagesUpsertWithWhereUniqueWithoutRewardImageInput>;

    @Field(() => ImagesCreateManyRewardImageInputEnvelope, {nullable:true})
    @Type(() => ImagesCreateManyRewardImageInputEnvelope)
    createMany?: ImagesCreateManyRewardImageInputEnvelope;

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

    @Field(() => [ImagesUpdateWithWhereUniqueWithoutRewardImageInput], {nullable:true})
    @Type(() => ImagesUpdateWithWhereUniqueWithoutRewardImageInput)
    update?: Array<ImagesUpdateWithWhereUniqueWithoutRewardImageInput>;

    @Field(() => [ImagesUpdateManyWithWhereWithoutRewardImageInput], {nullable:true})
    @Type(() => ImagesUpdateManyWithWhereWithoutRewardImageInput)
    updateMany?: Array<ImagesUpdateManyWithWhereWithoutRewardImageInput>;

    @Field(() => [ImagesScalarWhereInput], {nullable:true})
    @Type(() => ImagesScalarWhereInput)
    deleteMany?: Array<ImagesScalarWhereInput>;
}
