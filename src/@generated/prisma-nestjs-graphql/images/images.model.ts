import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { FileType } from '../prisma/file-type.enum';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Hotel } from '../hotel/hotel.model';
import { Program } from '../program/program.model';
import { Reward } from '../reward/reward.model';
import { Project } from '../project/project.model';

@ObjectType()
export class Images {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => FileType, {nullable:false})
    fileType!: keyof typeof FileType;

    @Field(() => Float, {nullable:false})
    filesize!: number;

    @Field(() => String, {nullable:false})
    url!: string;

    @Field(() => Int, {nullable:true})
    hotelImageId!: number | null;

    @Field(() => Int, {nullable:true})
    programImageId!: number | null;

    @Field(() => Int, {nullable:true})
    rewardImageId!: number | null;

    @Field(() => Int, {nullable:true})
    projectImageId!: number | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Hotel, {nullable:true})
    hotelImage?: Hotel | null;

    @Field(() => Program, {nullable:true})
    programImage?: Program | null;

    @Field(() => Reward, {nullable:true})
    rewardImage?: Reward | null;

    @Field(() => Project, {nullable:true})
    projectImage?: Project | null;
}
