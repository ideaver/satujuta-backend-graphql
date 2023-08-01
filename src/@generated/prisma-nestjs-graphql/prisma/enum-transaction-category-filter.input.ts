import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionCategory } from './transaction-category.enum';
import { NestedEnumTransactionCategoryFilter } from './nested-enum-transaction-category-filter.input';

@InputType()
export class EnumTransactionCategoryFilter {

    @Field(() => TransactionCategory, {nullable:true})
    equals?: keyof typeof TransactionCategory;

    @Field(() => [TransactionCategory], {nullable:true})
    in?: Array<keyof typeof TransactionCategory>;

    @Field(() => [TransactionCategory], {nullable:true})
    notIn?: Array<keyof typeof TransactionCategory>;

    @Field(() => NestedEnumTransactionCategoryFilter, {nullable:true})
    not?: NestedEnumTransactionCategoryFilter;
}
