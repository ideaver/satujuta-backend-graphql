import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';
import { Type } from 'class-transformer';
import { TransactionCreateWithoutAccountInput } from './transaction-create-without-account.input';

@InputType()
export class TransactionCreateOrConnectWithoutAccountInput {

    @Field(() => TransactionWhereUniqueInput, {nullable:false})
    @Type(() => TransactionWhereUniqueInput)
    where!: Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'userId' | 'accountId'>;

    @Field(() => TransactionCreateWithoutAccountInput, {nullable:false})
    @Type(() => TransactionCreateWithoutAccountInput)
    create!: TransactionCreateWithoutAccountInput;
}
