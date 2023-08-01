import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutPointTransactionsInput } from './user-create-without-point-transactions.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutPointTransactionsInput } from './user-create-or-connect-without-point-transactions.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutPointTransactionsInput {

    @Field(() => UserCreateWithoutPointTransactionsInput, {nullable:true})
    @Type(() => UserCreateWithoutPointTransactionsInput)
    create?: UserCreateWithoutPointTransactionsInput;

    @Field(() => UserCreateOrConnectWithoutPointTransactionsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutPointTransactionsInput)
    connectOrCreate?: UserCreateOrConnectWithoutPointTransactionsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber'>;
}
