import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCategory } from './project-category.enum';
import { NestedEnumProjectCategoryFilter } from './nested-enum-project-category-filter.input';

@InputType()
export class EnumProjectCategoryFilter {

    @Field(() => ProjectCategory, {nullable:true})
    equals?: keyof typeof ProjectCategory;

    @Field(() => [ProjectCategory], {nullable:true})
    in?: Array<keyof typeof ProjectCategory>;

    @Field(() => [ProjectCategory], {nullable:true})
    notIn?: Array<keyof typeof ProjectCategory>;

    @Field(() => NestedEnumProjectCategoryFilter, {nullable:true})
    not?: NestedEnumProjectCategoryFilter;
}
