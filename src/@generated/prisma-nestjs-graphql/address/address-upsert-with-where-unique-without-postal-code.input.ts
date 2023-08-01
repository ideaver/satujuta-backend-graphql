import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';
import { Type } from 'class-transformer';
import { AddressUpdateWithoutPostalCodeInput } from './address-update-without-postal-code.input';
import { AddressCreateWithoutPostalCodeInput } from './address-create-without-postal-code.input';

@InputType()
export class AddressUpsertWithWhereUniqueWithoutPostalCodeInput {

    @Field(() => AddressWhereUniqueInput, {nullable:false})
    @Type(() => AddressWhereUniqueInput)
    where!: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;

    @Field(() => AddressUpdateWithoutPostalCodeInput, {nullable:false})
    @Type(() => AddressUpdateWithoutPostalCodeInput)
    update!: AddressUpdateWithoutPostalCodeInput;

    @Field(() => AddressCreateWithoutPostalCodeInput, {nullable:false})
    @Type(() => AddressCreateWithoutPostalCodeInput)
    create!: AddressCreateWithoutPostalCodeInput;
}
