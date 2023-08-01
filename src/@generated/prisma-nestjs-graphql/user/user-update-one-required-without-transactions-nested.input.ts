import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutTransactionsInput } from './user-create-without-transactions.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutTransactionsInput } from './user-create-or-connect-without-transactions.input';
import { UserUpsertWithoutTransactionsInput } from './user-upsert-without-transactions.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutTransactionsInput } from './user-update-to-one-with-where-without-transactions.input';

@InputType()
export class UserUpdateOneRequiredWithoutTransactionsNestedInput {

    @Field(() => UserCreateWithoutTransactionsInput, {nullable:true})
    @Type(() => UserCreateWithoutTransactionsInput)
    create?: UserCreateWithoutTransactionsInput;

    @Field(() => UserCreateOrConnectWithoutTransactionsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutTransactionsInput)
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput;

    @Field(() => UserUpsertWithoutTransactionsInput, {nullable:true})
    @Type(() => UserUpsertWithoutTransactionsInput)
    upsert?: UserUpsertWithoutTransactionsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber'>;

    @Field(() => UserUpdateToOneWithWhereWithoutTransactionsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutTransactionsInput)
    update?: UserUpdateToOneWithWhereWithoutTransactionsInput;
}
