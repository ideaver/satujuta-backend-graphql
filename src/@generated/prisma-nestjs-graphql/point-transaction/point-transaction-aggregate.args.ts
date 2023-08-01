import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PointTransactionWhereInput } from './point-transaction-where.input';
import { Type } from 'class-transformer';
import { PointTransactionOrderByWithRelationInput } from './point-transaction-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PointTransactionWhereUniqueInput } from './point-transaction-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PointTransactionCountAggregateInput } from './point-transaction-count-aggregate.input';
import { PointTransactionAvgAggregateInput } from './point-transaction-avg-aggregate.input';
import { PointTransactionSumAggregateInput } from './point-transaction-sum-aggregate.input';
import { PointTransactionMinAggregateInput } from './point-transaction-min-aggregate.input';
import { PointTransactionMaxAggregateInput } from './point-transaction-max-aggregate.input';

@ArgsType()
export class PointTransactionAggregateArgs {

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

    @Field(() => PointTransactionCountAggregateInput, {nullable:true})
    _count?: PointTransactionCountAggregateInput;

    @Field(() => PointTransactionAvgAggregateInput, {nullable:true})
    _avg?: PointTransactionAvgAggregateInput;

    @Field(() => PointTransactionSumAggregateInput, {nullable:true})
    _sum?: PointTransactionSumAggregateInput;

    @Field(() => PointTransactionMinAggregateInput, {nullable:true})
    _min?: PointTransactionMinAggregateInput;

    @Field(() => PointTransactionMaxAggregateInput, {nullable:true})
    _max?: PointTransactionMaxAggregateInput;
}
