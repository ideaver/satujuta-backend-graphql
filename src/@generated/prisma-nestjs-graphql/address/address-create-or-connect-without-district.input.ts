import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';
import { Type } from 'class-transformer';
import { AddressCreateWithoutDistrictInput } from './address-create-without-district.input';

@InputType()
export class AddressCreateOrConnectWithoutDistrictInput {

    @Field(() => AddressWhereUniqueInput, {nullable:false})
    @Type(() => AddressWhereUniqueInput)
    where!: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;

    @Field(() => AddressCreateWithoutDistrictInput, {nullable:false})
    @Type(() => AddressCreateWithoutDistrictInput)
    create!: AddressCreateWithoutDistrictInput;
}
