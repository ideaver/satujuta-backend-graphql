import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';
import { Type } from 'class-transformer';
import { AddressCreateWithoutPostalCodeInput } from './address-create-without-postal-code.input';

@InputType()
export class AddressCreateOrConnectWithoutPostalCodeInput {

    @Field(() => AddressWhereUniqueInput, {nullable:false})
    @Type(() => AddressWhereUniqueInput)
    where!: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;

    @Field(() => AddressCreateWithoutPostalCodeInput, {nullable:false})
    @Type(() => AddressCreateWithoutPostalCodeInput)
    create!: AddressCreateWithoutPostalCodeInput;
}
