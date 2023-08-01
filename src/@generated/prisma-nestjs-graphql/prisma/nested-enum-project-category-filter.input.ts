import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCategory } from './project-category.enum';

@InputType()
export class NestedEnumProjectCategoryFilter {

    @Field(() => ProjectCategory, {nullable:true})
    equals?: keyof typeof ProjectCategory;

    @Field(() => [ProjectCategory], {nullable:true})
    in?: Array<keyof typeof ProjectCategory>;

    @Field(() => [ProjectCategory], {nullable:true})
    notIn?: Array<keyof typeof ProjectCategory>;

    @Field(() => NestedEnumProjectCategoryFilter, {nullable:true})
    not?: NestedEnumProjectCategoryFilter;
}
