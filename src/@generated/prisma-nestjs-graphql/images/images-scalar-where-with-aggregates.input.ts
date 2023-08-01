import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { EnumFileTypeWithAggregatesFilter } from '../prisma/enum-file-type-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class ImagesScalarWhereWithAggregatesInput {

    @Field(() => [ImagesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ImagesScalarWhereWithAggregatesInput>;

    @Field(() => [ImagesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ImagesScalarWhereWithAggregatesInput>;

    @Field(() => [ImagesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ImagesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => EnumFileTypeWithAggregatesFilter, {nullable:true})
    fileType?: EnumFileTypeWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    filesize?: FloatWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    url?: StringWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    hotelImageId?: IntNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    programImageId?: IntNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    rewardImageId?: IntNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    projectImageId?: IntNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;
}
