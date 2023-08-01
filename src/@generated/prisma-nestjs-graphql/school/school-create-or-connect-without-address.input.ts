import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SchoolWhereUniqueInput } from './school-where-unique.input';
import { Type } from 'class-transformer';
import { SchoolCreateWithoutAddressInput } from './school-create-without-address.input';

@InputType()
export class SchoolCreateOrConnectWithoutAddressInput {

    @Field(() => SchoolWhereUniqueInput, {nullable:false})
    @Type(() => SchoolWhereUniqueInput)
    where!: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'addressId'>;

    @Field(() => SchoolCreateWithoutAddressInput, {nullable:false})
    @Type(() => SchoolCreateWithoutAddressInput)
    create!: SchoolCreateWithoutAddressInput;
}
