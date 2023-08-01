import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PointType } from './point-type.enum';

@InputType()
export class NestedEnumPointTypeFilter {

    @Field(() => PointType, {nullable:true})
    equals?: keyof typeof PointType;

    @Field(() => [PointType], {nullable:true})
    in?: Array<keyof typeof PointType>;

    @Field(() => [PointType], {nullable:true})
    notIn?: Array<keyof typeof PointType>;

    @Field(() => NestedEnumPointTypeFilter, {nullable:true})
    not?: NestedEnumPointTypeFilter;
}
