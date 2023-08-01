import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ImagesWhereInput } from './images-where.input';
import { EnumFileTypeFilter } from '../prisma/enum-file-type-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HotelNullableRelationFilter } from '../hotel/hotel-nullable-relation-filter.input';
import { ProgramNullableRelationFilter } from '../program/program-nullable-relation-filter.input';
import { RewardNullableRelationFilter } from '../reward/reward-nullable-relation-filter.input';
import { ProjectNullableRelationFilter } from '../project/project-nullable-relation-filter.input';

@InputType()
export class ImagesWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [ImagesWhereInput], {nullable:true})
    AND?: Array<ImagesWhereInput>;

    @Field(() => [ImagesWhereInput], {nullable:true})
    OR?: Array<ImagesWhereInput>;

    @Field(() => [ImagesWhereInput], {nullable:true})
    NOT?: Array<ImagesWhereInput>;

    @Field(() => EnumFileTypeFilter, {nullable:true})
    fileType?: EnumFileTypeFilter;

    @Field(() => FloatFilter, {nullable:true})
    filesize?: FloatFilter;

    @Field(() => StringFilter, {nullable:true})
    url?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    hotelImageId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    programImageId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    rewardImageId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    projectImageId?: IntNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => HotelNullableRelationFilter, {nullable:true})
    hotelImage?: HotelNullableRelationFilter;

    @Field(() => ProgramNullableRelationFilter, {nullable:true})
    programImage?: ProgramNullableRelationFilter;

    @Field(() => RewardNullableRelationFilter, {nullable:true})
    rewardImage?: RewardNullableRelationFilter;

    @Field(() => ProjectNullableRelationFilter, {nullable:true})
    projectImage?: ProjectNullableRelationFilter;
}
