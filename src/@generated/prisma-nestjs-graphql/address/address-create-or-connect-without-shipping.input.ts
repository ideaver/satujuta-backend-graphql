import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';
import { Type } from 'class-transformer';
import { AddressCreateWithoutShippingInput } from './address-create-without-shipping.input';

@InputType()
export class AddressCreateOrConnectWithoutShippingInput {

    @Field(() => AddressWhereUniqueInput, {nullable:false})
    @Type(() => AddressWhereUniqueInput)
    where!: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;

    @Field(() => AddressCreateWithoutShippingInput, {nullable:false})
    @Type(() => AddressCreateWithoutShippingInput)
    create!: AddressCreateWithoutShippingInput;
}
