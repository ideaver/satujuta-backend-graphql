import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PointTransactionWhereUniqueInput } from './point-transaction-where-unique.input';
import { Type } from 'class-transformer';
import { PointTransactionCreateWithoutUserInput } from './point-transaction-create-without-user.input';

@InputType()
export class PointTransactionCreateOrConnectWithoutUserInput {

    @Field(() => PointTransactionWhereUniqueInput, {nullable:false})
    @Type(() => PointTransactionWhereUniqueInput)
    where!: Prisma.AtLeast<PointTransactionWhereUniqueInput, 'id'>;

    @Field(() => PointTransactionCreateWithoutUserInput, {nullable:false})
    @Type(() => PointTransactionCreateWithoutUserInput)
    create!: PointTransactionCreateWithoutUserInput;
}
