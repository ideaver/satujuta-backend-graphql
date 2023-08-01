import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutAccountsInput } from './user-create-without-accounts.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutAccountsInput } from './user-create-or-connect-without-accounts.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutAccountsInput {

    @Field(() => UserCreateWithoutAccountsInput, {nullable:true})
    @Type(() => UserCreateWithoutAccountsInput)
    create?: UserCreateWithoutAccountsInput;

    @Field(() => UserCreateOrConnectWithoutAccountsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutAccountsInput)
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber'>;
}
