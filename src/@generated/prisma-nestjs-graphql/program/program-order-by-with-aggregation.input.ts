import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ProgramCountOrderByAggregateInput } from './program-count-order-by-aggregate.input';
import { ProgramAvgOrderByAggregateInput } from './program-avg-order-by-aggregate.input';
import { ProgramMaxOrderByAggregateInput } from './program-max-order-by-aggregate.input';
import { ProgramMinOrderByAggregateInput } from './program-min-order-by-aggregate.input';
import { ProgramSumOrderByAggregateInput } from './program-sum-order-by-aggregate.input';

@InputType()
export class ProgramOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    startDate?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    dueDate?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdById?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    categoryId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => ProgramCountOrderByAggregateInput, {nullable:true})
    _count?: ProgramCountOrderByAggregateInput;

    @Field(() => ProgramAvgOrderByAggregateInput, {nullable:true})
    _avg?: ProgramAvgOrderByAggregateInput;

    @Field(() => ProgramMaxOrderByAggregateInput, {nullable:true})
    _max?: ProgramMaxOrderByAggregateInput;

    @Field(() => ProgramMinOrderByAggregateInput, {nullable:true})
    _min?: ProgramMinOrderByAggregateInput;

    @Field(() => ProgramSumOrderByAggregateInput, {nullable:true})
    _sum?: ProgramSumOrderByAggregateInput;
}
