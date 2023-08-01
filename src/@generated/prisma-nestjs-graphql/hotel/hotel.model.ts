import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Address } from '../address/address.model';
import { Images } from '../images/images.model';
import { CheckIn } from '../check-in/check-in.model';
import { User } from '../user/user.model';
import { HotelCount } from './hotel-count.output';

@ObjectType()
export class Hotel {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:false})
    addressId!: number;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Float, {nullable:false})
    rating!: number;

    @Field(() => Date, {nullable:false})
    startDate!: Date;

    @Field(() => Int, {nullable:false})
    quota!: number;

    @Field(() => String, {nullable:false})
    createdById!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Address, {nullable:false})
    address?: Address;

    @Field(() => [Images], {nullable:true})
    images?: Array<Images>;

    @Field(() => [CheckIn], {nullable:true})
    checkIns?: Array<CheckIn>;

    @Field(() => User, {nullable:false})
    createdBy?: User;

    @Field(() => HotelCount, {nullable:false})
    _count?: HotelCount;
}
