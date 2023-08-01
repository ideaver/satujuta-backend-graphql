import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DistrictWhereInput } from './district-where.input';
import { Type } from 'class-transformer';
import { DistrictOrderByWithRelationInput } from './district-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DistrictWhereUniqueInput } from './district-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DistrictCountAggregateInput } from './district-count-aggregate.input';
import { DistrictAvgAggregateInput } from './district-avg-aggregate.input';
import { DistrictSumAggregateInput } from './district-sum-aggregate.input';
import { DistrictMinAggregateInput } from './district-min-aggregate.input';
import { DistrictMaxAggregateInput } from './district-max-aggregate.input';

@ArgsType()
export class DistrictAggregateArgs {

    @Field(() => DistrictWhereInput, {nullable:true})
    @Type(() => DistrictWhereInput)
    where?: DistrictWhereInput;

    @Field(() => [DistrictOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DistrictOrderByWithRelationInput>;

    @Field(() => DistrictWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<DistrictWhereUniqueInput, 'id'>;

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
