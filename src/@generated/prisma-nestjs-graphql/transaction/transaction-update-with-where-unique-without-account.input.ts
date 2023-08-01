import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';
import { Type } from 'class-transformer';
import { TransactionUpdateWithoutAccountInput } from './transaction-update-without-account.input';

@InputType()
export class TransactionUpdateWithWhereUniqueWithoutAccountInput {

    @Field(() => TransactionWhereUniqueInput, {nullable:false})
    @Type(() => TransactionWhereUniqueInput)
    where!: Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'userId' | 'accountId'>;

    @Field(() => TransactionUpdateWithoutAccountInput, {nullable:false})
    @Type(() => TransactionUpdateWithoutAccountInput)
    data!: TransactionUpdateWithoutAccountInput;
}
