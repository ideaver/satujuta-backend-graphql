import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { HotelRelationFilter } from '../hotel/hotel-relation-filter.input';

@InputType()
export class CheckInWhereInput {

    @Field(() => [CheckInWhereInput], {nullable:true})
    AND?: Array<CheckInWhereInput>;

    @Field(() => [CheckInWhereInput], {nullable:true})
    OR?: Array<CheckInWhereInput>;

    @Field(() => [CheckInWhereInput], {nullable:true})
    NOT?: Array<CheckInWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    hotelId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    checkInAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => HotelRelationFilter, {nullable:true})
    hotel?: HotelRelationFilter;
}
