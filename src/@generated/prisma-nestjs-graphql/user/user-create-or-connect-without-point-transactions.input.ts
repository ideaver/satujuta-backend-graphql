import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutPointTransactionsInput } from './user-create-without-point-transactions.input';

@InputType()
export class UserCreateOrConnectWithoutPointTransactionsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber'>;

    @Field(() => UserCreateWithoutPointTransactionsInput, {nullable:false})
    @Type(() => UserCreateWithoutPointTransactionsInput)
    create!: UserCreateWithoutPointTransactionsInput;
}
