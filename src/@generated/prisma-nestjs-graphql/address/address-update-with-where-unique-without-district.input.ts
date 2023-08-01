import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';
import { Type } from 'class-transformer';
import { AddressUpdateWithoutDistrictInput } from './address-update-without-district.input';

@InputType()
export class AddressUpdateWithWhereUniqueWithoutDistrictInput {

    @Field(() => AddressWhereUniqueInput, {nullable:false})
    @Type(() => AddressWhereUniqueInput)
    where!: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;

    @Field(() => AddressUpdateWithoutDistrictInput, {nullable:false})
    @Type(() => AddressUpdateWithoutDistrictInput)
    data!: AddressUpdateWithoutDistrictInput;
}
