import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';
import { Type } from 'class-transformer';
import { AddressUpdateWithoutPostalCodeInput } from './address-update-without-postal-code.input';

@InputType()
export class AddressUpdateWithWhereUniqueWithoutPostalCodeInput {

    @Field(() => AddressWhereUniqueInput, {nullable:false})
    @Type(() => AddressWhereUniqueInput)
    where!: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;

    @Field(() => AddressUpdateWithoutPostalCodeInput, {nullable:false})
    @Type(() => AddressUpdateWithoutPostalCodeInput)
    data!: AddressUpdateWithoutPostalCodeInput;
}
