import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class HotelScalarWhereInput {

    @Field(() => [HotelScalarWhereInput], {nullable:true})
    AND?: Array<HotelScalarWhereInput>;

    @Field(() => [HotelScalarWhereInput], {nullable:true})
    OR?: Array<HotelScalarWhereInput>;

    @Field(() => [HotelScalarWhereInput], {nullable:true})
    NOT?: Array<HotelScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    addressId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    rating?: FloatFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    startDate?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    quota?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    createdById?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
