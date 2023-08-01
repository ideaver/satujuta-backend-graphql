import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutPointTransactionsInput } from './user-create-without-point-transactions.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutPointTransactionsInput } from './user-create-or-connect-without-point-transactions.input';
import { UserUpsertWithoutPointTransactionsInput } from './user-upsert-without-point-transactions.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutPointTransactionsInput } from './user-update-to-one-with-where-without-point-transactions.input';

@InputType()
export class UserUpdateOneRequiredWithoutPointTransactionsNestedInput {

    @Field(() => UserCreateWithoutPointTransactionsInput, {nullable:true})
    @Type(() => UserCreateWithoutPointTransactionsInput)
    create?: UserCreateWithoutPointTransactionsInput;

    @Field(() => UserCreateOrConnectWithoutPointTransactionsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutPointTransactionsInput)
    connectOrCreate?: UserCreateOrConnectWithoutPointTransactionsInput;

    @Field(() => UserUpsertWithoutPointTransactionsInput, {nullable:true})
    @Type(() => UserUpsertWithoutPointTransactionsInput)
    upsert?: UserUpsertWithoutPointTransactionsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber'>;

    @Field(() => UserUpdateToOneWithWhereWithoutPointTransactionsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutPointTransactionsInput)
    update?: UserUpdateToOneWithWhereWithoutPointTransactionsInput;
}
