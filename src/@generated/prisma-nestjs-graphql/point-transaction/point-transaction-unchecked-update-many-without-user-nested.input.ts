import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PointTransactionCreateWithoutUserInput } from './point-transaction-create-without-user.input';
import { Type } from 'class-transformer';
import { PointTransactionCreateOrConnectWithoutUserInput } from './point-transaction-create-or-connect-without-user.input';
import { PointTransactionUpsertWithWhereUniqueWithoutUserInput } from './point-transaction-upsert-with-where-unique-without-user.input';
import { PointTransactionCreateManyUserInputEnvelope } from './point-transaction-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PointTransactionWhereUniqueInput } from './point-transaction-where-unique.input';
import { PointTransactionUpdateWithWhereUniqueWithoutUserInput } from './point-transaction-update-with-where-unique-without-user.input';
import { PointTransactionUpdateManyWithWhereWithoutUserInput } from './point-transaction-update-many-with-where-without-user.input';
import { PointTransactionScalarWhereInput } from './point-transaction-scalar-where.input';

@InputType()
export class PointTransactionUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [PointTransactionCreateWithoutUserInput], {nullable:true})
    @Type(() => PointTransactionCreateWithoutUserInput)
    create?: Array<PointTransactionCreateWithoutUserInput>;

    @Field(() => [PointTransactionCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => PointTransactionCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<PointTransactionCreateOrConnectWithoutUserInput>;

    @Field(() => [PointTransactionUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => PointTransactionUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<PointTransactionUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => PointTransactionCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => PointTransactionCreateManyUserInputEnvelope)
    createMany?: PointTransactionCreateManyUserInputEnvelope;

    @Field(() => [PointTransactionWhereUniqueInput], {nullable:true})
    @Type(() => PointTransactionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PointTransactionWhereUniqueInput, 'id'>>;

    @Field(() => [PointTransactionWhereUniqueInput], {nullable:true})
    @Type(() => PointTransactionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PointTransactionWhereUniqueInput, 'id'>>;

    @Field(() => [PointTransactionWhereUniqueInput], {nullable:true})
    @Type(() => PointTransactionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PointTransactionWhereUniqueInput, 'id'>>;

    @Field(() => [PointTransactionWhereUniqueInput], {nullable:true})
    @Type(() => PointTransactionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PointTransactionWhereUniqueInput, 'id'>>;

    @Field(() => [PointTransactionUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => PointTransactionUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<PointTransactionUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [PointTransactionUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => PointTransactionUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<PointTransactionUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [PointTransactionScalarWhereInput], {nullable:true})
    @Type(() => PointTransactionScalarWhereInput)
    deleteMany?: Array<PointTransactionScalarWhereInput>;
}
