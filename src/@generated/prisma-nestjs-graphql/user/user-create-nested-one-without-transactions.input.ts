import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutTransactionsInput } from './user-create-without-transactions.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutTransactionsInput } from './user-create-or-connect-without-transactions.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutTransactionsInput {

    @Field(() => UserCreateWithoutTransactionsInput, {nullable:true})
    @Type(() => UserCreateWithoutTransactionsInput)
    create?: UserCreateWithoutTransactionsInput;

    @Field(() => UserCreateOrConnectWithoutTransactionsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutTransactionsInput)
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber'>;
}
