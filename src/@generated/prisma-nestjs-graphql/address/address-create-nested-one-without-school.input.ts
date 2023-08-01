import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressCreateWithoutSchoolInput } from './address-create-without-school.input';
import { Type } from 'class-transformer';
import { AddressCreateOrConnectWithoutSchoolInput } from './address-create-or-connect-without-school.input';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';

@InputType()
export class AddressCreateNestedOneWithoutSchoolInput {

    @Field(() => AddressCreateWithoutSchoolInput, {nullable:true})
    @Type(() => AddressCreateWithoutSchoolInput)
    create?: AddressCreateWithoutSchoolInput;

    @Field(() => AddressCreateOrConnectWithoutSchoolInput, {nullable:true})
    @Type(() => AddressCreateOrConnectWithoutSchoolInput)
    connectOrCreate?: AddressCreateOrConnectWithoutSchoolInput;

    @Field(() => AddressWhereUniqueInput, {nullable:true})
    @Type(() => AddressWhereUniqueInput)
    connect?: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
}
