import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PointTransactionCreateWithoutUserInput } from './point-transaction-create-without-user.input';
import { Type } from 'class-transformer';
import { PointTransactionCreateOrConnectWithoutUserInput } from './point-transaction-create-or-connect-without-user.input';
import { PointTransactionCreateManyUserInputEnvelope } from './point-transaction-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PointTransactionWhereUniqueInput } from './point-transaction-where-unique.input';

@InputType()
export class PointTransactionUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [PointTransactionCreateWithoutUserInput], {nullable:true})
    @Type(() => PointTransactionCreateWithoutUserInput)
    create?: Array<PointTransactionCreateWithoutUserInput>;

    @Field(() => [PointTransactionCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => PointTransactionCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<PointTransactionCreateOrConnectWithoutUserInput>;

    @Field(() => PointTransactionCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => PointTransactionCreateManyUserInputEnvelope)
    createMany?: PointTransactionCreateManyUserInputEnvelope;

    @Field(() => [PointTransactionWhereUniqueInput], {nullable:true})
    @Type(() => PointTransactionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PointTransactionWhereUniqueInput, 'id'>>;
}
