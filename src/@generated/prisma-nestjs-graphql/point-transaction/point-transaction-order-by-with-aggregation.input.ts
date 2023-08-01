import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PointTransactionCountOrderByAggregateInput } from './point-transaction-count-order-by-aggregate.input';
import { PointTransactionAvgOrderByAggregateInput } from './point-transaction-avg-order-by-aggregate.input';
import { PointTransactionMaxOrderByAggregateInput } from './point-transaction-max-order-by-aggregate.input';
import { PointTransactionMinOrderByAggregateInput } from './point-transaction-min-order-by-aggregate.input';
import { PointTransactionSumOrderByAggregateInput } from './point-transaction-sum-order-by-aggregate.input';

@InputType()
export class PointTransactionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    amount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    pointType?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    transactionType?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    currentBalance?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => PointTransactionCountOrderByAggregateInput, {nullable:true})
    _count?: PointTransactionCountOrderByAggregateInput;

    @Field(() => PointTransactionAvgOrderByAggregateInput, {nullable:true})
    _avg?: PointTransactionAvgOrderByAggregateInput;

    @Field(() => PointTransactionMaxOrderByAggregateInput, {nullable:true})
    _max?: PointTransactionMaxOrderByAggregateInput;

    @Field(() => PointTransactionMinOrderByAggregateInput, {nullable:true})
    _min?: PointTransactionMinOrderByAggregateInput;

    @Field(() => PointTransactionSumOrderByAggregateInput, {nullable:true})
    _sum?: PointTransactionSumOrderByAggregateInput;
}
