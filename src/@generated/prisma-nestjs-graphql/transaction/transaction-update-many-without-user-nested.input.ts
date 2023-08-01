import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionCreateWithoutUserInput } from './transaction-create-without-user.input';
import { Type } from 'class-transformer';
import { TransactionCreateOrConnectWithoutUserInput } from './transaction-create-or-connect-without-user.input';
import { TransactionUpsertWithWhereUniqueWithoutUserInput } from './transaction-upsert-with-where-unique-without-user.input';
import { TransactionCreateManyUserInputEnvelope } from './transaction-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';
import { TransactionUpdateWithWhereUniqueWithoutUserInput } from './transaction-update-with-where-unique-without-user.input';
import { TransactionUpdateManyWithWhereWithoutUserInput } from './transaction-update-many-with-where-without-user.input';
import { TransactionScalarWhereInput } from './transaction-scalar-where.input';

@InputType()
export class TransactionUpdateManyWithoutUserNestedInput {

    @Field(() => [TransactionCreateWithoutUserInput], {nullable:true})
    @Type(() => TransactionCreateWithoutUserInput)
    create?: Array<TransactionCreateWithoutUserInput>;

    @Field(() => [TransactionCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => TransactionCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<TransactionCreateOrConnectWithoutUserInput>;

    @Field(() => [TransactionUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => TransactionUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<TransactionUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => TransactionCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => TransactionCreateManyUserInputEnvelope)
    createMany?: TransactionCreateManyUserInputEnvelope;

    @Field(() => [TransactionWhereUniqueInput], {nullable:true})
    @Type(() => TransactionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'userId' | 'accountId'>>;

    @Field(() => [TransactionWhereUniqueInput], {nullable:true})
    @Type(() => TransactionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'userId' | 'accountId'>>;

    @Field(() => [TransactionWhereUniqueInput], {nullable:true})
    @Type(() => TransactionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'userId' | 'accountId'>>;

    @Field(() => [TransactionWhereUniqueInput], {nullable:true})
    @Type(() => TransactionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'userId' | 'accountId'>>;

    @Field(() => [TransactionUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => TransactionUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<TransactionUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [TransactionUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => TransactionUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<TransactionUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [TransactionScalarWhereInput], {nullable:true})
    @Type(() => TransactionScalarWhereInput)
    deleteMany?: Array<TransactionScalarWhereInput>;
}
