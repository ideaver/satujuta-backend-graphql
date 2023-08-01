import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';
import { Type } from 'class-transformer';
import { AddressCreateWithoutCityInput } from './address-create-without-city.input';

@InputType()
export class AddressCreateOrConnectWithoutCityInput {

    @Field(() => AddressWhereUniqueInput, {nullable:false})
    @Type(() => AddressWhereUniqueInput)
    where!: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;

    @Field(() => AddressCreateWithoutCityInput, {nullable:false})
    @Type(() => AddressCreateWithoutCityInput)
    create!: AddressCreateWithoutCityInput;
}
