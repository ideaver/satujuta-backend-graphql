import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SchoolCreateWithoutAddressInput } from './school-create-without-address.input';
import { Type } from 'class-transformer';
import { SchoolCreateOrConnectWithoutAddressInput } from './school-create-or-connect-without-address.input';
import { Prisma } from '@prisma/client';
import { SchoolWhereUniqueInput } from './school-where-unique.input';

@InputType()
export class SchoolCreateNestedOneWithoutAddressInput {

    @Field(() => SchoolCreateWithoutAddressInput, {nullable:true})
    @Type(() => SchoolCreateWithoutAddressInput)
    create?: SchoolCreateWithoutAddressInput;

    @Field(() => SchoolCreateOrConnectWithoutAddressInput, {nullable:true})
    @Type(() => SchoolCreateOrConnectWithoutAddressInput)
    connectOrCreate?: SchoolCreateOrConnectWithoutAddressInput;

    @Field(() => SchoolWhereUniqueInput, {nullable:true})
    @Type(() => SchoolWhereUniqueInput)
    connect?: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'addressId'>;
}
