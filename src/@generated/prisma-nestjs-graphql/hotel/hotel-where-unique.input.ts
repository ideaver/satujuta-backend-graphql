import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HotelWhereInput } from './hotel-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { AddressRelationFilter } from '../address/address-relation-filter.input';
import { ImagesListRelationFilter } from '../images/images-list-relation-filter.input';
import { CheckInListRelationFilter } from '../check-in/check-in-list-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class HotelWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    addressId?: number;

    @Field(() => [HotelWhereInput], {nullable:true})
    AND?: Array<HotelWhereInput>;

    @Field(() => [HotelWhereInput], {nullable:true})
    OR?: Array<HotelWhereInput>;

    @Field(() => [HotelWhereInput], {nullable:true})
    NOT?: Array<HotelWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

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

    @Field(() => AddressRelationFilter, {nullable:true})
    address?: AddressRelationFilter;

    @Field(() => ImagesListRelationFilter, {nullable:true})
    images?: ImagesListRelationFilter;

    @Field(() => CheckInListRelationFilter, {nullable:true})
    checkIns?: CheckInListRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    createdBy?: UserRelationFilter;
}
