import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PointType } from './point-type.enum';
import { NestedEnumPointTypeWithAggregatesFilter } from './nested-enum-point-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumPointTypeFilter } from './nested-enum-point-type-filter.input';

@InputType()
export class EnumPointTypeWithAggregatesFilter {

    @Field(() => PointType, {nullable:true})
    equals?: keyof typeof PointType;

    @Field(() => [PointType], {nullable:true})
    in?: Array<keyof typeof PointType>;

    @Field(() => [PointType], {nullable:true})
    notIn?: Array<keyof typeof PointType>;

    @Field(() => NestedEnumPointTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumPointTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumPointTypeFilter, {nullable:true})
    _min?: NestedEnumPointTypeFilter;

    @Field(() => NestedEnumPointTypeFilter, {nullable:true})
    _max?: NestedEnumPointTypeFilter;
}
