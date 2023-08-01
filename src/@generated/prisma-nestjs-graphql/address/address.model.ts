import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { City } from '../city/city.model';
import { District } from '../district/district.model';
import { PostalCode } from '../postal-code/postal-code.model';
import { User } from '../user/user.model';
import { Hotel } from '../hotel/hotel.model';
import { School } from '../school/school.model';
import { Shipping } from '../shipping/shipping.model';

@ObjectType()
export class Address {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:false})
    cityId!: number;

    @Field(() => Int, {nullable:false})
    districtId!: number;

    @Field(() => Int, {nullable:false})
    postalCodeId!: number;

    @Field(() => City, {nullable:false})
    city?: City;

    @Field(() => District, {nullable:false})
    district?: District;

    @Field(() => PostalCode, {nullable:false})
    postalCode?: PostalCode;

    @Field(() => User, {nullable:true})
    user?: User | null;

    @Field(() => Hotel, {nullable:true})
    hotel?: Hotel | null;

    @Field(() => School, {nullable:true})
    school?: School | null;

    @Field(() => Shipping, {nullable:true})
    Shipping?: Shipping | null;
}
