import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PointTransactionWhereUniqueInput } from './point-transaction-where-unique.input';
import { Type } from 'class-transformer';
import { PointTransactionUpdateWithoutUserInput } from './point-transaction-update-without-user.input';
import { PointTransactionCreateWithoutUserInput } from './point-transaction-create-without-user.input';

@InputType()
export class PointTransactionUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => PointTransactionWhereUniqueInput, {nullable:false})
    @Type(() => PointTransactionWhereUniqueInput)
    where!: Prisma.AtLeast<PointTransactionWhereUniqueInput, 'id'>;

    @Field(() => PointTransactionUpdateWithoutUserInput, {nullable:false})
    @Type(() => PointTransactionUpdateWithoutUserInput)
    update!: PointTransactionUpdateWithoutUserInput;

    @Field(() => PointTransactionCreateWithoutUserInput, {nullable:false})
    @Type(() => PointTransactionCreateWithoutUserInput)
    create!: PointTransactionCreateWithoutUserInput;
}
