import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumFileTypeFilter } from '../prisma/enum-file-type-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ImagesScalarWhereInput {

    @Field(() => [ImagesScalarWhereInput], {nullable:true})
    AND?: Array<ImagesScalarWhereInput>;

    @Field(() => [ImagesScalarWhereInput], {nullable:true})
    OR?: Array<ImagesScalarWhereInput>;

    @Field(() => [ImagesScalarWhereInput], {nullable:true})
    NOT?: Array<ImagesScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

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
}
