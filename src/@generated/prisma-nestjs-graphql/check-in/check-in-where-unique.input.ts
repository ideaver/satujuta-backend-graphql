import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CheckInWhereInput } from './check-in-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { HotelRelationFilter } from '../hotel/hotel-relation-filter.input';

@InputType()
export class CheckInWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [CheckInWhereInput], {nullable:true})
    AND?: Array<CheckInWhereInput>;

    @Field(() => [CheckInWhereInput], {nullable:true})
    OR?: Array<CheckInWhereInput>;

    @Field(() => [CheckInWhereInput], {nullable:true})
    NOT?: Array<CheckInWhereInput>;

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
