import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountCategory } from './account-category.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumAccountCategoryFilter } from './nested-enum-account-category-filter.input';

@InputType()
export class NestedEnumAccountCategoryWithAggregatesFilter {

    @Field(() => AccountCategory, {nullable:true})
    equals?: keyof typeof AccountCategory;

    @Field(() => [AccountCategory], {nullable:true})
    in?: Array<keyof typeof AccountCategory>;

    @Field(() => [AccountCategory], {nullable:true})
    notIn?: Array<keyof typeof AccountCategory>;

    @Field(() => NestedEnumAccountCategoryWithAggregatesFilter, {nullable:true})
    not?: NestedEnumAccountCategoryWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumAccountCategoryFilter, {nullable:true})
    _min?: NestedEnumAccountCategoryFilter;

    @Field(() => NestedEnumAccountCategoryFilter, {nullable:true})
    _max?: NestedEnumAccountCategoryFilter;
}
