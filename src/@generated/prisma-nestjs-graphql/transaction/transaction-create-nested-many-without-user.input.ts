import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionCreateWithoutUserInput } from './transaction-create-without-user.input';
import { Type } from 'class-transformer';
import { TransactionCreateOrConnectWithoutUserInput } from './transaction-create-or-connect-without-user.input';
import { TransactionCreateManyUserInputEnvelope } from './transaction-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';

@InputType()
export class TransactionCreateNestedManyWithoutUserInput {

    @Field(() => [TransactionCreateWithoutUserInput], {nullable:true})
    @Type(() => TransactionCreateWithoutUserInput)
    create?: Array<TransactionCreateWithoutUserInput>;

    @Field(() => [TransactionCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => TransactionCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<TransactionCreateOrConnectWithoutUserInput>;

    @Field(() => TransactionCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => TransactionCreateManyUserInputEnvelope)
    createMany?: TransactionCreateManyUserInputEnvelope;

    @Field(() => [TransactionWhereUniqueInput], {nullable:true})
    @Type(() => TransactionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'userId' | 'accountId'>>;
}
