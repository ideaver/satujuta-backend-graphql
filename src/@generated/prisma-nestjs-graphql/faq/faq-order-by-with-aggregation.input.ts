import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { FaqCountOrderByAggregateInput } from './faq-count-order-by-aggregate.input';
import { FaqAvgOrderByAggregateInput } from './faq-avg-order-by-aggregate.input';
import { FaqMaxOrderByAggregateInput } from './faq-max-order-by-aggregate.input';
import { FaqMinOrderByAggregateInput } from './faq-min-order-by-aggregate.input';
import { FaqSumOrderByAggregateInput } from './faq-sum-order-by-aggregate.input';

@InputType()
export class FaqOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => FaqCountOrderByAggregateInput, {nullable:true})
    _count?: FaqCountOrderByAggregateInput;

    @Field(() => FaqAvgOrderByAggregateInput, {nullable:true})
    _avg?: FaqAvgOrderByAggregateInput;

    @Field(() => FaqMaxOrderByAggregateInput, {nullable:true})
    _max?: FaqMaxOrderByAggregateInput;

    @Field(() => FaqMinOrderByAggregateInput, {nullable:true})
    _min?: FaqMinOrderByAggregateInput;

    @Field(() => FaqSumOrderByAggregateInput, {nullable:true})
    _sum?: FaqSumOrderByAggregateInput;
}
