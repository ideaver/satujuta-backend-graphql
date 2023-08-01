import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CheckInWhereInput } from './check-in-where.input';
import { Type } from 'class-transformer';
import { CheckInOrderByWithAggregationInput } from './check-in-order-by-with-aggregation.input';
import { CheckInScalarFieldEnum } from './check-in-scalar-field.enum';
import { CheckInScalarWhereWithAggregatesInput } from './check-in-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { CheckInCountAggregateInput } from './check-in-count-aggregate.input';
import { CheckInAvgAggregateInput } from './check-in-avg-aggregate.input';
import { CheckInSumAggregateInput } from './check-in-sum-aggregate.input';
import { CheckInMinAggregateInput } from './check-in-min-aggregate.input';
import { CheckInMaxAggregateInput } from './check-in-max-aggregate.input';

@ArgsType()
export class CheckInGroupByArgs {

    @Field(() => CheckInWhereInput, {nullable:true})
    @Type(() => CheckInWhereInput)
    where?: CheckInWhereInput;

    @Field(() => [CheckInOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CheckInOrderByWithAggregationInput>;

    @Field(() => [CheckInScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CheckInScalarFieldEnum>;

    @Field(() => CheckInScalarWhereWithAggregatesInput, {nullable:true})
    having?: CheckInScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CheckInCountAggregateInput, {nullable:true})
    _count?: CheckInCountAggregateInput;

    @Field(() => CheckInAvgAggregateInput, {nullable:true})
    _avg?: CheckInAvgAggregateInput;

    @Field(() => CheckInSumAggregateInput, {nullable:true})
    _sum?: CheckInSumAggregateInput;

    @Field(() => CheckInMinAggregateInput, {nullable:true})
    _min?: CheckInMinAggregateInput;

    @Field(() => CheckInMaxAggregateInput, {nullable:true})
    _max?: CheckInMaxAggregateInput;
}
