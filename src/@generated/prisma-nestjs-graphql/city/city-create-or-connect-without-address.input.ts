import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CityWhereUniqueInput } from './city-where-unique.input';
import { Type } from 'class-transformer';
import { CityCreateWithoutAddressInput } from './city-create-without-address.input';

@InputType()
export class CityCreateOrConnectWithoutAddressInput {

    @Field(() => CityWhereUniqueInput, {nullable:false})
    @Type(() => CityWhereUniqueInput)
    where!: Prisma.AtLeast<CityWhereUniqueInput, 'id'>;

    @Field(() => CityCreateWithoutAddressInput, {nullable:false})
    @Type(() => CityCreateWithoutAddressInput)
    create!: CityCreateWithoutAddressInput;
}
