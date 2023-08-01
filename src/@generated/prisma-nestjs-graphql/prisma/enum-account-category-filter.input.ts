import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountCategory } from './account-category.enum';
import { NestedEnumAccountCategoryFilter } from './nested-enum-account-category-filter.input';

@InputType()
export class EnumAccountCategoryFilter {

    @Field(() => AccountCategory, {nullable:true})
    equals?: keyof typeof AccountCategory;

    @Field(() => [AccountCategory], {nullable:true})
    in?: Array<keyof typeof AccountCategory>;

    @Field(() => [AccountCategory], {nullable:true})
    notIn?: Array<keyof typeof AccountCategory>;

    @Field(() => NestedEnumAccountCategoryFilter, {nullable:true})
    not?: NestedEnumAccountCategoryFilter;
}
