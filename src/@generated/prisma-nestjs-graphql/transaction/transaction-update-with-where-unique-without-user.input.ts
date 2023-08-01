import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';
import { Type } from 'class-transformer';
import { TransactionUpdateWithoutUserInput } from './transaction-update-without-user.input';

@InputType()
export class TransactionUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => TransactionWhereUniqueInput, {nullable:false})
    @Type(() => TransactionWhereUniqueInput)
    where!: Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'userId' | 'accountId'>;

    @Field(() => TransactionUpdateWithoutUserInput, {nullable:false})
    @Type(() => TransactionUpdateWithoutUserInput)
    data!: TransactionUpdateWithoutUserInput;
}
