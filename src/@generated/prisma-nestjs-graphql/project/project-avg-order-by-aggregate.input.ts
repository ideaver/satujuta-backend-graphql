import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ProjectAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    returnRate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    goalAmount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    currentAmount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    minimumInvestment?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    maxInvestor?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    accountId?: keyof typeof SortOrder;
}
