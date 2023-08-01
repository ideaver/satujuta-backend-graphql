import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { BankCountOrderByAggregateInput } from './bank-count-order-by-aggregate.input';
import { BankAvgOrderByAggregateInput } from './bank-avg-order-by-aggregate.input';
import { BankMaxOrderByAggregateInput } from './bank-max-order-by-aggregate.input';
import { BankMinOrderByAggregateInput } from './bank-min-order-by-aggregate.input';
import { BankSumOrderByAggregateInput } from './bank-sum-order-by-aggregate.input';

@InputType()
export class BankOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    logoUrl?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    accountNumber?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    accountId?: keyof typeof SortOrder;

    @Field(() => BankCountOrderByAggregateInput, {nullable:true})
    _count?: BankCountOrderByAggregateInput;

    @Field(() => BankAvgOrderByAggregateInput, {nullable:true})
    _avg?: BankAvgOrderByAggregateInput;

    @Field(() => BankMaxOrderByAggregateInput, {nullable:true})
    _max?: BankMaxOrderByAggregateInput;

    @Field(() => BankMinOrderByAggregateInput, {nullable:true})
    _min?: BankMinOrderByAggregateInput;

    @Field(() => BankSumOrderByAggregateInput, {nullable:true})
    _sum?: BankSumOrderByAggregateInput;
}
