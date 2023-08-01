import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PointTransactionUpdateInput } from './point-transaction-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { PointTransactionWhereUniqueInput } from './point-transaction-where-unique.input';

@ArgsType()
export class UpdateOnePointTransactionArgs {

    @Field(() => PointTransactionUpdateInput, {nullable:false})
    @Type(() => PointTransactionUpdateInput)
    data!: PointTransactionUpdateInput;

    @Field(() => PointTransactionWhereUniqueInput, {nullable:false})
    @Type(() => PointTransactionWhereUniqueInput)
    where!: Prisma.AtLeast<PointTransactionWhereUniqueInput, 'id'>;
}
