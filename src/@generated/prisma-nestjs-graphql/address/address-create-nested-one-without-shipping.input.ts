import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressCreateWithoutShippingInput } from './address-create-without-shipping.input';
import { Type } from 'class-transformer';
import { AddressCreateOrConnectWithoutShippingInput } from './address-create-or-connect-without-shipping.input';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';

@InputType()
export class AddressCreateNestedOneWithoutShippingInput {

    @Field(() => AddressCreateWithoutShippingInput, {nullable:true})
    @Type(() => AddressCreateWithoutShippingInput)
    create?: AddressCreateWithoutShippingInput;

    @Field(() => AddressCreateOrConnectWithoutShippingInput, {nullable:true})
    @Type(() => AddressCreateOrConnectWithoutShippingInput)
    connectOrCreate?: AddressCreateOrConnectWithoutShippingInput;

    @Field(() => AddressWhereUniqueInput, {nullable:true})
    @Type(() => AddressWhereUniqueInput)
    connect?: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
}
