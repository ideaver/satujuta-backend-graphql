import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AddressCreateNestedOneWithoutHotelInput } from '../address/address-create-nested-one-without-hotel.input';
import { CheckInCreateNestedManyWithoutHotelInput } from '../check-in/check-in-create-nested-many-without-hotel.input';
import { UserCreateNestedOneWithoutHotelsCreatedInput } from '../user/user-create-nested-one-without-hotels-created.input';

@InputType()
export class HotelCreateWithoutImagesInput {

    @Field(() => String, {nullable:false})
    @Validator.MinLength(2)
    @Validator.MaxLength(20)
    @Validator.IsAlphanumeric()
    name!: string;

    @Field(() => String, {nullable:false})
    @Validator.MinLength(10)
    @Validator.IsNotEmpty()
    description!: string;

    @Field(() => Float, {nullable:false})
    @Validator.IsNumber()
    @Validator.IsNotEmpty()
    rating!: number;

    @Field(() => Date, {nullable:false})
    @Validator.IsDate()
    @Validator.IsNotEmpty()
    startDate!: Date | string;

    @Field(() => Int, {nullable:false})
    @Validator.IsNumber()
    @Validator.IsNotEmpty()
    quota!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => AddressCreateNestedOneWithoutHotelInput, {nullable:false})
    address!: AddressCreateNestedOneWithoutHotelInput;

    @Field(() => CheckInCreateNestedManyWithoutHotelInput, {nullable:true})
    checkIns?: CheckInCreateNestedManyWithoutHotelInput;

    @Field(() => UserCreateNestedOneWithoutHotelsCreatedInput, {nullable:false})
    createdBy!: UserCreateNestedOneWithoutHotelsCreatedInput;
}
