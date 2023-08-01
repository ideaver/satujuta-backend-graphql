import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { FileType } from '../prisma/file-type.enum';
import { Float } from '@nestjs/graphql';

@InputType()
export class ImagesUncheckedCreateWithoutProjectImageInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => FileType, {nullable:false})
    fileType!: keyof typeof FileType;

    @Field(() => Float, {nullable:false})
    filesize!: number;

    @Field(() => String, {nullable:false})
    url!: string;

    @Field(() => Int, {nullable:true})
    hotelImageId?: number;

    @Field(() => Int, {nullable:true})
    programImageId?: number;

    @Field(() => Int, {nullable:true})
    rewardImageId?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
