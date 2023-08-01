import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';
import { Type } from 'class-transformer';
import { TransactionCreateWithoutUserInput } from './transaction-create-without-user.input';

@InputType()
export class TransactionCreateOrConnectWithoutUserInput {

    @Field(() => TransactionWhereUniqueInput, {nullable:false})
    @Type(() => TransactionWhereUniqueInput)
    where!: Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'userId' | 'accountId'>;

    @Field(() => TransactionCreateWithoutUserInput, {nullable:false})
    @Type(() => TransactionCreateWithoutUserInput)
    create!: TransactionCreateWithoutUserInput;
}
