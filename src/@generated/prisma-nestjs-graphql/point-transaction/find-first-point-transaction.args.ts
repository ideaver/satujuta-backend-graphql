import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PointTransactionWhereInput } from './point-transaction-where.input';
import { Type } from 'class-transformer';
import { PointTransactionOrderByWithRelationInput } from './point-transaction-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PointTransactionWhereUniqueInput } from './point-transaction-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PointTransactionScalarFieldEnum } from './point-transaction-scalar-field.enum';

@ArgsType()
export class FindFirstPointTransactionArgs {

    @Field(() => PointTransactionWhereInput, {nullable:true})
    @Type(() => PointTransactionWhereInput)
    where?: PointTransactionWhereInput;

    @Field(() => [PointTransactionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PointTransactionOrderByWithRelationInput>;

    @Field(() => PointTransactionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PointTransactionWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PointTransactionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PointTransactionScalarFieldEnum>;
}
