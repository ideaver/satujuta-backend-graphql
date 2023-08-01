import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutTransactionsInput } from './user-create-without-transactions.input';

@InputType()
export class UserCreateOrConnectWithoutTransactionsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber'>;

    @Field(() => UserCreateWithoutTransactionsInput, {nullable:false})
    @Type(() => UserCreateWithoutTransactionsInput)
    create!: UserCreateWithoutTransactionsInput;
}
