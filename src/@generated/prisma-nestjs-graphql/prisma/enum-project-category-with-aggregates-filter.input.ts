import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCategory } from './project-category.enum';
import { NestedEnumProjectCategoryWithAggregatesFilter } from './nested-enum-project-category-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumProjectCategoryFilter } from './nested-enum-project-category-filter.input';

@InputType()
export class EnumProjectCategoryWithAggregatesFilter {

    @Field(() => ProjectCategory, {nullable:true})
    equals?: keyof typeof ProjectCategory;

    @Field(() => [ProjectCategory], {nullable:true})
    in?: Array<keyof typeof ProjectCategory>;

    @Field(() => [ProjectCategory], {nullable:true})
    notIn?: Array<keyof typeof ProjectCategory>;

    @Field(() => NestedEnumProjectCategoryWithAggregatesFilter, {nullable:true})
    not?: NestedEnumProjectCategoryWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumProjectCategoryFilter, {nullable:true})
    _min?: NestedEnumProjectCategoryFilter;

    @Field(() => NestedEnumProjectCategoryFilter, {nullable:true})
    _max?: NestedEnumProjectCategoryFilter;
}
