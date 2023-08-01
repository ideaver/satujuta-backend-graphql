import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressCreateWithoutSchoolInput } from './address-create-without-school.input';
import { Type } from 'class-transformer';
import { AddressCreateOrConnectWithoutSchoolInput } from './address-create-or-connect-without-school.input';
import { AddressUpsertWithoutSchoolInput } from './address-upsert-without-school.input';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';
import { AddressUpdateToOneWithWhereWithoutSchoolInput } from './address-update-to-one-with-where-without-school.input';

@InputType()
export class AddressUpdateOneRequiredWithoutSchoolNestedInput {

    @Field(() => AddressCreateWithoutSchoolInput, {nullable:true})
    @Type(() => AddressCreateWithoutSchoolInput)
    create?: AddressCreateWithoutSchoolInput;

    @Field(() => AddressCreateOrConnectWithoutSchoolInput, {nullable:true})
    @Type(() => AddressCreateOrConnectWithoutSchoolInput)
    connectOrCreate?: AddressCreateOrConnectWithoutSchoolInput;

    @Field(() => AddressUpsertWithoutSchoolInput, {nullable:true})
    @Type(() => AddressUpsertWithoutSchoolInput)
    upsert?: AddressUpsertWithoutSchoolInput;

    @Field(() => AddressWhereUniqueInput, {nullable:true})
    @Type(() => AddressWhereUniqueInput)
    connect?: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;

    @Field(() => AddressUpdateToOneWithWhereWithoutSchoolInput, {nullable:true})
    @Type(() => AddressUpdateToOneWithWhereWithoutSchoolInput)
    update?: AddressUpdateToOneWithWhereWithoutSchoolInput;
}
