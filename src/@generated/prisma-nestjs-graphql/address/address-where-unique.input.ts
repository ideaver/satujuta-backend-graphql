import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AddressWhereInput } from './address-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { CityRelationFilter } from '../city/city-relation-filter.input';
import { DistrictRelationFilter } from '../district/district-relation-filter.input';
import { PostalCodeRelationFilter } from '../postal-code/postal-code-relation-filter.input';
import { UserNullableRelationFilter } from '../user/user-nullable-relation-filter.input';
import { HotelNullableRelationFilter } from '../hotel/hotel-nullable-relation-filter.input';
import { SchoolNullableRelationFilter } from '../school/school-nullable-relation-filter.input';
import { ShippingNullableRelationFilter } from '../shipping/shipping-nullable-relation-filter.input';

@InputType()
export class AddressWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [AddressWhereInput], {nullable:true})
    AND?: Array<AddressWhereInput>;

    @Field(() => [AddressWhereInput], {nullable:true})
    OR?: Array<AddressWhereInput>;

    @Field(() => [AddressWhereInput], {nullable:true})
    NOT?: Array<AddressWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    cityId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    districtId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    postalCodeId?: IntFilter;

    @Field(() => CityRelationFilter, {nullable:true})
    city?: CityRelationFilter;

    @Field(() => DistrictRelationFilter, {nullable:true})
    district?: DistrictRelationFilter;

    @Field(() => PostalCodeRelationFilter, {nullable:true})
    postalCode?: PostalCodeRelationFilter;

    @Field(() => UserNullableRelationFilter, {nullable:true})
    user?: UserNullableRelationFilter;

    @Field(() => HotelNullableRelationFilter, {nullable:true})
    hotel?: HotelNullableRelationFilter;

    @Field(() => SchoolNullableRelationFilter, {nullable:true})
    school?: SchoolNullableRelationFilter;

    @Field(() => ShippingNullableRelationFilter, {nullable:true})
    Shipping?: ShippingNullableRelationFilter;
}
