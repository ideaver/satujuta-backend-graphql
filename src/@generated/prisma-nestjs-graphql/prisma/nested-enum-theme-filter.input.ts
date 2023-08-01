import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Theme } from './theme.enum';

@InputType()
export class NestedEnumThemeFilter {

    @Field(() => Theme, {nullable:true})
    equals?: keyof typeof Theme;

    @Field(() => [Theme], {nullable:true})
    in?: Array<keyof typeof Theme>;

    @Field(() => [Theme], {nullable:true})
    notIn?: Array<keyof typeof Theme>;

    @Field(() => NestedEnumThemeFilter, {nullable:true})
    not?: NestedEnumThemeFilter;
}
