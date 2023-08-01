import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SchoolCreateWithoutAddressInput } from './school-create-without-address.input';
import { Type } from 'class-transformer';
import { SchoolCreateOrConnectWithoutAddressInput } from './school-create-or-connect-without-address.input';
import { SchoolUpsertWithoutAddressInput } from './school-upsert-without-address.input';
import { SchoolWhereInput } from './school-where.input';
import { Prisma } from '@prisma/client';
import { SchoolWhereUniqueInput } from './school-where-unique.input';
import { SchoolUpdateToOneWithWhereWithoutAddressInput } from './school-update-to-one-with-where-without-address.input';

@InputType()
export class SchoolUncheckedUpdateOneWithoutAddressNestedInput {

    @Field(() => SchoolCreateWithoutAddressInput, {nullable:true})
    @Type(() => SchoolCreateWithoutAddressInput)
    create?: SchoolCreateWithoutAddressInput;

    @Field(() => SchoolCreateOrConnectWithoutAddressInput, {nullable:true})
    @Type(() => SchoolCreateOrConnectWithoutAddressInput)
    connectOrCreate?: SchoolCreateOrConnectWithoutAddressInput;

    @Field(() => SchoolUpsertWithoutAddressInput, {nullable:true})
    @Type(() => SchoolUpsertWithoutAddressInput)
    upsert?: SchoolUpsertWithoutAddressInput;

    @Field(() => SchoolWhereInput, {nullable:true})
    @Type(() => SchoolWhereInput)
    disconnect?: SchoolWhereInput;

    @Field(() => SchoolWhereInput, {nullable:true})
    @Type(() => SchoolWhereInput)
    delete?: SchoolWhereInput;

    @Field(() => SchoolWhereUniqueInput, {nullable:true})
    @Type(() => SchoolWhereUniqueInput)
    connect?: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'addressId'>;

    @Field(() => SchoolUpdateToOneWithWhereWithoutAddressInput, {nullable:true})
    @Type(() => SchoolUpdateToOneWithWhereWithoutAddressInput)
    update?: SchoolUpdateToOneWithWhereWithoutAddressInput;
}
