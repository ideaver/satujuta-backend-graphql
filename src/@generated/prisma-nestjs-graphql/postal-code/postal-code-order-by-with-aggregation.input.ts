import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PostalCodeCountOrderByAggregateInput } from './postal-code-count-order-by-aggregate.input';
import { PostalCodeAvgOrderByAggregateInput } from './postal-code-avg-order-by-aggregate.input';
import { PostalCodeMaxOrderByAggregateInput } from './postal-code-max-order-by-aggregate.input';
import { PostalCodeMinOrderByAggregateInput } from './postal-code-min-order-by-aggregate.input';
import { PostalCodeSumOrderByAggregateInput } from './postal-code-sum-order-by-aggregate.input';

@InputType()
export class PostalCodeOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;

    @Field(() => PostalCodeCountOrderByAggregateInput, {nullable:true})
    _count?: PostalCodeCountOrderByAggregateInput;

    @Field(() => PostalCodeAvgOrderByAggregateInput, {nullable:true})
    _avg?: PostalCodeAvgOrderByAggregateInput;

    @Field(() => PostalCodeMaxOrderByAggregateInput, {nullable:true})
    _max?: PostalCodeMaxOrderByAggregateInput;

    @Field(() => PostalCodeMinOrderByAggregateInput, {nullable:true})
    _min?: PostalCodeMinOrderByAggregateInput;

    @Field(() => PostalCodeSumOrderByAggregateInput, {nullable:true})
    _sum?: PostalCodeSumOrderByAggregateInput;
}
