import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DistrictWhereInput } from './district-where.input';
import { Type } from 'class-transformer';
import { DistrictOrderByWithAggregationInput } from './district-order-by-with-aggregation.input';
import { DistrictScalarFieldEnum } from './district-scalar-field.enum';
import { DistrictScalarWhereWithAggregatesInput } from './district-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { DistrictCountAggregateInput } from './district-count-aggregate.input';
import { DistrictAvgAggregateInput } from './district-avg-aggregate.input';
import { DistrictSumAggregateInput } from './district-sum-aggregate.input';
import { DistrictMinAggregateInput } from './district-min-aggregate.input';
import { DistrictMaxAggregateInput } from './district-max-aggregate.input';

@ArgsType()
export class DistrictGroupByArgs {

    @Field(() => DistrictWhereInput, {nullable:true})
    @Type(() => DistrictWhereInput)
    where?: DistrictWhereInput;

    @Field(() => [DistrictOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<DistrictOrderByWithAggregationInput>;

    @Field(() => [DistrictScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof DistrictScalarFieldEnum>;

    @Field(() => DistrictScalarWhereWithAggregatesInput, {nullable:true})
    having?: DistrictScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => DistrictCountAggregateInput, {nullable:true})
    _count?: DistrictCountAggregateInput;

    @Field(() => DistrictAvgAggregateInput, {nullable:true})
    _avg?: DistrictAvgAggregateInput;

    @Field(() => DistrictSumAggregateInput, {nullable:true})
    _sum?: DistrictSumAggregateInput;

    @Field(() => DistrictMinAggregateInput, {nullable:true})
    _min?: DistrictMinAggregateInput;

    @Field(() => DistrictMaxAggregateInput, {nullable:true})
    _max?: DistrictMaxAggregateInput;
}
