import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressCreateWithoutPostalCodeInput } from './address-create-without-postal-code.input';
import { Type } from 'class-transformer';
import { AddressCreateOrConnectWithoutPostalCodeInput } from './address-create-or-connect-without-postal-code.input';
import { AddressCreateManyPostalCodeInputEnvelope } from './address-create-many-postal-code-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';

@InputType()
export class AddressUncheckedCreateNestedManyWithoutPostalCodeInput {

    @Field(() => [AddressCreateWithoutPostalCodeInput], {nullable:true})
    @Type(() => AddressCreateWithoutPostalCodeInput)
    create?: Array<AddressCreateWithoutPostalCodeInput>;

    @Field(() => [AddressCreateOrConnectWithoutPostalCodeInput], {nullable:true})
    @Type(() => AddressCreateOrConnectWithoutPostalCodeInput)
    connectOrCreate?: Array<AddressCreateOrConnectWithoutPostalCodeInput>;

    @Field(() => AddressCreateManyPostalCodeInputEnvelope, {nullable:true})
    @Type(() => AddressCreateManyPostalCodeInputEnvelope)
    createMany?: AddressCreateManyPostalCodeInputEnvelope;

    @Field(() => [AddressWhereUniqueInput], {nullable:true})
    @Type(() => AddressWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;
}
