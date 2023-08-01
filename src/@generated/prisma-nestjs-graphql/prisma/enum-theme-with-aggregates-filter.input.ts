import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Theme } from './theme.enum';
import { NestedEnumThemeWithAggregatesFilter } from './nested-enum-theme-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumThemeFilter } from './nested-enum-theme-filter.input';

@InputType()
export class EnumThemeWithAggregatesFilter {

    @Field(() => Theme, {nullable:true})
    equals?: keyof typeof Theme;

    @Field(() => [Theme], {nullable:true})
    in?: Array<keyof typeof Theme>;

    @Field(() => [Theme], {nullable:true})
    notIn?: Array<keyof typeof Theme>;

    @Field(() => NestedEnumThemeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumThemeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumThemeFilter, {nullable:true})
    _min?: NestedEnumThemeFilter;

    @Field(() => NestedEnumThemeFilter, {nullable:true})
    _max?: NestedEnumThemeFilter;
}
