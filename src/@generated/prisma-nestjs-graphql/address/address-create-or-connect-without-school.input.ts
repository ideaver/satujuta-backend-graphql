import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';
import { Type } from 'class-transformer';
import { AddressCreateWithoutSchoolInput } from './address-create-without-school.input';

@InputType()
export class AddressCreateOrConnectWithoutSchoolInput {

    @Field(() => AddressWhereUniqueInput, {nullable:false})
    @Type(() => AddressWhereUniqueInput)
    where!: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;

    @Field(() => AddressCreateWithoutSchoolInput, {nullable:false})
    @Type(() => AddressCreateWithoutSchoolInput)
    create!: AddressCreateWithoutSchoolInput;
}
