import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PointTransactionWhereUniqueInput } from './point-transaction-where-unique.input';
import { Type } from 'class-transformer';
import { PointTransactionCreateInput } from './point-transaction-create.input';
import { PointTransactionUpdateInput } from './point-transaction-update.input';

@ArgsType()
export class UpsertOnePointTransactionArgs {

    @Field(() => PointTransactionWhereUniqueInput, {nullable:false})
    @Type(() => PointTransactionWhereUniqueInput)
    where!: Prisma.AtLeast<PointTransactionWhereUniqueInput, 'id'>;

    @Field(() => PointTransactionCreateInput, {nullable:false})
    @Type(() => PointTransactionCreateInput)
    create!: PointTransactionCreateInput;

    @Field(() => PointTransactionUpdateInput, {nullable:false})
    @Type(() => PointTransactionUpdateInput)
    update!: PointTransactionUpdateInput;
}
