import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionCategory } from './transaction-category.enum';

@InputType()
export class NestedEnumTransactionCategoryFilter {

    @Field(() => TransactionCategory, {nullable:true})
    equals?: keyof typeof TransactionCategory;

    @Field(() => [TransactionCategory], {nullable:true})
    in?: Array<keyof typeof TransactionCategory>;

    @Field(() => [TransactionCategory], {nullable:true})
    notIn?: Array<keyof typeof TransactionCategory>;

    @Field(() => NestedEnumTransactionCategoryFilter, {nullable:true})
    not?: NestedEnumTransactionCategoryFilter;
}
