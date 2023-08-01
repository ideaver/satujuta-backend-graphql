import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';
import { Type } from 'class-transformer';
import { AddressUpdateWithoutCityInput } from './address-update-without-city.input';

@InputType()
export class AddressUpdateWithWhereUniqueWithoutCityInput {

    @Field(() => AddressWhereUniqueInput, {nullable:false})
    @Type(() => AddressWhereUniqueInput)
    where!: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;

    @Field(() => AddressUpdateWithoutCityInput, {nullable:false})
    @Type(() => AddressUpdateWithoutCityInput)
    data!: AddressUpdateWithoutCityInput;
}
