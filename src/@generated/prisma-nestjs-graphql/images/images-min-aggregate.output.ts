import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { FileType } from '../prisma/file-type.enum';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ImagesMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => FileType, {nullable:true})
    fileType?: keyof typeof FileType;

    @Field(() => Float, {nullable:true})
    filesize?: number;

    @Field(() => String, {nullable:true})
    url?: string;

    @Field(() => Int, {nullable:true})
    hotelImageId?: number;

    @Field(() => Int, {nullable:true})
    programImageId?: number;

    @Field(() => Int, {nullable:true})
    rewardImageId?: number;

    @Field(() => Int, {nullable:true})
    projectImageId?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
