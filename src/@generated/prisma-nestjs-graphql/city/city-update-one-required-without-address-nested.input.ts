import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CityCreateWithoutAddressInput } from './city-create-without-address.input';
import { Type } from 'class-transformer';
import { CityCreateOrConnectWithoutAddressInput } from './city-create-or-connect-without-address.input';
import { CityUpsertWithoutAddressInput } from './city-upsert-without-address.input';
import { Prisma } from '@prisma/client';
import { CityWhereUniqueInput } from './city-where-unique.input';
import { CityUpdateToOneWithWhereWithoutAddressInput } from './city-update-to-one-with-where-without-address.input';

@InputType()
export class CityUpdateOneRequiredWithoutAddressNestedInput {

    @Field(() => CityCreateWithoutAddressInput, {nullable:true})
    @Type(() => CityCreateWithoutAddressInput)
    create?: CityCreateWithoutAddressInput;

    @Field(() => CityCreateOrConnectWithoutAddressInput, {nullable:true})
    @Type(() => CityCreateOrConnectWithoutAddressInput)
    connectOrCreate?: CityCreateOrConnectWithoutAddressInput;

    @Field(() => CityUpsertWithoutAddressInput, {nullable:true})
    @Type(() => CityUpsertWithoutAddressInput)
    upsert?: CityUpsertWithoutAddressInput;

    @Field(() => CityWhereUniqueInput, {nullable:true})
    @Type(() => CityWhereUniqueInput)
    connect?: Prisma.AtLeast<CityWhereUniqueInput, 'id'>;

    @Field(() => CityUpdateToOneWithWhereWithoutAddressInput, {nullable:true})
    @Type(() => CityUpdateToOneWithWhereWithoutAddressInput)
    update?: CityUpdateToOneWithWhereWithoutAddressInput;
}
