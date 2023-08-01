import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutAddressInput } from './user-create-without-address.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutAddressInput } from './user-create-or-connect-without-address.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserUncheckedCreateNestedOneWithoutAddressInput {

    @Field(() => UserCreateWithoutAddressInput, {nullable:true})
    @Type(() => UserCreateWithoutAddressInput)
    create?: UserCreateWithoutAddressInput;

    @Field(() => UserCreateOrConnectWithoutAddressInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutAddressInput)
    connectOrCreate?: UserCreateOrConnectWithoutAddressInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber'>;
}
