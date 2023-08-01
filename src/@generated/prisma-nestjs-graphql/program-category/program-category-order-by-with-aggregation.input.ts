import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ProgramCategoryCountOrderByAggregateInput } from './program-category-count-order-by-aggregate.input';
import { ProgramCategoryAvgOrderByAggregateInput } from './program-category-avg-order-by-aggregate.input';
import { ProgramCategoryMaxOrderByAggregateInput } from './program-category-max-order-by-aggregate.input';
import { ProgramCategoryMinOrderByAggregateInput } from './program-category-min-order-by-aggregate.input';
import { ProgramCategorySumOrderByAggregateInput } from './program-category-sum-order-by-aggregate.input';

@InputType()
export class ProgramCategoryOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => ProgramCategoryCountOrderByAggregateInput, {nullable:true})
    _count?: ProgramCategoryCountOrderByAggregateInput;

    @Field(() => ProgramCategoryAvgOrderByAggregateInput, {nullable:true})
    _avg?: ProgramCategoryAvgOrderByAggregateInput;

    @Field(() => ProgramCategoryMaxOrderByAggregateInput, {nullable:true})
    _max?: ProgramCategoryMaxOrderByAggregateInput;

    @Field(() => ProgramCategoryMinOrderByAggregateInput, {nullable:true})
    _min?: ProgramCategoryMinOrderByAggregateInput;

    @Field(() => ProgramCategorySumOrderByAggregateInput, {nullable:true})
    _sum?: ProgramCategorySumOrderByAggregateInput;
}
