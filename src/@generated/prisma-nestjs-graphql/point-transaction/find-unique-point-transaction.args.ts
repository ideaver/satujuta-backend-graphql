import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PointTransactionWhereUniqueInput } from './point-transaction-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquePointTransactionArgs {

    @Field(() => PointTransactionWhereUniqueInput, {nullable:false})
    @Type(() => PointTransactionWhereUniqueInput)
    where!: Prisma.AtLeast<PointTransactionWhereUniqueInput, 'id'>;
}
