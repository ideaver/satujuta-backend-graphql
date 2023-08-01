import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CheckInWhereInput } from './check-in-where.input';
import { Type } from 'class-transformer';
import { CheckInOrderByWithRelationInput } from './check-in-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { CheckInWhereUniqueInput } from './check-in-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CheckInCountAggregateInput } from './check-in-count-aggregate.input';
import { CheckInAvgAggregateInput } from './check-in-avg-aggregate.input';
import { CheckInSumAggregateInput } from './check-in-sum-aggregate.input';
import { CheckInMinAggregateInput } from './check-in-min-aggregate.input';
import { CheckInMaxAggregateInput } from './check-in-max-aggregate.input';

@ArgsType()
export class CheckInAggregateArgs {

    @Field(() => CheckInWhereInput, {nullable:true})
    @Type(() => CheckInWhereInput)
    where?: CheckInWhereInput;

    @Field(() => [CheckInOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CheckInOrderByWithRelationInput>;

    @Field(() => CheckInWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>;

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
