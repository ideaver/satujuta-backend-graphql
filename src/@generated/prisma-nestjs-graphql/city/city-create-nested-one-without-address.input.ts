import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CityCreateWithoutAddressInput } from './city-create-without-address.input';
import { Type } from 'class-transformer';
import { CityCreateOrConnectWithoutAddressInput } from './city-create-or-connect-without-address.input';
import { Prisma } from '@prisma/client';
import { CityWhereUniqueInput } from './city-where-unique.input';

@InputType()
export class CityCreateNestedOneWithoutAddressInput {

    @Field(() => CityCreateWithoutAddressInput, {nullable:true})
    @Type(() => CityCreateWithoutAddressInput)
    create?: CityCreateWithoutAddressInput;

    @Field(() => CityCreateOrConnectWithoutAddressInput, {nullable:true})
    @Type(() => CityCreateOrConnectWithoutAddressInput)
    connectOrCreate?: CityCreateOrConnectWithoutAddressInput;

    @Field(() => CityWhereUniqueInput, {nullable:true})
    @Type(() => CityWhereUniqueInput)
    connect?: Prisma.AtLeast<CityWhereUniqueInput, 'id'>;
}
