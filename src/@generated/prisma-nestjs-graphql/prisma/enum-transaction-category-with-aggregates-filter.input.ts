import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionCategory } from './transaction-category.enum';
import { NestedEnumTransactionCategoryWithAggregatesFilter } from './nested-enum-transaction-category-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumTransactionCategoryFilter } from './nested-enum-transaction-category-filter.input';

@InputType()
export class EnumTransactionCategoryWithAggregatesFilter {

    @Field(() => TransactionCategory, {nullable:true})
    equals?: keyof typeof TransactionCategory;

    @Field(() => [TransactionCategory], {nullable:true})
    in?: Array<keyof typeof TransactionCategory>;

    @Field(() => [TransactionCategory], {nullable:true})
    notIn?: Array<keyof typeof TransactionCategory>;

    @Field(() => NestedEnumTransactionCategoryWithAggregatesFilter, {nullable:true})
    not?: NestedEnumTransactionCategoryWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumTransactionCategoryFilter, {nullable:true})
    _min?: NestedEnumTransactionCategoryFilter;

    @Field(() => NestedEnumTransactionCategoryFilter, {nullable:true})
    _max?: NestedEnumTransactionCategoryFilter;
}
