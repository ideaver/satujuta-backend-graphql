import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressCreateWithoutPostalCodeInput } from './address-create-without-postal-code.input';
import { Type } from 'class-transformer';
import { AddressCreateOrConnectWithoutPostalCodeInput } from './address-create-or-connect-without-postal-code.input';
import { AddressUpsertWithWhereUniqueWithoutPostalCodeInput } from './address-upsert-with-where-unique-without-postal-code.input';
import { AddressCreateManyPostalCodeInputEnvelope } from './address-create-many-postal-code-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';
import { AddressUpdateWithWhereUniqueWithoutPostalCodeInput } from './address-update-with-where-unique-without-postal-code.input';
import { AddressUpdateManyWithWhereWithoutPostalCodeInput } from './address-update-many-with-where-without-postal-code.input';
import { AddressScalarWhereInput } from './address-scalar-where.input';

@InputType()
export class AddressUncheckedUpdateManyWithoutPostalCodeNestedInput {

    @Field(() => [AddressCreateWithoutPostalCodeInput], {nullable:true})
    @Type(() => AddressCreateWithoutPostalCodeInput)
    create?: Array<AddressCreateWithoutPostalCodeInput>;

    @Field(() => [AddressCreateOrConnectWithoutPostalCodeInput], {nullable:true})
    @Type(() => AddressCreateOrConnectWithoutPostalCodeInput)
    connectOrCreate?: Array<AddressCreateOrConnectWithoutPostalCodeInput>;

    @Field(() => [AddressUpsertWithWhereUniqueWithoutPostalCodeInput], {nullable:true})
    @Type(() => AddressUpsertWithWhereUniqueWithoutPostalCodeInput)
    upsert?: Array<AddressUpsertWithWhereUniqueWithoutPostalCodeInput>;

    @Field(() => AddressCreateManyPostalCodeInputEnvelope, {nullable:true})
    @Type(() => AddressCreateManyPostalCodeInputEnvelope)
    createMany?: AddressCreateManyPostalCodeInputEnvelope;

    @Field(() => [AddressWhereUniqueInput], {nullable:true})
    @Type(() => AddressWhereUniqueInput)
    set?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;

    @Field(() => [AddressWhereUniqueInput], {nullable:true})
    @Type(() => AddressWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;

    @Field(() => [AddressWhereUniqueInput], {nullable:true})
    @Type(() => AddressWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;

    @Field(() => [AddressWhereUniqueInput], {nullable:true})
    @Type(() => AddressWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;

    @Field(() => [AddressUpdateWithWhereUniqueWithoutPostalCodeInput], {nullable:true})
    @Type(() => AddressUpdateWithWhereUniqueWithoutPostalCodeInput)
    update?: Array<AddressUpdateWithWhereUniqueWithoutPostalCodeInput>;

    @Field(() => [AddressUpdateManyWithWhereWithoutPostalCodeInput], {nullable:true})
    @Type(() => AddressUpdateManyWithWhereWithoutPostalCodeInput)
    updateMany?: Array<AddressUpdateManyWithWhereWithoutPostalCodeInput>;

    @Field(() => [AddressScalarWhereInput], {nullable:true})
    @Type(() => AddressScalarWhereInput)
    deleteMany?: Array<AddressScalarWhereInput>;
}
