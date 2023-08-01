import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { Float } from '@nestjs/graphql';
import { ImagesUncheckedCreateNestedManyWithoutHotelImageInput } from '../images/images-unchecked-create-nested-many-without-hotel-image.input';
import { CheckInUncheckedCreateNestedManyWithoutHotelInput } from '../check-in/check-in-unchecked-create-nested-many-without-hotel.input';

@InputType()
export class HotelUncheckedCreateWithoutAddressInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => String, {nullable:false})
    createdById!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ImagesUncheckedCreateNestedManyWithoutHotelImageInput, {nullable:true})
    images?: ImagesUncheckedCreateNestedManyWithoutHotelImageInput;

    @Field(() => CheckInUncheckedCreateNestedManyWithoutHotelInput, {nullable:true})
    checkIns?: CheckInUncheckedCreateNestedManyWithoutHotelInput;
}
